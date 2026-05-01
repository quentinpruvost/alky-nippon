<script lang="ts">
	let sent = $state(false);

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		sent = true;
	}
</script>

<svelte:head>
	<title>Contact — AlkyNippon</title>
	<meta name="description" content="Contactez l’équipe AlkyNippon pour vos questions sur les guides et l’itinéraire." />
</svelte:head>

<div class="min-h-screen bg-[#faf9f6] pb-24 pt-32">
	<div class="container mx-auto max-w-lg px-6 lg:px-12">
		<div class="mb-8 flex items-center gap-4">
			<span class="h-[2px] w-12 bg-[#bc002d]"></span>
			<span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bc002d]">Contact</span>
		</div>
		<h1 class="mb-6 font-serif text-5xl italic text-jp-black">Écrivez-<span class="not-italic text-[#bc002d]">nous</span></h1>
		<p class="mb-10 text-jp-gray">
			Pour un itinéraire sur mesure, privilégiez d’abord le
			<a href="/itineraires" class="font-bold text-[#bc002d] hover:underline">configurateur</a>. Ce formulaire sert aux
			autres demandes.
		</p>

		{#if sent}
			<p class="rounded-sm border border-gray-200 bg-white p-6 text-sm text-jp-gray" role="status">
				Message reçu (démo locale). Branchez ce formulaire à votre service d’envoi en production.
			</p>
			<button
				type="button"
				class="mt-4 text-[11px] font-bold uppercase tracking-widest text-[#bc002d]"
				onclick={() => (sent = false)}
			>
				Nouveau message
			</button>
		{:else}
			<form class="space-y-6 rounded-sm border border-gray-100 bg-white p-8 shadow-sm" onsubmit={onsubmit}>
				<div>
					<label for="cn" class="text-[10px] font-bold uppercase tracking-widest text-jp-gray">Nom</label>
					<input id="cn" required class="mt-2 w-full border-b border-gray-200 py-2 outline-none focus:border-[#bc002d]" />
				</div>
				<div>
					<label for="ce" class="text-[10px] font-bold uppercase tracking-widest text-jp-gray">E-mail</label>
					<input
						id="ce"
						type="email"
						required
						class="mt-2 w-full border-b border-gray-200 py-2 outline-none focus:border-[#bc002d]"
					/>
				</div>
				<div>
					<label for="cm" class="text-[10px] font-bold uppercase tracking-widest text-jp-gray">Message</label>
					<textarea
						id="cm"
						required
						rows="5"
						class="mt-2 w-full resize-y border border-gray-100 p-3 text-sm outline-none focus:border-[#bc002d]"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full bg-black py-4 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#bc002d]"
				>
					Envoyer
				</button>
			</form>
		{/if}
	</div>
</div>
