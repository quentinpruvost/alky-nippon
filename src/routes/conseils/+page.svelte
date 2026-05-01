<script lang="ts">
	import { Plane, Wallet, Train, Utensils, Shield } from 'lucide-svelte';

	const blocks = [
		{
			id: 'avant-depart',
			icon: Plane,
			title: 'Avant le départ',
			text: 'Passeport, assurance, formalités en ligne : anticipez ce qui ne se règle pas sur place dans la précipitation d’un aéroport.'
		},
		{
			id: 'budget',
			icon: Wallet,
			title: 'Budget & argent',
			text: 'Le Japon accepte de plus en plus les cartes, mais le liquide reste une sécurité. Prévoyez du yen et une carte sans frais cachés à l’étranger.'
		},
		{
			id: 'transports',
			icon: Train,
			title: 'Se déplacer',
			text: 'Une carte IC pour le quotidien, des billets Shinkansen pour les grands axes : gardez la logique « local vs longue distance » en tête.'
		},
		{
			id: 'sur-place',
			icon: Utensils,
			title: 'Sur place',
			text: 'Respect des files d’attente, volume de voix dans les transports, règles de tri : de petits gestes qui rendent le séjour plus fluide.'
		},
		{
			id: 'sante',
			icon: Shield,
			title: 'Santé & tranquillité',
			text: 'Trousse minimale, allergies traduites si besoin, assurance avec rapatriement : les classiques qui évitent les stress de dernière minute.'
		}
	];
</script>

<svelte:head>
	<title>Conseils pratiques — AlkyNippon</title>
	<meta
		name="description"
		content="Conseils essentiels pour préparer un voyage au Japon : budget, transports, comportement et sérénité sur place."
	/>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-24 pt-32">
	<div class="container mx-auto max-w-4xl px-6 lg:px-12">
		<div class="mb-10 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bc002d]">Pratique</span>
		</div>
		<h1 class="mb-6 font-serif text-5xl italic text-jp-black md:text-6xl">
			Conseils <span class="not-italic text-[#bc002d]">utiles</span>
		</h1>
		<p class="mb-16 max-w-2xl text-lg leading-relaxed text-jp-gray">
			Des repères sobres, alignés sur ce que nous appliquons nous-mêmes en voyage : rien d’exhaustif, seulement ce qui
			change vraiment l’expérience.
		</p>

		<nav class="mb-16 hidden flex-wrap gap-6 border-b border-gray-200 pb-6 md:flex" aria-label="Sections">
			{#each blocks as b}
				<a
					href="#{b.id}"
					class="text-[10px] font-bold uppercase tracking-widest text-jp-gray hover:text-[#bc002d]"
				>
					{b.title}
				</a>
			{/each}
		</nav>

		<div class="space-y-16">
			{#each blocks as b}
				{@const Icon = b.icon}
				<section id={b.id} class="scroll-mt-32 rounded-sm border border-gray-100 bg-white p-8 shadow-sm md:p-10">
					<div class="mb-6 flex items-center gap-4 text-[#bc002d]">
						<Icon size={28} strokeWidth={1.2} />
						<h2 class="font-serif text-2xl text-jp-black">{b.title}</h2>
					</div>
					<p class="leading-relaxed text-jp-gray">{b.text}</p>
				</section>
			{/each}
		</div>

		<p class="mt-16 text-center text-sm text-jp-gray">
			Envie d’aller plus loin ?
			<a href="/blog" class="font-bold text-[#bc002d] hover:underline">Voir les articles du blog</a>
			ou
			<a href="/preparer" class="font-bold text-[#bc002d] hover:underline">la page Préparer</a>.
		</p>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
