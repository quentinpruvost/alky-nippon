<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getArticles } from '$lib/data/articles';

	const articles = getArticles();
</script>

<section class="bg-white py-32">
	<div class="container mx-auto flex flex-col gap-16 px-6 lg:flex-row lg:px-24">
		<div class="lg:w-1/4">
			<div class="mb-6 flex items-center gap-4">
				<span class="h-px w-12 bg-jp-red"></span>
				<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-jp-red"> Articles populaires </span>
			</div>

			<h2 class="mb-10 font-serif text-[42px] leading-[1.1] text-jp-black">Nos guides les plus consultés</h2>

			<a
				href="/blog"
				class="group inline-flex items-center gap-3 border border-jp-black/20 px-8 py-4 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-jp-black hover:text-white"
			>
				Voir tous les articles
				<span class="transition-transform group-hover:translate-x-1">→</span>
			</a>
		</div>

		<div class="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each articles as article, i}
				<a
					href="/blog/{article.slug}"
					class="group flex flex-col rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-jp-red focus-visible:ring-offset-2"
					in:fly={{ y: 16, duration: 500, delay: i * 70 }}
				>
					<div class="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
						<img
							src={article.image}
							alt=""
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							loading={i < 2 ? 'eager' : 'lazy'}
						/>
					</div>

					<div class="flex flex-1 flex-col">
						<span class="mb-3 text-[10px] font-bold uppercase tracking-widest {article.categoryColor}">
							{article.category}
						</span>

						<h3 class="mb-4 font-serif text-[19px] leading-snug text-jp-black transition-colors group-hover:text-jp-red">
							{article.title}
						</h3>

						<div class="mt-auto flex items-center gap-2 text-[10px] text-jp-gray">
							<span class="opacity-40" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
								>
							</span>
							{article.readTime} de lecture
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	h2,
	h3 {
		-webkit-font-smoothing: antialiased;
	}
</style>
