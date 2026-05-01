<script lang="ts">
	import InteractiveMap from '$lib/components/home/InteractiveMap.svelte';

	const zones = [
		{
			name: 'Hokkaido',
			tag: 'Nature',
			blurb: 'Saisons marquées, ski et paysages volcaniques.',
			href: '/blog/quand-partir-japon',
			img: 'https://images.unsplash.com/photo-1578469640199-1c3583ecb997?auto=format&fit=crop&w=640&q=80'
		},
		{
			name: 'Tokyo',
			tag: 'Guide ville',
			blurb: 'Mégalopole et sanctuaires — par quartiers.',
			href: '/destinations/tokyo',
			img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=640&q=80'
		},
		{
			name: 'Kyoto',
			tag: 'Guide ville',
			blurb: 'Temples, jardins et rythme lent.',
			href: '/destinations/kyoto',
			img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=640&q=80'
		},
		{
			name: 'Osaka',
			tag: 'Guide ville',
			blurb: 'Gastronomie et hub vers le Kansai.',
			href: '/destinations/osaka',
			img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=640&q=80'
		}
	];
</script>

<svelte:head>
	<title>Carte interactive du Japon — AlkyNippon</title>
	<meta
		name="description"
		content="Carte indicative du Japon : repères géographiques, liens vers Tokyo, Kyoto, Osaka et conseils saisonniers."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-20 pt-28">
	<section class="border-b border-black/[0.05] bg-white">
		<div class="mx-auto max-w-6xl px-6 py-14 lg:flex lg:items-end lg:justify-between lg:gap-16 lg:px-12 lg:py-20">
			<div class="max-w-2xl">
				<div class="mb-8 flex items-center gap-4">
					<span class="h-[2px] w-12 bg-[#bc002d]"></span>
					<span class="text-[11px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Exploration</span>
				</div>
				<h1 class="font-serif text-5xl italic leading-tight text-jp-black md:text-6xl lg:text-7xl">
					Carte <span class="not-italic text-[#bc002d]">&</span> navigation
				</h1>
				<p class="mt-8 text-lg leading-relaxed text-jp-gray">
					Une carte stylisée calée sur notre fichier SVG officiel des préfectures : les points suivent les contours réels,
					pour une lecture plus honnête que des pastilles au hasard.
				</p>
			</div>
			<div class="mt-10 shrink-0 lg:mt-0">
				<a
					href="/commander"
					class="inline-flex items-center gap-3 border border-jp-black px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-jp-black transition-colors hover:bg-[#bc002d] hover:text-white hover:border-[#bc002d]"
				>
					Passer au guide sur mesure →
				</a>
			</div>
		</div>
	</section>

	<InteractiveMap
		title="Les régions que nous détaillons"
		subtitle="Carte indicative"
		description="Points positionnés sur la géométrie du fichier carte ; sous la carte, des accès directs pour mobile et lecture rapide."
		showMapCta={false}
	/>

	<section class="mx-auto max-w-6xl px-6 py-16 lg:px-12">
		<div class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<span class="h-px w-10 bg-[#bc002d]"></span>
					<span class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Fiches liées</span>
				</div>
				<h2 class="font-serif text-3xl text-jp-black md:text-4xl">Depuis la carte</h2>
			</div>
			<p class="max-w-md text-sm text-jp-gray">
				Chaque carte mène à du contenu rédigé sur le site — guides ville ou article magazine selon la zone.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each zones as z}
				<a
					href={z.href}
					class="group flex flex-col overflow-hidden border border-gray-100 bg-white shadow-sm transition hover:border-[#bc002d]/35 hover:shadow-md"
				>
					<div class="relative aspect-[5/4] overflow-hidden">
						<img
							src={z.img}
							alt=""
							class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
							loading="lazy"
						/>
						<span
							class="absolute left-4 top-4 bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#bc002d]"
							>{z.tag}</span
						>
					</div>
					<div class="flex flex-1 flex-col p-6">
						<h3 class="font-serif text-xl text-jp-black group-hover:text-[#bc002d]">{z.name}</h3>
						<p class="mt-2 flex-1 text-xs leading-relaxed text-jp-gray">{z.blurb}</p>
						<span class="mt-4 text-[10px] font-bold uppercase tracking-widest text-jp-black group-hover:text-[#bc002d]"
							>Ouvrir →</span
						>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="mx-auto max-w-6xl px-6 pb-8 lg:px-12">
		<div class="flex flex-col items-start justify-between gap-8 border border-[#bc002d]/20 bg-[#111] px-8 py-12 text-white md:flex-row md:items-center md:px-12">
			<div>
				<p class="text-[10px] font-bold uppercase tracking-[0.28em] text-[#bc002d]">Étape suivante</p>
				<p class="mt-3 max-w-xl font-serif text-2xl leading-snug md:text-3xl">
					Vous avez une vision du territoire — affinez-la avec le configurateur.
				</p>
			</div>
			<a
				href="/itineraires#configurateur"
				class="shrink-0 bg-[#bc002d] px-10 py-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black"
			>
				Configurateur →
			</a>
		</div>
	</section>
</div>
