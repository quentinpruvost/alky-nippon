<script lang="ts">
	let done = $state(false);

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		done = true;
	}
</script>

<section id="newsletter" class="relative w-full overflow-hidden bg-black py-24 scroll-mt-28">
	<img
		src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop"
		alt=""
		class="absolute inset-0 h-full w-full object-cover opacity-50 grayscale"
		role="presentation"
	/>

	<div class="absolute inset-0 bg-black/40"></div>

	<div class="relative container mx-auto px-6 lg:px-24">
		<div class="flex flex-col items-center justify-between gap-12 md:flex-row">
			<div class="max-w-xl">
				<div class="mb-4 flex items-center gap-3">
					<span class="h-px w-8 bg-[#bc002d]"></span>
					<span class="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bc002d]"
						>Conseils, bons plans, inspirations…</span
					>
				</div>
				<h2 class="mb-4 font-serif text-4xl leading-tight text-white drop-shadow-md md:text-5xl">
					La lettre <span class="italic">AlkyNippon</span>
				</h2>
				<p class="text-sm tracking-wide text-gray-300">
					Une sélection courte : nouveaux articles et rappels utiles pour votre préparation.
				</p>
			</div>

			<div class="w-full max-w-md">
				{#if done}
					<p class="border border-white/20 bg-white/10 px-6 py-8 text-center text-sm text-white" role="status">
						Merci — à très vite dans votre boîte mail (démo sans envoi réel).
					</p>
				{:else}
					<form class="flex flex-col gap-0 shadow-2xl sm:flex-row" onsubmit={onsubmit}>
						<label for="nl-email" class="sr-only">E-mail</label>
						<input
							id="nl-email"
							type="email"
							placeholder="Votre adresse e-mail"
							class="w-full bg-white px-6 py-5 text-sm font-light text-black outline-none"
							required
						/>
						<button
							type="submit"
							class="whitespace-nowrap bg-[#bc002d] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-black"
						>
							S'inscrire
						</button>
					</form>
				{/if}
				<p class="mt-4 text-center text-[10px] italic text-gray-400 md:text-left">
					Pas de spam — désinscription en un clic.
				</p>
			</div>
		</div>
	</div>
</section>

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
