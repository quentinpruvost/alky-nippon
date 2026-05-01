<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		title,
		kanji,
		hero,
		lead,
		whyTitle,
		whyParagraphs
	}: {
		title: string;
		kanji: string;
		hero: string;
		lead: string;
		whyTitle: string;
		whyParagraphs: string[];
	} = $props();
</script>

<svelte:head>
	<title>{title} — Guide voyage | AlkyNippon</title>
	<meta name="description" content={lead} />
</svelte:head>

<section class="relative flex h-[70vh] items-center justify-center overflow-hidden">
	<img src={hero} alt="" class="absolute inset-0 h-full w-full object-cover" role="presentation" />
	<div class="absolute inset-0 bg-black/40"></div>

	<div class="relative text-center text-white" in:fly={{ y: 30, duration: 1000 }}>
		<span class="mb-4 block text-xl font-bold tracking-[0.5em] opacity-80" aria-hidden="true">{kanji}</span>
		<h1 class="font-serif text-7xl md:text-9xl">{title}</h1>
	</div>
</section>

<section class="bg-white py-24">
	<div class="container mx-auto px-6 lg:px-48">
		<div class="max-w-3xl">
			<div class="mb-8 flex items-center gap-4">
				<span class="h-[2px] w-12 bg-[#bc002d]"></span>
				<span class="text-xs font-bold uppercase tracking-widest text-[#bc002d]">Guide de voyage</span>
			</div>

			<p class="mb-12 font-serif text-3xl leading-relaxed text-gray-800">
				{lead}
			</p>

			<div class="prose prose-lg text-gray-600">
				<h2 class="mb-6 font-serif text-3xl text-black">{whyTitle}</h2>
				{#each whyParagraphs as p}
					<p class="mb-6 last:mb-0">{p}</p>
				{/each}
			</div>

			<div
				class="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-10 sm:flex-row sm:items-center sm:justify-between"
			>
				<p class="font-serif text-sm italic text-gray-500">Poursuivre la préparation</p>
				<div class="flex flex-wrap gap-6">
					<a
						href="/destinations"
						class="border-b border-[#bc002d]/30 pb-1 text-[11px] font-bold uppercase tracking-widest text-[#bc002d] hover:border-[#bc002d]"
					>
						Toutes les destinations
					</a>
					<a
						href="/preparer"
						class="border-b border-black/20 pb-1 text-[11px] font-bold uppercase tracking-widest text-black hover:border-[#bc002d] hover:text-[#bc002d]"
					>
						Préparer son voyage
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
