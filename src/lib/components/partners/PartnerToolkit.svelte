<script lang="ts">
	import AffiliateNote from './AffiliateNote.svelte';
	import {
		partnerBookingJapan,
		partnerKlookJapan,
		partnerJrPass,
		partnerSkyscannerJapan,
		partnerGetYourGuideJapan
	} from '$lib/data/partners';

	let {
		variant = 'full',
		kicker = 'Allier passion & sérieux',
		title = 'Les outils qui financent aussi les guides'
	}: {
		variant?: 'full' | 'compact';
		kicker?: string;
		title?: string;
	} = $props();

	const tiles = [
		{
			label: 'Hôtels & ryokan',
			sub: 'Annulation flexible souvent disponible',
			...partnerBookingJapan()
		},
		{
			label: 'Activités & billets',
			sub: 'Musées, USJ, transferts',
			...partnerKlookJapan()
		},
		{
			label: 'JR Pass',
			sub: 'Shinkansen national ou régional',
			...partnerJrPass()
		},
		{
			label: 'Vols',
			sub: 'Comparer les dates',
			...partnerSkyscannerJapan()
		},
		{
			label: 'Visites guidées',
			sub: 'Guides confirmés',
			...partnerGetYourGuideJapan()
		}
	];
</script>

<section class="partner-toolkit" class:partner-toolkit--compact={variant === 'compact'}>
	<div class="partner-inner">
		<div class="partner-head">
			<span class="partner-kicker">{kicker}</span>
			<h2 class="partner-title">{title}</h2>
		</div>
		<div class="partner-grid">
			{#each tiles as t}
				<a href={t.href} rel={t.rel} target="_blank" class="partner-tile">
					<span class="partner-tile-label">{t.label}</span>
					<span class="partner-tile-sub">{t.sub}</span>
					<span class="partner-tile-go">→</span>
				</a>
			{/each}
		</div>
		<div class="partner-note"><AffiliateNote compact /></div>
	</div>
</section>

<style>
	.partner-toolkit {
		border: 1px solid rgba(26, 26, 26, 0.08);
		background: linear-gradient(165deg, #fff 0%, #faf9f6 100%);
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 18px 50px -28px rgba(0, 0, 0, 0.18);
	}

	.partner-toolkit--compact .partner-inner {
		padding: 1.25rem 1.25rem 1rem;
	}

	.partner-inner {
		padding: 1.75rem 1.5rem 1.25rem;
	}

	@media (min-width: 640px) {
		.partner-inner {
			padding: 2rem 2rem 1.35rem;
		}
	}

	.partner-head {
		margin-bottom: 1.25rem;
		max-width: 40rem;
	}

	.partner-kicker {
		display: block;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #bc002d;
		margin-bottom: 0.45rem;
	}

	.partner-title {
		font-family: 'Playfair Display', serif;
		font-size: 1.45rem;
		line-height: 1.2;
		color: #1a1a1a;
		margin: 0;
	}

	.partner-toolkit--compact .partner-title {
		font-size: 1.2rem;
	}

	.partner-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}

	@media (min-width: 520px) {
		.partner-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 900px) {
		.partner-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.partner-toolkit--compact .partner-grid {
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 8px;
	}

	.partner-tile {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.15rem;
		padding: 1rem 2.25rem 1rem 1rem;
		text-decoration: none;
		background: #fff;
		border: 1px solid rgba(26, 26, 26, 0.06);
		border-radius: 4px;
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease,
			transform 0.15s ease;
		min-height: 4.75rem;
	}

	.partner-tile:hover {
		border-color: rgba(188, 0, 45, 0.35);
		box-shadow: 0 10px 28px rgba(188, 0, 45, 0.08);
		transform: translateY(-1px);
	}

	.partner-tile-label {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #1a1a1a;
	}

	.partner-tile-sub {
		font-size: 11px;
		line-height: 1.35;
		color: #666;
	}

	.partner-tile-go {
		position: absolute;
		right: 0.85rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 14px;
		color: #bc002d;
		opacity: 0.65;
	}

	.partner-tile:hover .partner-tile-go {
		opacity: 1;
	}

	.partner-note {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(26, 26, 26, 0.06);
	}
</style>
