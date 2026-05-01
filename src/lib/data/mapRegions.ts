import { getArticle } from './articles';

/**
 * Liaisons carte SVG ↔ contenu du site.
 *
 * Chaque entrée utilise `prefectureId` tel qu’il apparaît dans `static/japan.svg`
 * sur l’attribut `id` du path (ex. JP-13 = Tokyo, JP-26 = Kyoto).
 *
 * Pour ajouter une zone :
 * 1. Survolez la carte ou ouvrez japan.svg pour trouver le code JP-xx.
 * 2. Ajoutez un objet ci-dessous avec éventuellement `articleSlug` (doit exister dans articles.ts)
 *    et/ou `guideHref` (/destinations/...).
 * 3. Optionnel : `label` pour un nom d’affichage plus lisible que le title du SVG.
 */
export type MapRegionEntry = {
	prefectureId: string;
	label?: string;
	articleSlug?: string;
	guideHref?: string;
};

export const mapRegions: MapRegionEntry[] = [
	{
		prefectureId: 'JP-01',
		label: 'Hokkaidō',
		articleSlug: 'quand-partir-japon'
	},
	{
		prefectureId: 'JP-13',
		label: 'Tokyo',
		guideHref: '/destinations/tokyo',
		articleSlug: 'jr-pass-suica-pasmo'
	},
	{
		prefectureId: 'JP-26',
		label: 'Kyoto',
		guideHref: '/destinations/kyoto',
		articleSlug: 'kyoto-lieux-incontournables'
	},
	{
		prefectureId: 'JP-27',
		label: 'Osaka',
		guideHref: '/destinations/osaka',
		articleSlug: 'itineraire-2-semaines-japon'
	},
	{
		prefectureId: 'JP-34',
		label: 'Hiroshima',
		articleSlug: 'itineraire-2-semaines-japon'
	},
	{
		prefectureId: 'JP-23',
		label: 'Aichi (Nagoya)',
		articleSlug: 'itineraire-2-semaines-japon'
	}
];

export const mapRegionLookup: Record<string, MapRegionEntry> = Object.fromEntries(
	mapRegions.map((r) => [r.prefectureId, r])
);

export type EnrichedMapRegion = MapRegionEntry & {
	svgTitle?: string;
	articleTitle?: string;
	hasArticle: boolean;
	hasGuide: boolean;
};

export function enrichRegion(entry: MapRegionEntry | undefined, svgTitle: string | null): EnrichedMapRegion | null {
	if (!entry) return null;
	const article = entry.articleSlug ? getArticle(entry.articleSlug) : undefined;
	return {
		...entry,
		svgTitle: svgTitle ?? undefined,
		articleTitle: article?.title,
		hasArticle: Boolean(entry.articleSlug && article),
		hasGuide: Boolean(entry.guideHref)
	};
}

/** Sidebar / liste “contenus reliés à la carte”. */
export function getMapRegionsForSidebar(): EnrichedMapRegion[] {
	return mapRegions
		.map((r) => enrichRegion(r, null)!)
		.filter((r) => r.hasArticle || r.hasGuide)
		.sort((a, b) => (a.label || a.prefectureId).localeCompare(b.label || b.prefectureId, 'fr'));
}
