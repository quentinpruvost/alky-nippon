import { env } from '$env/dynamic/public';

/**
 * URLs partenaires / affiliés.
 * Renommez `.env.example` en `.env` et renseignez les PUBLIC_* avec vos liens trackés complets
 * ( Booking Partner Hub, programme Klook, Amazon Associates, etc. ).
 */
export const partnerFallback = {
	bookingJapan: 'https://www.booking.com/country/jp.fr.html',
	klookJapan: 'https://www.klook.com/fr/country/japan/',
	jrPassFr: 'https://www.jrpass.com/fr',
	wifiJapan: 'https://www.klook.com/fr/search/results?q=japan+pocket+wifi',
	skyscannerJapan: 'https://www.skyscanner.fr/vols/fr/japon/fr-jp/vols-japon.php',
	getyourguideJapan: 'https://www.getyourguide.fr/japon-l169/',
	amazonGear: 'https://www.amazon.fr/s?k=accessoire+voyage+japon',
	simJapan: 'https://www.klook.com/fr/search/results?q=japan+esim'
} as const;

function pick(primary: string | undefined, fallback: string): string {
	const v = primary?.trim();
	return v && v.length > 0 ? v : fallback;
}

/** true si au moins une URL personnalisée (typiquement affiliée) est configurée */
export function hasAffiliateConfigured(): boolean {
	return Boolean(
		env.PUBLIC_PARTNER_BOOKING_URL?.trim() ||
			env.PUBLIC_PARTNER_KLOOK_URL?.trim() ||
			env.PUBLIC_PARTNER_JRPASS_URL?.trim() ||
			env.PUBLIC_PARTNER_WIFI_URL?.trim() ||
			env.PUBLIC_PARTNER_SKYSCANNER_URL?.trim() ||
			env.PUBLIC_PARTNER_GYG_URL?.trim() ||
			env.PUBLIC_PARTNER_AMAZON_URL?.trim() ||
			env.PUBLIC_PARTNER_SIM_URL?.trim()
	);
}

function relFor(custom: boolean): string {
	return custom ? 'noopener noreferrer sponsored' : 'noopener noreferrer';
}

export type PartnerLink = { href: string; rel: string; affiliate: boolean };

export function partnerBookingJapan(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_BOOKING_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_BOOKING_URL, partnerFallback.bookingJapan),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerKlookJapan(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_KLOOK_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_KLOOK_URL, partnerFallback.klookJapan),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerJrPass(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_JRPASS_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_JRPASS_URL, partnerFallback.jrPassFr),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerPocketWifi(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_WIFI_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_WIFI_URL, partnerFallback.wifiJapan),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerSkyscannerJapan(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_SKYSCANNER_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_SKYSCANNER_URL, partnerFallback.skyscannerJapan),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerGetYourGuideJapan(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_GYG_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_GYG_URL, partnerFallback.getyourguideJapan),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerAmazonGear(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_AMAZON_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_AMAZON_URL, partnerFallback.amazonGear),
		rel: relFor(affiliate),
		affiliate
	};
}

export function partnerSimJapan(): PartnerLink {
	const affiliate = Boolean(env.PUBLIC_PARTNER_SIM_URL?.trim());
	return {
		href: pick(env.PUBLIC_PARTNER_SIM_URL, partnerFallback.simJapan),
		rel: relFor(affiliate),
		affiliate
	};
}

/** JR East officiel Suica — pas de lien sponsorisé AlkyNippon par défaut */
export function officialSuicaWelcome(): PartnerLink {
	return {
		href: 'https://www.jreast.co.jp/multi/en/welcome.html',
		rel: 'noopener noreferrer',
		affiliate: false
	};
}
