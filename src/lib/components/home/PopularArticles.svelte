<script lang="ts">
	// Importation des runes et transitions
	import { fly } from 'svelte/transition';

	// Structure de données interne pour les articles
	const articles = [
		{
			category: 'ITINÉRAIRES',
			categoryColor: 'text-jp-red',
			title: 'Itinéraire 2 semaines au Japon : le guide complet',
			duration: '12 min de lecture',
			image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80'
		},
		{
			category: 'CONSEILS PRATIQUES',
			categoryColor: 'text-orange-500',
			title: 'JR Pass, Suica, Pasmo : quel pass choisir ?',
			duration: '8 min de lecture',
			image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=80'
		},
		{
			category: 'DESTINATIONS',
			categoryColor: 'text-blue-500',
			title: 'Kyoto : lieux incontournables et conseils',
			duration: '10 min de lecture',
			image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80'
		},
		{
			category: 'QUAND PARTIR',
			categoryColor: 'text-jp-red',
			title: 'Quand partir au Japon ? La meilleure période mois par mois',
			duration: '7 min de lecture',
			image: 'https://images.unsplash.com/photo-1522850959076-3297a3115053?w=600&q=80'
		}
	];
</script>

<section class="bg-white py-32">
	<div class="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row gap-16">
		
		<div class="lg:w-1/4">
			<div class="mb-6 flex items-center gap-4">
				<span class="h-[1px] w-12 bg-jp-red"></span>
				<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-jp-red">
					Articles populaires
				</span>
			</div>
			
			<h2 class="mb-10 font-serif text-[42px] leading-[1.1] text-jp-black">
				Nos guides les plus consultés
			</h2>
			
			<button class="group flex items-center gap-3 border border-jp-black/20 px-8 py-4 text-[11px] font-bold tracking-widest transition-all hover:bg-jp-black hover:text-white uppercase">
				Voir tous les articles 
				<span class="transition-transform group-hover:translate-x-1">→</span>
			</button>
		</div>

		<div class="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each articles as article}
				<div class="group flex flex-col cursor-pointer">
					<div class="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
						<img 
							src={article.image} 
							alt={article.title} 
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
					</div>

					<div class="flex flex-col flex-1">
						<span class="mb-3 text-[10px] font-bold uppercase tracking-widest {article.categoryColor}">
							{article.category}
						</span>
						
						<h3 class="mb-4 font-serif text-[19px] leading-snug text-jp-black transition-colors group-hover:text-jp-red">
							{article.title}
						</h3>
						
						<div class="mt-auto flex items-center gap-2 text-[10px] text-jp-gray">
							<span class="opacity-40">
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
							</span>
							{article.duration}
						</div>
					</div>
				</div>
			{/each}
		</div>

	</div>
</section>

<style>
	/* Optimisation pour s'assurer que le texte ne bave pas sur les écrans retina */
	h2, h3 {
		-webkit-font-smoothing: antialiased;
	}
</style>