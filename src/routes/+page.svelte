<script lang="ts">
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Hero from '$lib/components/home/Hero.svelte';
  import Features from '$lib/components/home/Features.svelte';
  import PopularArticles from '$lib/components/home/PopularArticles.svelte';
  import InteractiveMap from '$lib/components/home/InteractiveMap.svelte';
  import Newsletter from '$lib/components/home/Newsletter.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Navbar />

<main class="pt-20">
  <Hero />
  <Features />
  <PopularArticles />
  <InteractiveMap />
  <Newsletter />
</main>

<Footer />