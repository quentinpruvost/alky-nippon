<script lang="ts">
	import PartnerToolkit from '$lib/components/partners/PartnerToolkit.svelte';
</script>

<svelte:head>
	<title>Commander votre guide — AlkyNippon</title>
	<meta
		name="description"
		content="Personnalisez votre voyage au Japon : questionnaire, formules Essentiel ou Expert, livraison par email."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-24 pt-28">
	<section class="relative overflow-hidden border-b border-black/[0.06] bg-[#111] text-white">
		<div class="pointer-events-none absolute inset-0 opacity-40">
			<img
				src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1920"
				alt=""
				class="h-full w-full object-cover"
				role="presentation"
			/>
		</div>
		<div class="relative mx-auto max-w-5xl px-6 py-20 lg:px-12 lg:py-28">
			<div class="mb-8 flex items-center gap-4">
				<span class="h-[2px] w-12 bg-[#bc002d]"></span>
				<span class="text-[11px] font-bold uppercase tracking-[0.28em] text-[#bc002d]">Offres</span>
			</div>
			<h1 class="max-w-3xl font-serif text-5xl leading-[1.08] md:text-6xl lg:text-7xl">
				Commandez un <span class="italic text-white/95">itinéraire</span>
				<span class="block pt-2 text-3xl font-normal not-italic text-white/75 md:text-4xl">conçu pour votre rythme</span>
			</h1>
			<p class="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
				Le configurateur pose les bonnes questions — vous choisissez une formule. Réponse sous forme de dossier et,
				selon l’offre, d’un échange avec un expert.
			</p>
			<div class="mt-12 flex flex-wrap gap-4">
				<a
					href="/itineraires#configurateur"
					class="bg-[#bc002d] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black"
				>
					Lancer le questionnaire →
				</a>
				<a
					href="/contact"
					class="border border-white/35 px-10 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white/10"
				>
					Une question avant ?
				</a>
			</div>
		</div>
	</section>

	<section class="mx-auto max-w-5xl px-6 py-20 lg:px-12">
		<div class="grid gap-16 lg:grid-cols-12 lg:gap-12">
			<div class="lg:col-span-5">
				<div class="mb-6 flex items-center gap-4">
					<span class="h-[2px] w-10 bg-[#bc002d]"></span>
					<span class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Déroulé</span>
				</div>
				<h2 class="font-serif text-3xl text-jp-black md:text-4xl">Trois étapes, sans friction</h2>
				<p class="mt-6 text-jp-gray leading-relaxed">
					Nous nous concentrons sur l’essentiel : vos dates, vos envies, votre niveau de confort avec les transports.
					L’outil oriente ensuite vers la bonne formule.
				</p>
			</div>
			<ol class="space-y-10 lg:col-span-7">
				{#each [{ n: '01', t: 'Questionnaire guidé', d: 'Durée, villes rêvées, budget indicatif et contraintes — tout ce qui permet de calibrer un voyage réaliste.' }, { n: '02', t: 'Choix de la formule', d: 'Essentiel (digital complet) ou Expert (digital + visio 45 min et canal prioritaire).' }, { n: '03', t: 'Réception', d: 'Validation par email — vous recevez la synthèse et les prochaines étapes dans votre boîte.' }] as step}
					<li class="flex gap-6 border-l-2 border-[#bc002d]/25 pl-8">
						<span class="font-serif text-4xl tabular-nums text-[#bc002d]/90">{step.n}</span>
						<div>
							<h3 class="font-serif text-xl text-jp-black">{step.t}</h3>
							<p class="mt-2 text-sm leading-relaxed text-jp-gray">{step.d}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<section class="border-y border-gray-200/80 bg-white py-20">
		<div class="mx-auto max-w-6xl px-6 lg:px-12">
			<div class="mb-14 text-center">
				<div class="mb-6 flex justify-center">
					<span class="h-[2px] w-12 bg-[#bc002d]"></span>
				</div>
				<h2 class="font-serif text-3xl text-jp-black md:text-4xl">Les formules</h2>
				<p class="mx-auto mt-4 max-w-lg text-sm text-jp-gray">
					Tarification indicative affichée sur le configurateur ; les avantages ci-dessous résument ce qui vous attend.
				</p>
			</div>

			<div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
				<!-- BASIQUE -->
				<div class="flex flex-col border border-gray-100 bg-[#faf9f6] p-10 shadow-sm transition hover:border-[#bc002d]/30">
					<span class="text-[10px] font-bold uppercase tracking-[0.28em] text-jp-gray">Essentiel</span>
					<h3 class="mt-4 font-serif text-3xl text-jp-black">Basique</h3>
                    <p class="mt-2 text-2xl font-serif text-jp-gray">7.99€</p>
					<p class="mt-4 flex-1 text-sm leading-relaxed text-jp-gray">
						L'essentiel pour structurer votre projet sans vous ruiner.
					</p>
					<ul class="mt-8 space-y-3 text-sm text-jp-black">
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Pdf personnalité (version simplifiée)</li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Grandes étapes du voyage</li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Recommandations adaptées</li>
					</ul>
					<a
						href="/itineraires#configurateur"
						class="mt-10 bg-jp-black py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#bc002d]"
					>
						Choisir Basique
					</a>
				</div>

				<!-- COMPLÈTE -->
				<div class="relative flex flex-col border-2 border-[#bc002d] bg-white p-10 shadow-xl">
					<span
						class="absolute right-6 top-6 bg-[#bc002d] px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white"
						>Recommandée ⭐</span
					>
					<span class="text-[10px] font-bold uppercase tracking-[0.28em] text-[#bc002d]">Le choix idéal</span>
					<h3 class="mt-4 font-serif text-3xl text-jp-black">Complète</h3>
                    <p class="mt-2 text-2xl font-serif text-[#bc002d]">19.99€</p>
					<p class="mt-4 flex-1 text-sm leading-relaxed text-jp-gray">
						Notre formule la plus appréciée pour un voyage organisé et serein, sans mauvaise surprise.
					</p>
					<ul class="mt-8 space-y-3 text-sm text-jp-black">
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> <strong>Pdf personnalisé complet prêt a l'emploi</strong></li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Itinéraire jour par jour détaillé</li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Budget précis et optimisé</li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Conseil transport</li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Activités et lieux concrets</li>
					</ul>
					<a
						href="/itineraires#configurateur"
						class="mt-10 bg-[#bc002d] py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-jp-black"
					>
						Choisir Complète
					</a>
				</div>

				<!-- PREMIUM -->
				<div class="flex flex-col border border-gray-100 bg-[#faf9f6] p-10 shadow-sm transition hover:border-[#bc002d]/30">
					<span class="text-[10px] font-bold uppercase tracking-[0.28em] text-jp-gray">Expertise</span>
					<h3 class="mt-4 font-serif text-3xl text-jp-black">Premium</h3>
                    <p class="mt-2 text-2xl font-serif text-jp-gray">39.99€</p>
					<p class="mt-4 flex-1 text-sm leading-relaxed text-jp-gray">
						Pour les voyageurs exigeants qui veulent échanger pour un séjour sans faille.
					</p>
					<ul class="mt-8 space-y-3 text-sm text-jp-black">
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> <strong>Toute la formule complète</strong></li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Ajustements selon le projet</li>
						<li class="flex gap-3 items-start"><span class="text-[#bc002d]">—</span> Support par mail (2 à 3 échanges pour ajuster l'itinéraire, réponse sous 48h)</li>
					</ul>
					<a
						href="/itineraires#configurateur"
						class="mt-10 bg-jp-black py-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#bc002d]"
					>
						Choisir Premium
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="border-y border-gray-200/90 bg-[#faf9f6] py-16 lg:py-20">
		<div class="mx-auto max-w-5xl px-6 lg:px-12">
			<p class="mb-8 max-w-2xl text-sm leading-relaxed text-jp-gray">
				Une fois votre dossier demandé, bloquez vos grandes lignes : vols, Shinkansen et premières nuits. Ces liens nous aident à
				faire vivre AlkyNippon tout en vous orientant vers des réservations fiables.
			</p>
			<PartnerToolkit kicker="Après la commande" title="Réservez trains, vols et hébergements" />
		</div>
	</section>

	<section class="mx-auto max-w-3xl px-6 py-20 lg:px-12">
		<div class="mb-10 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">FAQ</span>
		</div>
		<dl class="space-y-10">
			<div>
				<dt class="font-serif text-lg text-jp-black">Combien de temps prend le questionnaire ?</dt>
				<dd class="mt-2 text-sm leading-relaxed text-jp-gray">
					Comptez quelques minutes — les réponses servent uniquement à calibrer votre dossier.
				</dd>
			</div>
			<div>
				<dt class="font-serif text-lg text-jp-black">Puis-je combiner avec vos guides ville ?</dt>
				<dd class="mt-2 text-sm leading-relaxed text-jp-gray">
					Oui : Tokyo, Kyoto et Osaka sont sur le site ; l’itinéraire peut s’aligner sur ces étapes pour une lecture
					coordonnée.
				</dd>
			</div>
			<div>
				<dt class="font-serif text-lg text-jp-black">Et si je préfère écrire ?</dt>
				<dd class="mt-2 text-sm leading-relaxed text-jp-gray">
					La page <a href="/contact" class="border-b border-[#bc002d]/40 font-medium text-[#bc002d] hover:border-[#bc002d]"
						>Contact</a
					>
					reçoit vos messages directs pour les demandes atypiques ou les projets très longs.
				</dd>
			</div>
		</dl>

		<div class="mt-16 flex flex-wrap gap-6 border-t border-gray-200 pt-12">
			<a href="/carte" class="text-[11px] font-bold uppercase tracking-widest text-jp-black hover:text-[#bc002d]"
				>Carte interactive</a
			>
			<a href="/blog" class="text-[11px] font-bold uppercase tracking-widest text-jp-black hover:text-[#bc002d]"
				>Blog magazine</a
			>
			<a href="/destinations" class="text-[11px] font-bold uppercase tracking-widest text-jp-black hover:text-[#bc002d]"
				>Guides destinations</a
			>
		</div>
	</section>
</div>
