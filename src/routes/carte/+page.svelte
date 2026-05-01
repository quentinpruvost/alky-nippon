<script lang="ts">
	import InteractiveMap from '$lib/components/home/InteractiveMap.svelte';
</script>

<svelte:head>
	<title>Carte & régions — AlkyNippon</title>
	<meta
		name="description"
		content="Visualisez les grandes régions du Japon et accédez aux guides Tokyo, Kyoto et Osaka."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-16 pt-28">
	<div class="container mx-auto max-w-5xl px-6 pb-10 lg:px-12">
		<div class="mb-8 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bc002d]">Territoires</span>
		</div>
		<h1 class="mb-6 font-serif text-5xl italic text-jp-black md:text-6xl">
			Carte <span class="not-italic text-[#bc002d]">&</span> repères
		</h1>
		<p class="max-w-2xl text-lg leading-relaxed text-jp-gray">
			Un même style graphique que l’accueil : survolez les points sur la carte, puis ouvrez nos fiches ville pour le
			détail.
		</p>
	</div>

	<InteractiveMap
		title="Explorez les régions incontournables"
		subtitle="Où aller au Japon ?"
		description="Trois villes phares couvertes en profondeur, plus une entrée par le nord pour les saisons et les grands espaces."
		showMapCta={false}
	/>

	<div class="container mx-auto mt-12 grid max-w-4xl gap-6 px-6 sm:grid-cols-3 lg:px-12">
		<a
			href="/destinations/tokyo"
			class="border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:border-[#bc002d]/40"
		>
			<span class="font-serif text-xl text-jp-black">Tokyo</span>
			<p class="mt-2 text-xs text-jp-gray">Guide</p>
		</a>
		<a
			href="/destinations/kyoto"
			class="border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:border-[#bc002d]/40"
		>
			<span class="font-serif text-xl text-jp-black">Kyoto</span>
			<p class="mt-2 text-xs text-jp-gray">Guide</p>
		</a>
		<a
			href="/destinations/osaka"
			class="border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:border-[#bc002d]/40"
		>
			<span class="font-serif text-xl text-jp-black">Osaka</span>
			<p class="mt-2 text-xs text-jp-gray">Guide</p>
		</a>
	</div>
</div>
