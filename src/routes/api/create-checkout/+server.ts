import { json, error } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { env } from '$env/dynamic/public';
import type { RequestHandler } from './$types';

// Plans disponibles avec leur Price ID Stripe
const PLANS: Record<string, { name: string; amount: number; priceLabel: string }> = {
	BASIQUE: { name: 'Formule Basique', amount: 799, priceLabel: '7,99 €' },
	COMPLÈTE: { name: 'Formule Complète', amount: 1999, priceLabel: '19,99 €' },
	PREMIUM: { name: 'Formule Premium', amount: 3999, priceLabel: '39,99 €' }
};

export const POST: RequestHandler = async ({ request }) => {
	const stripe = new Stripe(STRIPE_SECRET_KEY);

	let body: { plan: string; answers: Record<string, unknown> };
	try {
		body = await request.json();
	} catch {
		throw error(400, 'Corps de la requête invalide');
	}

	const plan = PLANS[body.plan];
	if (!plan) throw error(400, `Formule "${body.plan}" inconnue`);

	const baseUrl = env.PUBLIC_BASE_URL ?? 'http://localhost:5173';

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		mode: 'payment',
		locale: 'fr',
		line_items: [
			{
				price_data: {
					currency: 'eur',
					product_data: {
						name: `AlkyNippon — ${plan.name}`,
						description: `Guide de voyage personnalisé pour le Japon (${plan.priceLabel})`
					},
					unit_amount: plan.amount
				},
				quantity: 1
			}
		],
		// Métadonnées du client pour retrouver les réponses du questionnaire
		metadata: {
			client_email: String(body.answers?.email ?? ''),
			client_name: String(body.answers?.name ?? ''),
			plan: body.plan,
			answers_json: JSON.stringify(body.answers).slice(0, 500)
		},
		customer_email: String(body.answers?.email ?? undefined) || undefined,
		success_url: `${baseUrl}/itineraires?success=true&plan=${encodeURIComponent(body.plan)}&session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${baseUrl}/itineraires?cancelled=true`
	});

	return json({ url: session.url });
};
