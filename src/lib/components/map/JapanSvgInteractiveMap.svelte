<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { asset, base } from '$app/paths';
	import { mapRegionLookup, enrichRegion } from '$lib/data/mapRegions';

	const VIEW_W = 437.33432;
	const VIEW_H = 516.01587;

	function withBase(path: string): string {
		const normalized = path.startsWith('/') ? path : `/${path}`;
		const b = (base ?? '').replace(/\/$/, '');
		return b ? `${b}${normalized}` : normalized;
	}

	let hostEl = $state<HTMLDivElement | null>(null);

	let ready = $state(false);
	let loadError = $state<string | null>(null);

	/** Titres issus du SVG (nom préfecture), remplis après chargement */
	let prefTitles = $state<Record<string, string>>({});

	let hoverId = $state<string | null>(null);
	let selectedId = $state<string | null>(null);

	const displayId = $derived(selectedId ?? hoverId);

	const panelDetail = $derived.by(() => {
		const id = displayId;
		if (!id) return null;
		const entry = mapRegionLookup[id];
		const svgName = prefTitles[id] ?? id;
		const enriched = enrichRegion(entry, svgName);
		const label = entry?.label ?? enriched?.svgTitle ?? svgName;
		return {
			id,
			label,
			enriched,
			hasLinks: Boolean(enriched?.hasArticle || enriched?.hasGuide)
		};
	});

	function applyHighlight(svgEl: SVGSVGElement) {
		const active = selectedId ?? hoverId;
		svgEl.querySelectorAll<SVGPathElement>('path.pref-path').forEach((path) => {
			const id = path.getAttribute('id');
			path.classList.toggle('pref-path--active', Boolean(active && id === active));
		});
	}

	$effect(() => {
		const _h = hoverId;
		const _s = selectedId;
		const svg = hostEl?.querySelector<SVGSVGElement>('svg.japan-interactive-svg');
		if (svg) applyHighlight(svg);
	});

	function clearSelection() {
		selectedId = null;
		hoverId = null;
	}

	onMount(() => {
		let destroyed = false;

		void (async () => {
			await tick();
			await tick();
			if (!hostEl || destroyed) return;

			try {
				const res = await fetch(asset('/japan.svg'), { credentials: 'same-origin' });
				if (!res.ok) throw new Error(`Impossible de charger la carte (${res.status}).`);

				const text = await res.text();
				if (!hostEl || destroyed) return;

				const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
				const pe = doc.querySelector('parsererror');
				if (pe?.textContent) throw new Error('Fichier carte illisible.');

				const svg = doc.documentElement;
				if (!(svg instanceof SVGSVGElement)) throw new Error('Ce fichier n’est pas un SVG valide.');

				svg.classList.add('japan-interactive-svg');
				svg.setAttribute('viewBox', `0 0 ${VIEW_W} ${VIEW_H}`);
				svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
				svg.setAttribute('width', '100%');
				svg.setAttribute('height', '100%');
				svg.setAttribute('role', 'img');
				svg.setAttribute('aria-label', 'Carte des préfectures du Japon');

				const titleMap: Record<string, string> = {};

				hostEl.replaceChildren();
				hostEl.appendChild(document.importNode(svg, true));

				const live = hostEl.querySelector<SVGSVGElement>('svg.japan-interactive-svg');
				if (!live) throw new Error('Carte non montée.');

				live.querySelectorAll<SVGPathElement>('path[id^="JP-"]').forEach((path) => {
					const id = path.getAttribute('id');
					if (!id) return;

					const t = path.getAttribute('title')?.trim() || id;
					titleMap[id] = t;

					path.classList.add('pref-path');
					if (mapRegionLookup[id]) path.classList.add('pref-path--linked');

					path.style.pointerEvents = 'auto';
					path.setAttribute('vector-effect', 'non-scaling-stroke');

					path.addEventListener('pointerenter', () => {
						hoverId = id;
					});
					path.addEventListener('pointerleave', () => {
						if (hoverId === id) hoverId = null;
					});
					path.addEventListener('click', (e) => {
						e.preventDefault();
						e.stopPropagation();
						selectedId = selectedId === id ? null : id;
					});
					path.addEventListener('keydown', (e) => {
						if (e.key !== 'Enter' && e.key !== ' ') return;
						e.preventDefault();
						selectedId = selectedId === id ? null : id;
					});

					const linked = Boolean(mapRegionLookup[id]);
					path.setAttribute('tabindex', linked ? '0' : '-1');
					path.setAttribute('role', linked ? 'button' : 'presentation');
					const bits = [t, linked ? 'Contenu disponible sur le site' : 'Pas de fiche pour le moment'].join(
						'. '
					);
					path.setAttribute('aria-label', bits);
				});

				prefTitles = titleMap;
				applyHighlight(live);
				ready = true;
			} catch (e) {
				loadError = e instanceof Error ? e.message : 'Erreur de chargement.';
			}
		})();

		return () => {
			destroyed = true;
		};
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') clearSelection();
	}}
/>

<div class="map-wrap">
	<div class="svg-frame">
		<div
			class="svg-host"
			class:opacity-40={!ready && !loadError}
			bind:this={hostEl}
			aria-busy={!ready && !loadError}
		></div>
		{#if !ready && !loadError}
			<p class="svg-loading">Chargement…</p>
		{/if}
	</div>

	{#if loadError}
		<p class="state-msg--error" role="alert">{loadError}</p>
	{/if}

	<!-- Panneau fixe sous la carte : source de vérité, pas de tooltip qui suit la souris -->
	<div class="panel" aria-live="polite">
		{#if panelDetail}
			<div class="panel-head">
				<div>
					<p class="panel-kicker">Préfecture</p>
					<h3 class="panel-title">{panelDetail.label}</h3>
					<p class="panel-code">{panelDetail.id}</p>
				</div>
				{#if selectedId}
					<button type="button" class="panel-close" onclick={() => clearSelection()}> Fermer </button>
				{/if}
			</div>

			{#if panelDetail.enriched?.hasGuide || panelDetail.enriched?.hasArticle}
				<ul class="badges">
					{#if panelDetail.enriched?.hasGuide}
						<li class="badge badge--ok">Guide</li>
					{/if}
					{#if panelDetail.enriched?.hasArticle}
						<li class="badge badge--ok">Article</li>
					{/if}
				</ul>
				<div class="panel-actions">
					{#if panelDetail.enriched?.guideHref}
						<a href={withBase(panelDetail.enriched.guideHref)} class="btn btn-primary">Voir le guide</a>
					{/if}
					{#if panelDetail.enriched?.articleSlug && panelDetail.enriched.articleTitle}
						<a href={withBase(`/blog/${panelDetail.enriched.articleSlug}`)} class="btn btn-outline">
							Lire : {panelDetail.enriched.articleTitle}
						</a>
					{/if}
				</div>
				<p class="panel-foot">
					Clic sur une zone avec contenu pour la garder sélectionnée. Échap pour tout fermer.
				</p>
			{:else}
				<p class="panel-empty">Aucune fiche pour cette préfecture pour le moment.</p>
				<p class="panel-foot subtle">
					Ajoutez un lien dans <code>src/lib/data/mapRegions.ts</code> pour l’associer à un article ou un guide.
				</p>
			{/if}
		{:else}
			<p class="panel-placeholder">
				<span class="panel-placeholder-strong">Survolez la carte</span> pour voir le nom de chaque préfecture :
				tout s’affiche ici.
				<span class="panel-placeholder-note">
					Sur mobile ou sans souris : touchez une zone pour verrouiller la fiche.
				</span>
			</p>
		{/if}
	</div>
</div>

<style>
	.map-wrap {
		display: flex;
		flex-direction: column;
		gap: 0;
		max-width: 720px;
		margin: 0 auto;
	}

	.svg-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 437 / 516;
		min-height: 280px;
		border-radius: 6px;
		overflow: hidden;
		box-shadow:
			inset 0 0 0 1px rgba(26, 26, 26, 0.07),
			0 20px 50px -28px rgba(0, 0, 0, 0.35);
	}

	.svg-host {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(165deg, #ebe8e2 0%, #faf9f6 42%, #e8e5df 100%);
	}

	.svg-loading {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #666;
		background: rgba(250, 249, 246, 0.72);
		pointer-events: none;
	}

	.svg-host :global(svg.japan-interactive-svg) {
		display: block;
		width: 100%;
		height: 100%;
	}

	.svg-host :global(.pref-path) {
		fill: #d8d4cd;
		stroke: #faf9f6;
		stroke-width: 0.7;
		transition: fill 0.12s ease;
		cursor: crosshair;
	}

	.svg-host :global(.pref-path--linked) {
		fill: #c9c2b8;
		cursor: pointer;
	}

	.svg-host :global(.pref-path--active) {
		fill: rgba(188, 0, 45, 0.42) !important;
		stroke: rgba(188, 0, 45, 0.55);
	}

	.svg-host :global(.pref-path--linked.pref-path--active) {
		fill: rgba(188, 0, 45, 0.52) !important;
	}

	.state-msg--error {
		padding: 16px;
		margin-top: 12px;
		background: #fff5f5;
		color: #bc002d;
		border-radius: 6px;
		pointer-events: auto;
		line-height: 1.45;
		text-transform: none;
		letter-spacing: normal;
		font-weight: 600;
		font-size: 14px;
	}

	.panel {
		margin-top: 18px;
		padding: 18px 18px 20px;
		background: #fff;
		border-radius: 6px;
		border: 1px solid rgba(26, 26, 26, 0.08);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
		min-height: 132px;
	}

	.panel-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 12px;
	}

	.panel-kicker {
		margin: 0;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #bc002d;
	}

	.panel-title {
		margin: 6px 0 0;
		font-family: 'Playfair Display', serif;
		font-size: 1.45rem;
		line-height: 1.15;
		color: #1a1a1a;
	}

	.panel-code {
		margin: 6px 0 0;
		font-size: 11px;
		color: #888;
		letter-spacing: 0.06em;
	}

	.panel-close {
		flex-shrink: 0;
		border: 1px solid #ddd;
		background: #fafafa;
		padding: 8px 14px;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		cursor: pointer;
		border-radius: 3px;
		color: #333;
	}

	.panel-close:hover {
		border-color: #bc002d;
		color: #bc002d;
		background: #fff;
	}

	.badges {
		list-style: none;
		margin: 0 0 14px;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.badge {
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		padding: 5px 10px;
		border-radius: 2px;
		background: #efefef;
		color: #666;
	}

	.badge--ok {
		background: rgba(188, 0, 45, 0.12);
		color: #bc002d;
	}

	.panel-actions {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	@media (min-width: 480px) {
		.panel-actions {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.btn {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 12px 18px;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-decoration: none;
		border-radius: 3px;
		text-align: center;
		transition:
			background 0.15s,
			color 0.15s,
			border-color 0.15s;
	}

	.btn-primary {
		background: #111;
		color: #fff;
		border: 1px solid #111;
	}

	.btn-primary:hover {
		background: #bc002d;
		border-color: #bc002d;
	}

	.btn-outline {
		background: transparent;
		color: #bc002d;
		border: 1px solid rgba(188, 0, 45, 0.45);
	}

	.btn-outline:hover {
		background: rgba(188, 0, 45, 0.07);
		border-color: #bc002d;
	}

	.panel-foot {
		margin: 14px 0 0;
		font-size: 11px;
		line-height: 1.5;
		color: #777;
	}

	.panel-foot.subtle {
		font-size: 10px;
		margin-top: 8px;
	}

	.panel-foot code {
		font-size: 10px;
		word-break: break-all;
	}

	.panel-empty {
		margin: 0;
		font-size: 14px;
		color: #555;
		line-height: 1.45;
	}

	.panel-placeholder {
		margin: 0;
		font-size: 14px;
		line-height: 1.55;
		color: #555;
	}

	.panel-placeholder-strong {
		font-weight: 700;
		color: #1a1a1a;
	}

	.panel-placeholder-note {
		display: block;
		padding-top: 0.5rem;
		font-size: 13px;
		color: #666;
	}
</style>
