<script lang="ts">
	import { getArticles } from '$lib/data/articles';

	const articles = getArticles();
</script>

<svelte:head>
	<title>Blog — Guides & inspirations | AlkyNippon</title>
	<meta
		name="description"
		content="Articles AlkyNippon : itinéraires, transports, destinations et saisons pour préparer votre voyage au Japon."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-24 pt-32">
	<div class="container mx-auto max-w-5xl px-6 lg:px-12">
		<div class="mb-14 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bc002d]">Magazine</span>
		</div>
		<h1 class="mb-6 font-serif text-5xl italic text-jp-black md:text-6xl">Le <span class="not-italic text-[#bc002d]">blog</span></h1>
		<p class="mb-16 max-w-2xl text-lg leading-relaxed text-jp-gray">
			Guides rédigés avec la même exigence que le reste du site : utiles sur le terrain, sans remplissage.
		</p>

		<div class="space-y-12 border-t border-gray-200/80 pt-12">
			{#each articles as a}
				<article class="group grid gap-8 border-b border-gray-200/80 pb-12 last:border-0 md:grid-cols-12 md:items-center">
					<a href="/blog/{a.slug}" class="relative block aspect-[16/10] overflow-hidden bg-gray-100 md:col-span-5">
						<img
							src={a.image}
							alt=""
							class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
							loading="lazy"
						/>
					</a>
					<div class="md:col-span-7">
						<span class="text-[10px] font-bold uppercase tracking-widest {a.categoryColor}">{a.category}</span>
						<h2 class="mt-3 font-serif text-2xl text-jp-black transition group-hover:text-[#bc002d] md:text-3xl">
							<a href="/blog/{a.slug}">{a.title}</a>
						</h2>
						<p class="mt-4 text-sm leading-relaxed text-jp-gray">{a.excerpt}</p>
						<div class="mt-4 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-jp-gray">
							<span>{a.date}</span>
							<span>{a.readTime}</span>
						</div>
						<a
							href="/blog/{a.slug}"
							class="mt-6 inline-block border-b border-[#bc002d]/40 pb-1 text-[11px] font-bold uppercase tracking-widest text-[#bc002d] hover:border-[#bc002d]"
						>
							Lire
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</div>
