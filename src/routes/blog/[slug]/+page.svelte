<script lang="ts">
	import { fly } from 'svelte/transition';
	import PartnerToolkit from '$lib/components/partners/PartnerToolkit.svelte';
	import type { PageProps } from './$types';

	let { data } = $props() as PageProps;
</script>

<svelte:head>
	<title>{data.article.title} | AlkyNippon</title>
	<meta name="description" content={data.article.excerpt} />
</svelte:head>

<article class="bg-[#faf9f6]">
	<header class="relative min-h-[52vh] overflow-hidden md:min-h-[58vh]">
		<img
			src={data.article.image}
			alt=""
			class="absolute inset-0 h-full w-full object-cover"
			role="presentation"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25 md:bg-gradient-to-r md:from-black md:via-black/55 md:to-transparent"></div>
		<div class="relative mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-6 pb-14 pt-36 md:min-h-[58vh] lg:px-12 lg:pb-20">
			<div class="max-w-3xl" in:fly={{ y: 24, duration: 650 }}>
				<span class="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.35em] text-[#bc002d]"
					>{data.article.category}</span
				>
				<h1 class="font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-[3.25rem]">
					{data.article.title}
				</h1>
				<div class="mt-8 flex flex-wrap items-center gap-6 border-t border-white/25 pt-8 text-[10px] uppercase tracking-[0.25em] text-white/75">
					<span>{data.article.date}</span>
					<span class="hidden h-3 w-px bg-white/35 sm:block"></span>
					<span>{data.article.readTime}</span>
				</div>
			</div>
		</div>
	</header>

	<div class="relative z-[1] mx-auto max-w-3xl px-6 lg:px-12">
		<div class="-mt-16 rounded-sm border border-gray-100 bg-white px-8 py-10 shadow-xl md:-mt-20 md:px-12 md:py-12 lg:-mt-24">
			<p class="lead-quote font-serif text-xl italic leading-relaxed text-jp-black md:text-2xl">
				{data.article.excerpt}
			</p>
		</div>
	</div>

	<div class="article-body mx-auto max-w-3xl px-6 pb-24 pt-14 lg:px-12 lg:pb-28 lg:pt-20">
		{#each data.article.paragraphs as p}
			<p class="article-p mb-8 text-[1.05rem] leading-[1.85] text-jp-gray last:mb-0">{p}</p>
		{/each}

		<div class="mt-16 flex flex-wrap gap-4 border-y border-gray-200 py-10">
			<span class="w-full text-[10px] font-bold uppercase tracking-[0.22em] text-jp-gray">Partager le magazine</span>
			<p class="text-sm text-jp-gray">
				Gardez cette page sous la main pour vos réservations — ou envoyez-la à vos compagnons de voyage.
			</p>
		</div>

		<div class="mt-14">
			<PartnerToolkit
				variant="compact"
				kicker="Passer à l’action"
				title="Réserver votre prochaine étape au Japon"
			/>
		</div>

		<footer class="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
			<a href="/blog" class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#bc002d] hover:underline">
				← Tous les articles
			</a>
			<div class="flex flex-wrap gap-6">
				<a href="/commander" class="text-[11px] font-bold uppercase tracking-[0.18em] text-jp-black hover:text-[#bc002d]">
					Commander un guide
				</a>
				<a href="/itineraires#configurateur" class="text-[11px] font-bold uppercase tracking-[0.18em] text-jp-black hover:text-[#bc002d]">
					Configurateur
				</a>
			</div>
		</footer>
	</div>
</article>

	{#if data.related?.length}
		<section class="border-t border-gray-200 bg-white py-20" aria-label="Articles liés">
			<div class="mx-auto max-w-6xl px-6 lg:px-12">
				<div class="mb-12 flex items-center gap-4">
					<span class="h-[2px] w-10 bg-[#bc002d]"></span>
					<h2 class="text-[11px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Suite de lecture</h2>
				</div>
				<div class="grid gap-10 md:grid-cols-2">
					{#each data.related as r}
						<a href="/blog/{r.slug}" class="group grid grid-cols-1 gap-6 overflow-hidden border border-gray-100 bg-[#faf9f6] shadow-sm transition hover:border-[#bc002d]/30 sm:grid-cols-5">
							<div class="relative aspect-[16/11] bg-gray-100 sm:col-span-2 sm:aspect-auto sm:min-h-[200px]">
								<img src={r.image} alt="" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
							</div>
							<div class="flex flex-col justify-center p-8 sm:col-span-3 sm:p-10">
								<span class="text-[10px] font-bold uppercase tracking-[0.22em] {r.categoryColor}">{r.category}</span>
								<h3 class="mt-3 font-serif text-xl text-jp-black transition group-hover:text-[#bc002d] md:text-2xl">{r.title}</h3>
								<p class="mt-4 line-clamp-3 text-sm leading-relaxed text-jp-gray">{r.excerpt}</p>
								<span class="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bc002d]">Lire →</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</section>
	{/if}

<style>
	.lead-quote {
		position: relative;
		padding-left: 1.25rem;
		border-left: 3px solid #bc002d;
	}

	.article-body > .article-p:first-of-type::first-letter {
		float: left;
		margin-right: 0.55rem;
		margin-top: 0.15rem;
		font-family: 'Playfair Display', serif;
		font-size: 3.75rem;
		line-height: 0.82;
		font-weight: 500;
		color: #bc002d;
	}

	@media (max-width: 640px) {
		.article-body > .article-p:first-of-type::first-letter {
			font-size: 3rem;
		}
	}
</style>
