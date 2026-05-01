<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageProps } from './$types';

	let { data } = $props() as PageProps;
</script>

<svelte:head>
	<title>{data.article.title} | AlkyNippon</title>
	<meta name="description" content={data.article.excerpt} />
</svelte:head>

<article class="bg-white">
	<header class="relative flex min-h-[45vh] items-end overflow-hidden md:min-h-[50vh]">
		<img
			src={data.article.image}
			alt=""
			class="absolute inset-0 h-full w-full object-cover"
			role="presentation"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
		<div class="relative w-full px-6 pb-12 pt-32 lg:px-24" in:fly={{ y: 20, duration: 600 }}>
			<span class="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-white/90"
				>{data.article.category}</span
			>
			<h1 class="max-w-3xl font-serif text-4xl text-white md:text-5xl">{data.article.title}</h1>
			<p class="mt-4 text-[10px] uppercase tracking-widest text-white/70">
				{data.article.date} — {data.article.readTime}
			</p>
		</div>
	</header>

	<div class="container mx-auto max-w-3xl px-6 py-16 lg:px-12 lg:py-20">
		<p class="mb-12 font-serif text-2xl leading-relaxed text-gray-800 md:text-3xl">{data.article.excerpt}</p>
		<div class="prose prose-lg max-w-none text-gray-600">
			{#each data.article.paragraphs as p}
				<p class="mb-6 leading-relaxed last:mb-0">{p}</p>
			{/each}
		</div>
		<footer class="mt-16 flex flex-col gap-4 border-t border-gray-100 pt-10 sm:flex-row sm:justify-between">
			<a href="/blog" class="text-[11px] font-bold uppercase tracking-widest text-[#bc002d] hover:underline"
				>← Tous les articles</a
			>
			<a
				href="/itineraires"
				class="text-[11px] font-bold uppercase tracking-widest text-jp-black hover:text-[#bc002d]"
				>Configurateur d’itinéraire</a
			>
		</footer>
	</div>
</article>
