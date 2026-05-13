<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { navLinks } from '$lib/data/site';
	import { Search, Globe, Menu, X, ChevronDown } from 'lucide-svelte';

	let open = $state(false);
	let searchOpen = $state(false);
	let langOpen = $state(false);
	let searchInput = $state('');

	let searchFieldEl = $state<HTMLInputElement | null>(null);
	let langWrapEl = $state<HTMLDivElement | null>(null);

	function closeAllOverlays() {
		open = false;
		searchOpen = false;
		langOpen = false;
	}

	function openSearch(initial = '') {
		searchInput = initial;
		searchOpen = true;
		open = false;
		langOpen = false;
		queueMicrotask(() => searchFieldEl?.focus());
	}

	function submitSearch() {
		const q = searchInput.trim();
		searchOpen = false;
		const path = q ? `/blog?q=${encodeURIComponent(q)}` : '/blog';
		void goto(path);
	}

	$effect(() => {
		if (!langOpen || typeof document === 'undefined') return;
		const close = (e: MouseEvent) => {
			if (langWrapEl && !langWrapEl.contains(e.target as Node)) langOpen = false;
		};
		document.addEventListener('click', close, true);
		return () => document.removeEventListener('click', close, true);
	});

	onMount(() => {
		if (typeof window === 'undefined') return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeAllOverlays();
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				openSearch();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

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

	<div class="hidden max-w-[52%] flex-wrap items-center justify-end gap-x-5 gap-y-2 xl:max-w-none xl:flex-nowrap xl:gap-x-7 2xl:gap-x-8 lg:flex">
		{#each navLinks as link}
			<a
				href={link.href}
				title={link.title}
				class="whitespace-nowrap text-[10px] font-bold tracking-[0.18em] text-black transition-colors hover:text-[#bc002d] xl:text-xs xl:tracking-widest"
			>
				{link.name}
			</a>
		{/each}
	</div>

	<div class="flex items-center gap-2 text-black sm:gap-3 lg:gap-4">
		<button
			type="button"
			class="hidden rounded-md p-2 sm:block"
			aria-label="Ouvrir la recherche dans le magazine"
			aria-expanded={searchOpen}
			onclick={() => (searchOpen ? (searchOpen = false) : openSearch())}
		>
			<Search size={20} strokeWidth={1.5} class="hover:text-[#bc002d] transition-colors" />
		</button>

		<button
			type="button"
			class="rounded-md p-2 sm:hidden"
			aria-label="Ouvrir la recherche"
			onclick={() => openSearch()}
		>
			<Search size={20} strokeWidth={1.5} class="text-[#bc002d]" />
		</button>

		<div class="mx-0 hidden h-4 w-px bg-gray-200 sm:mx-1 sm:block"></div>

		<div class="relative hidden sm:block" bind:this={langWrapEl}>
			<button
				type="button"
				class="flex cursor-pointer items-center gap-1.5 rounded-md py-2 pl-1 pr-1 transition-colors hover:text-[#bc002d]"
				aria-expanded={langOpen}
				aria-haspopup="listbox"
				aria-label="Choisir la langue du site"
				onclick={(e) => {
					e.stopPropagation();
					langOpen = !langOpen;
				}}
			>
				<Globe size={18} strokeWidth={1.5} />
				<span class="text-[10px] font-bold">FR</span>
				<ChevronDown size={14} strokeWidth={2} class="opacity-50" aria-hidden="true" />
			</button>
			{#if langOpen}
				<ul
					role="listbox"
					class="absolute right-0 top-full z-[120] mt-2 w-52 border border-gray-100 bg-white py-2 text-left shadow-xl"
				>
					<li role="option" aria-selected="true" class="px-4 py-3 text-xs font-semibold text-jp-black">
						Français
						<span class="mt-1 block text-[10px] font-normal uppercase tracking-widest text-[#bc002d]">Actif</span>
					</li>
					<li class="border-t border-gray-100 px-4 py-3 text-xs text-jp-gray">
						English — <span class="text-jp-black/70">bientôt disponible</span>
					</li>
					<li class="px-4 pb-2 text-[10px] leading-relaxed text-jp-gray">
						La version anglaise viendra enrichir les mêmes guides. En attendant, utilisez la traduction du navigateur si
						besoin.
					</li>
				</ul>
			{/if}
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

{#if searchOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="search-overlay fixed inset-0 z-[115] flex items-start justify-center bg-black/40 px-4 pt-24 sm:pt-28"
		role="presentation"
		onclick={(e) => e.target === e.currentTarget && (searchOpen = false)}
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="w-full max-w-lg border border-gray-200 bg-white p-6 shadow-2xl"
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			aria-label="Recherche dans le magazine"
			onclick={(e) => e.stopPropagation()}
		>
			<p class="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bc002d]">Magazine AlkyNippon</p>
			<form
				class="flex flex-col gap-4 sm:flex-row sm:items-stretch"
				onsubmit={(e) => {
					e.preventDefault();
					submitSearch();
				}}
			>
				<input
					bind:this={searchFieldEl}
					bind:value={searchInput}
					type="search"
					name="q"
					autocomplete="off"
					placeholder="Kyoto, JR Pass, itinéraire…"
					class="min-h-12 flex-1 border border-gray-200 px-4 py-3 text-sm outline-none ring-[#bc002d] focus:border-[#bc002d] focus:ring-1"
				/>
				<button
					type="submit"
					class="bg-[#bc002d] px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-black"
				>
					Rechercher
				</button>
			</form>
			<p class="mt-4 text-[10px] text-jp-gray">
				Raccourci : <kbd class="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 font-sans">Ctrl</kbd>
				+
				<kbd class="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 font-sans">K</kbd>
			</p>
			<button
				type="button"
				class="mt-4 w-full border border-gray-100 py-2 text-[10px] font-bold uppercase tracking-widest text-jp-gray hover:border-[#bc002d] hover:text-[#bc002d]"
				onclick={() => (searchOpen = false)}
			>
				Fermer
			</button>
		</div>
	</div>
{/if}

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
				title={link.title}
				class="block border-b border-gray-100 py-4 text-xs font-bold uppercase tracking-widest text-black hover:text-[#bc002d]"
				onclick={() => (open = false)}
			>
				{link.name}
			</a>
		{/each}
		<button
			type="button"
			class="mt-4 w-full border border-gray-200 py-4 text-xs font-bold uppercase tracking-widest text-black hover:border-[#bc002d] hover:text-[#bc002d]"
			onclick={() => openSearch()}
		>
			Rechercher dans le blog
		</button>
		<a
			href="/blog"
			class="mt-3 block bg-[#bc002d] py-4 text-center text-xs font-bold uppercase tracking-widest text-white"
			onclick={() => (open = false)}
		>
			Tout le magazine
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
