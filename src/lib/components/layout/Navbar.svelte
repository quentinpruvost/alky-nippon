<script lang="ts">
	import { navLinks } from '$lib/data/site';
	import { Search, Globe, Menu, X } from 'lucide-svelte';

	let open = $state(false);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<nav
	class="fixed left-0 top-0 z-[100] flex w-full items-center justify-between border-b border-gray-100 bg-white/95 px-6 py-5 backdrop-blur-sm lg:px-12 lg:py-6"
	aria-label="Navigation principale"
>
	<a href="/" class="group flex shrink-0 items-center gap-2 transition-transform hover:scale-105" onclick={() => (open = false)}>
		<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#bc002d] text-sm font-bold italic text-white">
			AN
		</div>
		<div class="leading-none">
			<span class="block text-xl font-bold uppercase tracking-tighter text-black">AlkyNippon</span>
			<span class="hidden text-[10px] tracking-[0.2em] text-gray-400 transition-colors group-hover:text-[#bc002d] sm:block"
				>LE JAPON, AUTREMENT</span
			>
		</div>
	</a>

	<div class="hidden items-center gap-8 lg:flex">
		{#each navLinks as link}
			<a href={link.href} class="text-xs font-bold tracking-widest text-black transition-colors hover:text-[#bc002d]">
				{link.name}
			</a>
		{/each}
	</div>

	<div class="flex items-center gap-3 text-black lg:gap-4">
		<a href="/blog" class="hidden sm:block" aria-label="Voir le blog">
			<Search size={20} strokeWidth={1.5} class="hover:text-[#bc002d] transition-colors" />
		</a>
		<div class="mx-1 hidden h-4 w-px bg-gray-200 sm:block"></div>
		<div class="hidden cursor-pointer items-center gap-2 group sm:flex" aria-hidden="true">
			<Globe size={18} strokeWidth={1.5} class="group-hover:text-[#bc002d]" />
			<span class="text-[10px] font-bold group-hover:text-[#bc002d]">FR</span>
		</div>

		<button
			type="button"
			class="rounded-md p-2 lg:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			{#if open}
				<X size={24} strokeWidth={1.5} />
				<span class="sr-only">Fermer</span>
			{:else}
				<Menu size={24} strokeWidth={1.5} />
				<span class="sr-only">Menu</span>
			{/if}
		</button>
	</div>
</nav>

{#if open}
	<button
		type="button"
		class="fixed inset-0 top-[73px] z-[90] bg-black/30 lg:hidden"
		aria-label="Fermer le menu"
		onclick={() => (open = false)}
	></button>
	<div
		id="mobile-nav"
		class="absolute left-0 right-0 top-full z-[95] border-b border-gray-100 bg-white px-6 py-6 shadow-lg lg:hidden"
	>
		{#each navLinks as link}
			<a
				href={link.href}
				class="block border-b border-gray-100 py-4 text-xs font-bold uppercase tracking-widest text-black hover:text-[#bc002d]"
				onclick={() => (open = false)}
			>
				{link.name}
			</a>
		{/each}
		<a
			href="/blog"
			class="mt-4 block bg-[#bc002d] py-4 text-center text-xs font-bold uppercase tracking-widest text-white"
			onclick={() => (open = false)}
		>
			Blog
		</a>
	</div>
{/if}

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
