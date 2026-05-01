<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import Features from '$lib/components/home/Features.svelte';
	import PopularArticles from '$lib/components/home/PopularArticles.svelte';
	import InteractiveMap from '$lib/components/home/InteractiveMap.svelte';
	import Newsletter from '$lib/components/home/Newsletter.svelte';
</script>

<svelte:head>
	<title>AlkyNippon — Préparez votre voyage au Japon</title>
	<meta
		name="description"
		content="Guides, itinéraires et inspiration pour le Japon : Tokyo, Kyoto, Osaka, conseils pratiques et magazine."
	/>
</svelte:head>

<main class="pt-20">
  <Hero />
  <Features />
  <PopularArticles />
  <InteractiveMap />
  <Newsletter />
</main>