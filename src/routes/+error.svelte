<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — AlkyNippon</title>
</svelte:head>

<div class="flex min-h-[60vh] flex-col items-center justify-center bg-[#faf9f6] px-6 py-24 text-center">
	<p class="text-[11px] font-bold uppercase tracking-[0.35em] text-[#bc002d]">{$page.status}</p>
	<h1 class="mt-6 max-w-md font-serif text-4xl text-jp-black md:text-5xl">
		{#if $page.status === 404}
			Page introuvable.
		{:else}
			Une erreur est survenue.
		{/if}
	</h1>
	<p class="mt-4 max-w-sm text-sm text-jp-gray">{$page.error?.message ?? 'Repartez vers l’accueil ou le blog.'}</p>
	<div class="mt-10 flex flex-wrap justify-center gap-4">
		<a
			href="/"
			class="bg-[#bc002d] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-black"
			>Accueil</a
		>
		<a
			href="/blog"
			class="border border-jp-black/20 px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-jp-black hover:border-[#bc002d] hover:text-[#bc002d]"
			>Blog</a
		>
	</div>
</div>
