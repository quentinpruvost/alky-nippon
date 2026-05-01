<script lang="ts">
	import JapanSvgInteractiveMap from '$lib/components/map/JapanSvgInteractiveMap.svelte';
	import { getMapRegionsForSidebar } from '$lib/data/mapRegions';

	const sidebarRegions = getMapRegionsForSidebar();
</script>

<svelte:head>
	<title>Carte interactive du Japon — AlkyNippon</title>
	<meta
		name="description"
		content="Carte SVG interactive des préfectures : survolez pour voir le nom, les articles et guides disponibles."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-24 pt-28">
	<section class="border-b border-black/[0.06] bg-white">
		<div class="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-20">
			<div class="mb-8 flex flex-wrap items-center gap-6">
				<div class="flex items-center gap-4">
					<span class="h-[2px] w-12 bg-[#bc002d]"></span>
					<span class="text-[11px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Carte vivante</span>
				</div>
				<span class="text-[10px] uppercase tracking-[0.18em] text-jp-gray">
					Légende · préfectures avec contenu plus foncées
				</span>
			</div>
			<h1 class="max-w-3xl font-serif text-5xl italic leading-tight text-jp-black md:text-6xl">
				Japon <span class="not-italic text-[#bc002d]">interactif</span>
			</h1>
			<p class="mt-8 max-w-2xl text-lg leading-relaxed text-jp-gray">
				Le nom et le détail de chaque préfecture s’affichent dans le panneau sous la carte (survol ou sélection). Les zones
				avec contenu AlkyNippon sont plus foncées ; les boutons ouvrent le guide ou l’article — pas de redirection surprise au
				clic sur la carte.
			</p>
			<ul class="mt-10 flex flex-wrap gap-8 text-[11px] font-bold uppercase tracking-[0.14em] text-jp-black">
				<li class="flex items-center gap-2">
					<span class="h-3 w-3 rounded-full bg-[#cfcabf] ring-2 ring-[#faf9f6]"></span>
					Avec contenu
				</li>
				<li class="flex items-center gap-2">
					<span class="h-3 w-3 rounded-full bg-[#dcd9d3] ring-2 ring-[#faf9f6]"></span>
					Pas encore reliée
				</li>
				<li class="flex items-center gap-2">
					<span class="h-3 w-3 rounded-full bg-[#bc002d]/55 ring-2 ring-[#faf9f6]"></span>
					Survol / focus
				</li>
			</ul>
		</div>
	</section>

	<section class="mx-auto max-w-6xl px-6 py-16 lg:px-12">
		<div class="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-20">
			<div>
				<JapanSvgInteractiveMap />
				<p class="mt-8 max-w-xl text-sm leading-relaxed text-jp-gray">
					<strong class="font-semibold text-jp-black">À savoir :</strong> touchez une zone pour verrouiller la fiche sous la
					carte ; bouton « Fermer » ou touche Échap pour tout effacer. La carte impose un attribut{' '}
					<code class="text-xs">viewBox</code> explicite pour un rendu net à toutes les tailles.
				</p>
			</div>

			<aside class="border border-gray-200/90 bg-white p-8 shadow-sm lg:sticky lg:top-28">
				<div class="mb-6 flex items-center gap-3">
					<span class="h-px w-8 bg-[#bc002d]"></span>
					<h2 class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Contenus reliés</h2>
				</div>
				<p class="mb-8 text-xs leading-relaxed text-jp-gray">
					Liste générée depuis <code class="rounded bg-[#faf9f6] px-1 py-0.5 text-[10px]">mapRegions.ts</code> — ajoutez une
					ligne pour publier un nouveau lien carte → article ou guide.
				</p>
				<ul class="space-y-5">
					{#each sidebarRegions as r}
						<li class="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
							<p class="font-serif text-lg text-jp-black">{r.label || r.prefectureId}</p>
							<p class="mt-1 text-[10px] uppercase tracking-[0.16em] text-jp-gray">{r.prefectureId}</p>
							<div class="mt-3 flex flex-col gap-2">
								{#if r.guideHref}
									<a href={r.guideHref} class="text-xs font-semibold text-[#bc002d] hover:underline">Guide destination →</a>
								{/if}
								{#if r.articleSlug && r.articleTitle}
									<a href="/blog/{r.articleSlug}" class="text-xs text-jp-gray hover:text-[#bc002d]">{r.articleTitle}</a>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
				<a
					href="/commander"
					class="mt-10 block border border-jp-black py-4 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-jp-black transition-colors hover:bg-[#bc002d] hover:text-white hover:border-[#bc002d]"
				>
					Besoin d’un dossier sur mesure
				</a>
			</aside>
		</div>
	</section>

	<section class="mx-auto max-w-3xl px-6 pb-16 lg:px-12">
		<div class="flex items-center gap-4 border-t border-gray-200 pt-14">
			<span class="h-[2px] w-10 bg-[#bc002d]"></span>
			<h2 class="font-serif text-2xl text-jp-black">Enrichir la carte</h2>
		</div>
		<ol class="mt-8 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-jp-gray">
			<li>Ouvrez <code class="rounded bg-white px-1.5 py-0.5 text-xs">static/japan.svg</code> et repérez l’id de la préfecture (format <code class="text-xs">JP-13</code>).</li>
			<li>
				Ajoutez une entrée dans <code class="rounded bg-white px-1.5 py-0.5 text-xs">src/lib/data/mapRegions.ts</code> avec
				<code class="text-xs">articleSlug</code> (slug existant dans <code class="text-xs">articles.ts</code>) et/ou
				<code class="text-xs">guideHref</code>.
			</li>
			<li>La préfecture apparaît plus foncée sur la carte et l’infobulle affiche les pastilles « Article » / « Guide ».</li>
		</ol>
	</section>
</div>
