<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Train, Wifi, Hotel, Map, Camera, CreditCard, CheckCircle } from 'lucide-svelte';
	import AffiliateNote from '$lib/components/partners/AffiliateNote.svelte';
	import PartnerToolkit from '$lib/components/partners/PartnerToolkit.svelte';
	import {
		partnerJrPass,
		partnerPocketWifi,
		officialSuicaWelcome,
		partnerBookingJapan,
		partnerKlookJapan,
		partnerAmazonGear
	} from '$lib/data/partners';

	type Tool = {
		title: string;
		desc: string;
		href: string;
		rel: string;
		icon: typeof Train;
		tag: string;
		cta: string;
		highlight?: boolean;
	};

	const jr = partnerJrPass();
	const wifi = partnerPocketWifi();
	const suica = officialSuicaWelcome();
	const bk = partnerBookingJapan();
	const kl = partnerKlookJapan();

	const essentials: Tool[] = [
		{
			title: 'JR Pass',
			desc: 'Le sésame pour traverser le Japon en Shinkansen. Rentable dès un aller-retour Tokyo–Osaka.',
			href: jr.href,
			rel: jr.rel,
			icon: Train,
			tag: 'Indispensable',
			cta: 'Voir les pass',
			highlight: true
		},
		{
			title: 'Wi‑Fi pocket ou eSIM',
			desc: 'Connexion mobile pour plusieurs appareils — retrait aéroport ou livraison selon offres.',
			href: wifi.href,
			rel: wifi.rel,
			icon: Wifi,
			tag: 'Connexion',
			cta: 'Comparer les offres'
		},
		{
			title: 'Suica / Pasmo',
			desc: 'Carte prépayée JR East pour transports et paiements du quotidien — infos officielles.',
			href: suica.href,
			rel: suica.rel,
			icon: CreditCard,
			tag: 'Officiel JR East',
			cta: 'Page Welcome Suica'
		}
	];

	const booking: Tool[] = [
		{
			title: 'Booking.com',
			desc: 'Ryokan, business hotels et annulation flexible — filtrez par quartier à Tokyo, Kyoto ou Osaka.',
			href: bk.href,
			rel: bk.rel,
			icon: Hotel,
			tag: 'Logement',
			cta: 'Chercher un hôtel'
		},
		{
			title: 'Klook',
			desc: 'TeamLab, Universal Studios Japan, transferts privés — souvent avec files coupe-file.',
			href: kl.href,
			rel: kl.rel,
			icon: Map,
			tag: 'Activités',
			cta: 'Réserver une activité'
		}
	];

	const amazonGear = partnerAmazonGear();
</script>

<svelte:head>
	<title>Préparer votre voyage — AlkyNippon</title>
	<meta
		name="description"
		content="Indispensables, réservations, équipement photo et checklist J-30 pour partir au Japon sereinement."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6]">
	<section class="relative border-b border-gray-100 bg-white pb-24 pt-52">
		<div class="container mx-auto px-6 lg:px-24">
			<div class="max-w-3xl">
				<div class="mb-8 flex items-center gap-4" in:fly={{ y: 20, duration: 800 }}>
					<span class="h-px w-12 bg-[#bc002d]"></span>
					<span class="text-[10px] font-bold uppercase tracking-[0.4em] text-[#bc002d]">Planification</span>
				</div>
				<h1 class="mb-10 font-serif text-6xl leading-none text-black md:text-8xl" in:fly={{ y: 30, duration: 1000 }}>
					L'essentiel <br /><span class="font-light italic text-gray-900">du départ.</span>
				</h1>
				<p class="max-w-xl text-lg leading-relaxed text-gray-500">
					Oubliez le stress de l'organisation. Nous avons condensé l’essentiel : outils qui fonctionnent, repères
					clairs, zéro dispersion.
				</p>
			</div>
		</div>
	</section>

	<nav
		class="sticky top-[72px] z-40 hidden border-b border-gray-100 bg-white/90 backdrop-blur-md md:block"
		aria-label="Sections préparation"
	>
		<div class="container mx-auto flex flex-wrap gap-x-10 gap-y-2 px-6 py-5 lg:px-24">
			{#each [
				{ label: 'Les Indispensables', id: 'indispensables' },
				{ label: 'Réservations', id: 'reservations' },
				{ label: 'Équipement', id: 'equipement' },
				{ label: 'Checklist', id: 'checklist' }
			] as item}
				<a
					href="#{item.id}"
					class="text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-colors hover:text-[#bc002d]"
				>
					{item.label}
				</a>
			{/each}
		</div>
	</nav>

	<div class="container mx-auto px-6 py-24 lg:px-24">
		<div class="mb-16 max-w-3xl">
			<AffiliateNote />
		</div>

		<section id="indispensables" class="mb-32 scroll-mt-36">
			<div class="grid gap-8 lg:grid-cols-3">
				{#each essentials as item}
					{@const Icon = item.icon}
					<div
						class="group relative flex flex-col justify-between border border-gray-100 bg-white p-10 transition-all duration-700 hover:shadow-2xl {item.highlight
							? 'ring-1 ring-[#bc002d]/20'
							: ''}"
					>
						{#if item.highlight}
							<div
								class="absolute -top-3 left-10 bg-[#bc002d] px-4 py-1 text-[9px] font-black uppercase tracking-widest text-white"
							>
								Recommandé
							</div>
						{/if}
						<div>
							<div class="mb-10 text-[#bc002d] transition-transform duration-500 group-hover:scale-110">
								<Icon size={32} strokeWidth={1} />
							</div>
							<h3 class="mb-4 font-serif text-3xl text-black">{item.title}</h3>
							<p class="mb-10 text-sm leading-relaxed text-gray-500">{item.desc}</p>
						</div>
						<a
							href={item.href}
							rel={item.rel}
							target="_blank"
							class="group/btn mt-auto flex items-center justify-between border-t border-gray-50 pt-8"
						>
							<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-black">{item.cta}</span>
							<span
								class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-black transition-all group-hover/btn:bg-black group-hover/btn:text-white"
								>→</span
							>
						</a>
					</div>
				{/each}
			</div>
		</section>

		<section id="reservations" class="mb-32 scroll-mt-36">
			<div class="mb-10 flex items-center gap-4">
				<span class="h-px w-12 bg-[#bc002d]"></span>
				<span class="text-[10px] font-bold uppercase tracking-[0.35em] text-[#bc002d]">Hébergement & activités</span>
			</div>
			<h2 class="mb-12 max-w-2xl font-serif text-4xl text-black md:text-5xl">Réserver au bon moment.</h2>
			<div class="grid gap-8 lg:grid-cols-2">
				{#each booking as item}
					{@const Icon = item.icon}
					<div
						class="group flex flex-col justify-between border border-gray-100 bg-white p-10 transition-all hover:shadow-xl"
					>
						<div>
							<div class="mb-8 text-[#bc002d] transition-transform duration-500 group-hover:scale-110">
								<Icon size={32} strokeWidth={1} />
							</div>
							<p class="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.tag}</p>
							<h3 class="mb-4 font-serif text-3xl text-black">{item.title}</h3>
							<p class="mb-8 text-sm leading-relaxed text-gray-500">{item.desc}</p>
						</div>
						<a
							href={item.href}
							rel={item.rel}
							target="_blank"
							class="group/btn mt-auto flex items-center justify-between border-t border-gray-50 pt-8"
						>
							<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-black">{item.cta}</span>
							<span
								class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-black transition-all group-hover/btn:border-[#bc002d] group-hover/btn:bg-[#bc002d] group-hover/btn:text-white"
								>→</span
							>
						</a>
					</div>
				{/each}
			</div>
		</section>

		<section id="equipement" class="mb-32 scroll-mt-36">
			<div class="relative overflow-hidden bg-black p-12 text-white lg:p-24">
				<div class="pointer-events-none absolute right-0 top-0 opacity-10">
					<Camera size={400} strokeWidth={0.5} />
				</div>
				<div class="relative z-10 max-w-2xl">
					<h2 class="mb-8 font-serif text-5xl leading-tight">
						Le matériel <span class="italic">photo & vidéo</span> pour ramener le Japon chez vous.
					</h2>
					<p class="mb-12 text-lg font-light leading-relaxed text-gray-400">
						Sélection matériel et accessoires : batteries, cartes mémoire, objectifs polyvalents pour ville et faible
						lumière.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href={amazonGear.href}
							rel={amazonGear.rel}
							target="_blank"
							class="bg-white px-10 py-5 text-[11px] font-bold uppercase tracking-widest text-black transition-all hover:bg-[#bc002d] hover:text-white"
							>Sélection Amazon voyage</a
						>
						<a
							href="/blog/kyoto-lieux-incontournables"
							class="border border-white/20 px-10 py-5 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-white/10"
							>Inspiration photo à Kyoto</a
						>
					</div>
				</div>
			</div>
		</section>

		<section id="checklist" class="grid scroll-mt-36 items-center gap-24 lg:grid-cols-2">
			<div class="relative">
				<img
					src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070"
					alt=""
					class="w-full brightness-75 grayscale transition-all duration-1000 hover:grayscale-0"
				/>
				<div
					class="absolute -bottom-8 -right-8 hidden border border-gray-100 bg-white p-10 shadow-2xl lg:block"
				>
					<div class="flex flex-col gap-5">
						<div class="flex items-center gap-3">
							<CheckCircle size={16} class="text-[#bc002d]" />
							<span class="text-[10px] font-bold uppercase tracking-widest text-black">Passeport à jour</span>
						</div>
						<div class="flex items-center gap-3">
							<CheckCircle size={16} class="text-[#bc002d]" />
							<span class="text-[10px] font-bold uppercase tracking-widest text-black">Visit Japan Web rempli</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 class="mb-10 font-serif text-5xl leading-tight text-black">
					Les 5 étapes <br /><span class="font-light italic text-gray-800">à J-30.</span>
				</h2>
				<div class="space-y-10">
					{#each [
						{
							t: 'Validation administrative',
							d: "Enregistrement sur Visit Japan Web pour le passage douanier et sanitaire."
						},
						{
							t: 'Réservation des trains',
							d: 'Achat du JR Pass si votre itinéraire dépasse deux régions géographiques.'
						},
						{
							t: 'Change & devises',
							d: "Le Japon reste une société de cash. Commandez vos yens à l'avance pour les meilleurs taux."
						}
					] as tip, i}
						<div class="group flex gap-8">
							<span class="font-serif text-4xl text-gray-200 transition-colors group-hover:text-[#bc002d]"
								>{i + 1}.</span
							>
							<div>
								<h4 class="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black">{tip.t}</h4>
								<p class="text-sm leading-relaxed text-gray-500">{tip.d}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>

	<section class="border-y border-gray-100 bg-[#faf9f6] py-20 lg:py-24">
		<div class="container mx-auto max-w-5xl px-6 lg:px-24">
			<PartnerToolkit
				kicker="Monétisation transparente"
				title="Réservez vos vols, trains et nuits — nous soutenez sans surpayeur"
				variant="compact"
			/>
		</div>
	</section>

	<section class="border-y border-gray-100 bg-white py-32 text-center">
		<div class="container mx-auto px-6">
			<h2 class="mb-10 font-serif text-6xl italic text-black">AlkyNippon <span class="not-italic font-bold">Plus</span></h2>
			<p class="mx-auto mb-14 max-w-2xl text-[10px] uppercase leading-loose tracking-[0.4em] text-gray-400">
				Planification guidée : itinéraires, cartes et configurateur pour assembler votre voyage.
			</p>
			<a
				href="/itineraires"
				class="bg-black px-16 py-7 text-[11px] font-black uppercase tracking-[0.4em] text-white shadow-2xl transition-all duration-500 hover:bg-[#bc002d]"
			>
				Accéder au configurateur
			</a>
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.font-serif {
		font-family: 'Playfair Display', serif;
	}
</style>
