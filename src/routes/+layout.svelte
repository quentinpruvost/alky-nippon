<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#bc002d" />
</svelte:head>

<a href="#contenu-principal" class="skip-link">Aller au contenu</a>

<Navbar />

<main id="contenu-principal" tabindex="-1">
	{@render children()}
</main>

<Footer />

<style>
	.skip-link {
		position: absolute;
		left: 1rem;
		top: 1rem;
		z-index: 200;
		padding: 0.75rem 1rem;
		background: #bc002d;
		color: white;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		transform: translateY(-200%);
		transition: transform 0.2s;
	}
	.skip-link:focus {
		transform: translateY(0);
		outline: 2px solid #1a1a1a;
		outline-offset: 2px;
	}
</style>