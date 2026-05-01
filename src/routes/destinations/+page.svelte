<script lang="ts">
	const destinations = [
		{
			title: 'Tokyo',
			kanji: '東京',
			region: 'Kantō',
			href: '/destinations/tokyo',
			img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80'
		},
		{
			title: 'Kyoto',
			kanji: '京都',
			region: 'Kansai',
			href: '/destinations/kyoto',
			img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80'
		},
		{
			title: 'Osaka',
			kanji: '大阪',
			region: 'Kansai',
			href: '/destinations/osaka',
			img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80'
		}
	];
</script>

<svelte:head>
	<title>Destinations — AlkyNippon</title>
	<meta
		name="description"
		content="Tokyo, Kyoto, Osaka : guides de voyage dans l’univers graphique AlkyNippon — pour préparer votre itinéraire au Japon."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] px-6 pb-20 pt-32 lg:px-24">
	<div class="mb-16 max-w-3xl">
		<div class="mb-8 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bc002d]">Exploration</span>
		</div>

		<h1 class="mb-8 font-serif text-5xl italic leading-tight text-jp-black md:text-6xl">
			Toutes les <span class="not-italic text-[#bc002d]">destinations</span>
		</h1>

		<p class="text-lg leading-relaxed text-jp-gray">
			Trois villes pour structurer un premier voyage ou un retour au Japon : la mégalopole, l’ancienne capitale impériale,
			et la capitale gourmande du Kansai. Chaque guide reprend la même grille éditoriale — lisible, visuelle, actionnable.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each destinations as item}
			<a
				href={item.href}
				class="group relative block aspect-[4/5] overflow-hidden bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bc002d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf9f6]"
			>
				<img
					src={item.img}
					alt=""
					class="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
					loading="lazy"
					decoding="async"
					role="presentation"
				/>
				<div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
					<span class="mb-2 select-none text-4xl font-bold opacity-30" aria-hidden="true">{item.kanji}</span>
					<h2 class="font-serif text-2xl uppercase tracking-widest">{item.title}</h2>
					<span class="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/75">{item.region}</span>
					<span
						class="mt-4 border-b border-white/30 pb-1 text-[10px] tracking-[0.3em] opacity-0 transition-opacity group-hover:opacity-100"
					>
						DÉCOUVRIR
					</span>
				</div>
			</a>
		{/each}
	</div>

	<section class="mt-24 max-w-3xl border-t border-black/10 pt-16">
		<div class="mb-6 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bc002d]">Étape suivante</span>
		</div>
		<h2 class="mb-4 font-serif text-3xl italic text-jp-black md:text-4xl">
			Construire votre <span class="not-italic text-[#bc002d]">itinéraire</span>
		</h2>
		<p class="mb-8 leading-relaxed text-jp-gray">
			Enchaînez avec la préparation pratique et le configurateur : mêmes codes couleurs, même exigence de clarté.
		</p>
		<div class="flex flex-wrap gap-6">
			<a
				href="/preparer"
				class="inline-flex items-center bg-[#bc002d] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black"
			>
				Préparer son voyage
			</a>
			<a
				href="/itineraires"
				class="inline-flex items-center border border-jp-black/20 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-jp-black transition-colors hover:border-[#bc002d] hover:text-[#bc002d]"
			>
				Configurateur
			</a>
		</div>
	</section>
</div>
