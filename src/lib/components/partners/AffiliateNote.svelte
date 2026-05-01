<script lang="ts">
	import { hasAffiliateConfigured } from '$lib/data/partners';

	let { compact = false }: { compact?: boolean } = $props();

	const affiliateOn = hasAffiliateConfigured();
</script>

{#if compact}
	<p class="text-[10px] leading-snug text-jp-gray">
		{#if affiliateOn}
			<strong class="font-semibold text-jp-black">Transparence :</strong>
			certains liens sont affiliés — vous ne payez pas plus cher ; une commission peut nous être reversée pour financer les guides.
			<a href="/mentions-legales#partenaires" class="underline decoration-[#bc002d]/40 underline-offset-2 hover:text-[#bc002d]"
				>En savoir plus</a
			>.
		{:else}
			Liens vers des plateformes tierces (sans tracking AlkyNippon configuré sur cet environnement).
			<a href="/mentions-legales#partenaires" class="underline decoration-[#bc002d]/40 underline-offset-2 hover:text-[#bc002d]"
				>Détails</a
			>.
		{/if}
	</p>
{:else}
	<div class="rounded-md border border-[#bc002d]/15 bg-[#bc002d]/[0.04] px-5 py-4">
		<p class="text-xs leading-relaxed text-jp-gray">
			{#if affiliateOn}
				<strong class="font-semibold text-jp-black">Liens affiliés.</strong>
				Lorsque vous réservez via nos boutons avec tracking activé, nous pouvons percevoir une commission — le prix pour vous reste celui affiché par le partenaire.
			{:else}
				<strong class="font-semibold text-jp-black">Liens utiles.</strong>
				Ces boutons ouvrent des services tiers ; ajoutez vos URLs affiliées dans le fichier d’environnement pour activer le suivi et la rémunération.
			{/if}
			<a href="/mentions-legales#partenaires" class="ml-1 font-medium text-[#bc002d] hover:underline">Mentions légales — partenaires</a>
		</p>
	</div>
{/if}
