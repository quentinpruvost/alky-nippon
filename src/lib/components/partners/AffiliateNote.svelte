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
			Liens vers des plateformes partenaires.
			<a href="/mentions-legales#partenaires" class="underline decoration-[#bc002d]/40 underline-offset-2 hover:text-[#bc002d]"
				>Détails</a
			>.
		{/if}
	</p>
{:else}
	{#if affiliateOn}
		<div class="rounded-md border border-[#bc002d]/15 bg-[#bc002d]/[0.04] px-5 py-4">
			<p class="text-xs leading-relaxed text-jp-gray">
				<strong class="font-semibold text-jp-black">Liens affiliés.</strong>
				Lorsque vous réservez via nos boutons, nous pouvons percevoir une commission — le prix pour vous reste celui affiché par le partenaire.
				<a href="/mentions-legales#partenaires" class="ml-1 font-medium text-[#bc002d] hover:underline">Mentions légales — partenaires</a>
			</p>
		</div>
	{/if}
{/if}
