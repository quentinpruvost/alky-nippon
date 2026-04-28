<script>
	/* Props Svelte 5 */
	let { 
		title = "Explorez les régions incontournables",
		subtitle = "OÙ ALLER AU JAPON ?",
		description = "Du nord au sud, découvrez les villes, paysages et expériences uniques que chaque région a à offrir."
	} = $props();

	// Données pour les pastilles
	const landmarks = [
		{ id: 'hokkaido', name: 'HOKKAIDO', desc: 'Nature sauvage et paysages grandioses', top: '12%', right: '12%', img: 'https://images.unsplash.com/photo-1578469640199-1c3583ecb997?auto=format&fit=crop&w=100&h=100' },
		{ id: 'tokyo', name: 'TOKYO', desc: 'Modernité et découvertes', top: '52%', right: '15%', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=100&h=100' },
		{ id: 'kyoto', name: 'KYOTO', desc: 'Temples et histoire', top: '58%', left: '25%', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=100&h=100' },
		{ id: 'osaka', name: 'OSAKA', desc: 'Gastronomie et fête', top: '68%', left: '20%', img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=100&h=100' }
	];
</script>

<section class="map-section">
	<div class="container">
		
		<div class="text-side">
			<div class="label-wrapper">
				<span class="red-line"></span>
				<span class="label">{subtitle}</span>
			</div>
			<h2 class="main-title">{@html title.replace('régions', 'régions<br/>')}</h2>
			<p class="desc">{description}</p>
			<a href="/carte" class="btn-red">
				VOIR LA CARTE INTERACTIVE <span>→</span>
			</a>
		</div>

		<div class="visual-side">
			<div class="map-wrapper">
				<img src="/japan.svg" alt="Japan Map" class="base-map" />

				{#each landmarks as item}
					<div class="landmark" style:top={item.top} style:left={item.left} style:right={item.right}>
						<div class="map-dot"></div>
						
						<div class="info-card">
							<img src={item.img} alt={item.name} class="thumb" />
							<div class="info-text">
								<strong>{item.name}</strong>
								<span>{item.desc}</span>
							</div>
						</div>
					</div>
				{/each} 
			</div>
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

	.container {
		max-width: 1300px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		padding: 0 40px;
		gap: 60px;
	}

	.text-side { flex: 1; z-index: 2; }

	.label-wrapper { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
	.red-line { width: 35px; height: 2px; background: #bc002d; }
	.label { color: #bc002d; font-weight: 700; font-size: 13px; letter-spacing: 2px; }

	.main-title {
		font-family: serif; /* Utilise ta font serif ici */
		font-size: 52px;
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
		background: #bc002d;
		color: white;
		padding: 16px 32px;
		border-radius: 4px;
		text-decoration: none;
		font-weight: 700;
		font-size: 13px;
	}

	.visual-side { flex: 1.5; position: relative; }
	.map-wrapper { position: relative; width: 100%; }

	.base-map {
		width: 100%;
		filter: brightness(0) saturate(100%) invert(98%) sepia(4%) saturate(236%) hue-rotate(3deg) brightness(94%) contrast(92%);
		opacity: 0.6;
	}

	.landmark {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.map-dot {
		width: 8px;
		height: 8px;
		background: #bc002d;
		border-radius: 50%;
		box-shadow: 0 0 0 4px rgba(188, 0, 45, 0.15);
	}

	.info-card {
		display: flex;
		align-items: center;
		background: white;
		padding: 6px 12px;
		border-radius: 50px;
		box-shadow: 0 10px 25px rgba(0,0,0,0.05);
		white-space: nowrap;
	}

	.thumb { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; margin-right: 10px; }
	.info-text { display: flex; flex-direction: column; }
	.info-text strong { font-size: 10px; color: #1a1a1a; }
	.info-text span { font-size: 9px; color: #888; }

	@media (max-width: 1024px) {
		.container { flex-direction: column; text-align: center; }
		.info-card { display: none; } /* Cache les cards sur mobile pour éviter le chevauchement */
	}
</style>