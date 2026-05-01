<script lang="ts">
	import { getArticles } from '$lib/data/articles';

	const articles = getArticles();
	const featured = articles[0];
	const rest = articles.slice(1);
</script>

<svelte:head>
	<title>Blog — Guides & inspirations | AlkyNippon</title>
	<meta
		name="description"
		content="Articles AlkyNippon : itinéraires, transports, destinations et saisons pour préparer votre voyage au Japon."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-28 pt-32">
	<div class="mx-auto max-w-6xl px-6 lg:px-12">
		<header class="mb-16 lg:mb-24">
			<div class="mb-10 flex items-center gap-4">
				<span class="h-[2px] w-12 bg-[#bc002d]"></span>
				<span class="text-[11px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Magazine</span>
			</div>
			<h1 class="max-w-4xl font-serif text-5xl italic leading-[1.05] text-jp-black md:text-7xl">
				Le <span class="not-italic text-[#bc002d]">blog</span>
				<span class="mt-2 block font-sans text-xl font-normal not-italic tracking-normal text-jp-gray md:text-2xl"
					>Longs formats pour voyager avec méthode.</span
				>
			</h1>
		</header>

		{#if featured}
			<a
				href="/blog/{featured.slug}"
				class="mag-feature group mb-20 grid gap-10 overflow-hidden border border-gray-200/90 bg-white shadow-[0_24px_80px_-24px_rgba(0,0,0,0.12)] lg:mb-28 lg:grid-cols-12 lg:gap-0"
			>
				<div class="relative aspect-[16/11] bg-gray-100 lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
					<img
						src={featured.image}
						alt=""
						class="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-[1.03]"
						fetchpriority="high"
					/>
					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent"
					></div>
					<span
						class="absolute left-6 top-6 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bc002d] lg:left-10 lg:top-10"
						>À la une</span
					>
				</div>
				<div class="flex flex-col justify-center px-8 pb-12 pt-4 lg:col-span-5 lg:px-12 lg:pb-16 lg:pt-16">
					<span class="text-[10px] font-bold uppercase tracking-[0.28em] {featured.categoryColor}">{featured.category}</span>
					<h2 class="mt-5 font-serif text-3xl leading-tight text-jp-black transition group-hover:text-[#bc002d] md:text-4xl">
						{featured.title}
					</h2>
					<p class="mt-6 text-base leading-relaxed text-jp-gray">{featured.excerpt}</p>
					<div class="mt-8 flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-jp-gray">
						<span>{featured.date}</span>
						<span class="h-3 w-px bg-gray-300"></span>
						<span>{featured.readTime}</span>
					</div>
					<span
						class="mt-10 inline-flex w-fit items-center gap-2 border-b-2 border-[#bc002d]/35 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#bc002d] transition group-hover:border-[#bc002d]"
					>
						Lire l’article →
					</span>
				</div>
			</a>
		{/if}

		<div class="mb-12 flex items-end justify-between border-t border-gray-300/80 pt-12">
			<h3 class="font-serif text-2xl text-jp-black md:text-3xl">Autres lectures</h3>
			<span class="hidden text-[10px] uppercase tracking-[0.22em] text-jp-gray sm:block">Curateur éditorial</span>
		</div>

		<div class="grid gap-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
			{#each rest as a}
				<article class="mag-card group flex flex-col border-t border-gray-200 pt-10">
					<a href="/blog/{a.slug}" class="relative mb-8 block aspect-[16/10] overflow-hidden bg-gray-100">
						<img
							src={a.image}
							alt=""
							class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
							loading="lazy"
						/>
						<span
							class="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] truncate bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-widest {a.categoryColor}"
							>{a.category}</span
						>
					</a>
					<h2 class="font-serif text-2xl leading-snug text-jp-black md:text-[1.65rem]">
						<a href="/blog/{a.slug}" class="transition hover:text-[#bc002d]">{a.title}</a>
					</h2>
					<p class="mt-4 flex-1 text-sm leading-relaxed text-jp-gray">{a.excerpt}</p>
					<div class="mt-6 flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.18em] text-jp-gray">
						<span>{a.date}</span>
						<span>{a.readTime}</span>
					</div>
					<a
						href="/blog/{a.slug}"
						class="mt-8 inline-flex text-[11px] font-bold uppercase tracking-[0.14em] text-[#bc002d] underline-offset-4 hover:underline"
					>
						Continuer la lecture
					</a>
				</article>
			{/each}
		</div>
	</div>
</div>

<style>
	.mag-feature {
		transition:
			box-shadow 0.35s ease,
			border-color 0.35s ease;
	}
	.mag-feature:hover {
		box-shadow: 0 32px 90px -28px rgba(188, 0, 45, 0.15);
		border-color: rgba(188, 0, 45, 0.22);
	}
</style>
