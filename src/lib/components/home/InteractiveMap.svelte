<script lang="ts">
	/** ViewBox of static/japan.svg — marker % = first M of prefecture path / these dims */
	const VW = 437.33432;
	const VH = 516.01587;

	let {
		title = 'Explorez les régions incontournables',
		subtitle = 'OÙ ALLER AU JAPON ?',
		description = 'Du nord au sud, découvrez les villes, paysages et expériences uniques que chaque région a à offrir.',
		showMapCta = true
	} = $props();

	const landmarks = [
		{
			id: 'hokkaido',
			name: 'Hokkaido',
			tag: 'Nature & saisons',
			x: (330.01 / VW) * 100,
			y: (71.57 / VH) * 100,
			img: 'https://images.unsplash.com/photo-1578469640199-1c3583ecb997?auto=format&fit=crop&w=100&h=100',
			href: '/blog/quand-partir-japon'
		},
		{
			id: 'tokyo',
			name: 'Tokyo',
			tag: 'Modernité',
			x: (310.36 / VW) * 100,
			y: (279.41 / VH) * 100,
			img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=100&h=100',
			href: '/destinations/tokyo'
		},
		{
			id: 'kyoto',
			name: 'Kyoto',
			tag: 'Temples & histoire',
			x: (231.15 / VW) * 100,
			y: (270.9 / VH) * 100,
			img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=100&h=100',
			href: '/destinations/kyoto'
		},
		{
			id: 'osaka',
			name: 'Osaka',
			tag: 'Gastronomie',
			x: (232.14 / VW) * 100,
			y: (283.28 / VH) * 100,
			img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=100&h=100',
			href: '/destinations/osaka'
		}
	];
</script>

<section class="map-section" aria-labelledby="map-section-title">
	<div class="inner">
		<div class="text-side">
			<div class="label-row">
				<span class="red-line" aria-hidden="true"></span>
				<span class="label">{subtitle}</span>
			</div>
			<h2 id="map-section-title" class="main-title">{@html title.replace('régions', 'régions<br/>')}</h2>
			<p class="desc">{description}</p>
			{#if showMapCta}
				<a href="/carte" class="btn-red">Voir la carte interactive <span aria-hidden="true">→</span></a>
			{/if}
		</div>

		<div class="visual-side">
			<p class="map-hint">Carte indicative — cliquez sur un point ou une fiche ci-dessous.</p>
			<div class="map-stage">
				<img src="/japan.svg" alt="" class="base-map" role="presentation" width="437" height="516" />

				{#each landmarks as item}
					<a
						href={item.href}
						class="marker"
						style:left="{item.x}%"
						style:top="{item.y}%"
						aria-label="{item.name} — {item.tag}"
					>
						<span class="dot-wrap" aria-hidden="true">
							<span class="pulse"></span>
							<span class="dot"></span>
						</span>
						<span class="card">
							<img src={item.img} alt="" class="thumb" width="36" height="36" role="presentation" />
							<span class="card-text">
								<strong>{item.name}</strong>
								<span>{item.tag}</span>
							</span>
						</span>
					</a>
				{/each}
			</div>

			<ul class="chip-row">
				{#each landmarks as item}
					<li>
						<a href={item.href} class="chip">
							<span class="chip-dot" aria-hidden="true"></span>
							<span class="chip-name">{item.name}</span>
							<span class="chip-tag">{item.tag}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.map-section {
		width: 100%;
		padding: 100px 0;
		background-color: #faf9f6;
		overflow: hidden;
	}

	.inner {
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		align-items: flex-start;
		padding: 0 40px;
		gap: 60px;
	}

	.text-side {
		flex: 1;
		z-index: 2;
		padding-top: 8px;
	}

	.label-row {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 24px;
	}
	.red-line {
		width: 35px;
		height: 2px;
		background: #bc002d;
		flex-shrink: 0;
	}
	.label {
		color: #bc002d;
		font-weight: 700;
		font-size: 11px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	.main-title {
		font-family: 'Playfair Display', serif;
		font-size: clamp(2rem, 4vw, 52px);
		line-height: 1.1;
		color: #1a1a1a;
		margin-bottom: 25px;
	}

	.desc {
		color: #555;
		font-size: 17px;
		line-height: 1.7;
		margin-bottom: 40px;
		max-width: 420px;
	}

	.btn-red {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		background: #bc002d;
		color: white;
		padding: 16px 32px;
		border-radius: 2px;
		text-decoration: none;
		font-weight: 700;
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		transition: background 0.2s;
	}
	.btn-red:hover {
		background: #1a1a1a;
	}

	.visual-side {
		flex: 1.5;
		position: relative;
		min-width: 0;
	}

	.map-hint {
		font-size: 11px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #888;
		margin: 0 0 14px;
		max-width: 520px;
	}

	.map-stage {
		position: relative;
		width: 100%;
		max-width: 520px;
		margin: 0 auto;
		aspect-ratio: 437 / 516;
	}

	.base-map {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		pointer-events: none;
		filter: brightness(0) saturate(100%) invert(98%) sepia(4%) saturate(236%) hue-rotate(3deg) brightness(94%)
			contrast(92%);
		opacity: 0.62;
	}

	.marker {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: inherit;
		z-index: 3;
		transform: translate(-50%, -50%);
		transition: transform 0.2s ease;
	}
	.marker:hover,
	.marker:focus-visible {
		transform: translate(-50%, -50%) scale(1.04);
		z-index: 5;
	}
	.marker:focus-visible {
		outline: 2px solid #bc002d;
		outline-offset: 6px;
		border-radius: 8px;
	}

	.dot-wrap {
		position: relative;
		width: 10px;
		height: 10px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pulse {
		position: absolute;
		inset: -9px;
		border-radius: 50%;
		background: rgba(188, 0, 45, 0.12);
		animation: pulse 2.4s ease-out infinite;
		pointer-events: none;
	}

	.dot {
		width: 10px;
		height: 10px;
		background: #bc002d;
		border-radius: 50%;
		box-shadow: 0 0 0 4px rgba(188, 0, 45, 0.18);
		flex-shrink: 0;
		border: 2px solid #faf9f6;
	}

	.card {
		display: flex;
		align-items: center;
		background: white;
		padding: 6px 12px 6px 8px;
		border-radius: 999px;
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
		white-space: nowrap;
		border: 1px solid rgba(0, 0, 0, 0.04);
	}

	.thumb {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 8px;
	}
	.card-text {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}
	.card-text strong {
		font-size: 11px;
		font-weight: 700;
		color: #1a1a1a;
		letter-spacing: 0.04em;
	}
	.card-text span {
		font-size: 10px;
		color: #777;
	}

	.chip-row {
		list-style: none;
		margin: 22px auto 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;
		max-width: 520px;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 14px;
		background: white;
		border: 1px solid rgba(26, 26, 26, 0.08);
		border-radius: 2px;
		text-decoration: none;
		color: #1a1a1a;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}
	.chip:hover,
	.chip:focus-visible {
		border-color: #bc002d;
		box-shadow: 0 6px 20px rgba(188, 0, 45, 0.08);
	}
	.chip:focus-visible {
		outline: 2px solid #bc002d;
		outline-offset: 2px;
	}

	.chip-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #bc002d;
		flex-shrink: 0;
	}
	.chip-name {
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.chip-tag {
		font-size: 10px;
		color: #777;
		border-left: 1px solid #e5e5e5;
		padding-left: 8px;
		margin-left: 2px;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.6);
			opacity: 0.9;
		}
		70% {
			transform: scale(1.35);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.pulse {
			animation: none;
			opacity: 0.35;
			transform: scale(1.15);
		}
	}

	@media (max-width: 1024px) {
		.inner {
			flex-direction: column;
			align-items: stretch;
			text-align: center;
		}
		.label-row {
			justify-content: center;
		}
		.desc {
			margin-left: auto;
			margin-right: auto;
		}
		.map-hint {
			text-align: center;
		}
		/* Cards overlap on small map — hide pill, keep dots + chips */
		.card {
			display: none;
		}
		.marker {
			gap: 0;
		}
	}

	@media (max-width: 640px) {
		.inner {
			padding: 0 20px;
		}
		.chip-row {
			flex-direction: column;
			align-items: stretch;
		}
		.chip {
			justify-content: flex-start;
		}
	}
</style>
