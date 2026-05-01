export type Article = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	categoryColor: string;
	readTime: string;
	date: string;
	image: string;
	paragraphs: string[];
};

const articles: Article[] = [
	{
		slug: 'itineraire-2-semaines-japon',
		title: 'Itinéraire 2 semaines au Japon : le guide complet',
		excerpt:
			'Tokyo, Hakone, Kyoto, Osaka : un rythme réaliste entre grandes étapes et temps libre, avec repères logistiques.',
		category: 'Itinéraires',
		categoryColor: 'text-jp-red',
		readTime: '12 min',
		date: '15 janvier 2026',
		image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
		paragraphs: [
			'Quatorze jours permettent de lier Tokyo au Kansai sans sprint. L’idée est d’alterner journées denses et demi-journées plus souples pour absorber le décalage et les imprévus météo.',
			'Commencez par trois ou quatre nuits à Tokyo, puis une étape nature (Hakone ou Kamakura) avant de poser vos valises à Kyoto. Osaka et Nara complètent idéalement la deuxième semaine.',
			'Simulez vos trajets longue distance avant d’acheter un pass : un Tokyo–Kyoto en Shinkansen ne justifie pas toujours un JR Pass national.'
		]
	},
	{
		slug: 'jr-pass-suica-pasmo',
		title: 'JR Pass, Suica, Pasmo : quel pass choisir ?',
		excerpt:
			'Quand le JR Pass national est rentable, et pourquoi une carte IC reste indispensable au quotidien dans les villes.',
		category: 'Conseils pratiques',
		categoryColor: 'text-orange-500',
		readTime: '8 min',
		date: '8 janvier 2026',
		image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=80',
		paragraphs: [
			'Le JR Pass couvre une grande partie du réseau JR sur une période continue, mais il n’est pertinent que si vos trajets longs dépassent le coût des billets séparés.',
			'Suica, Pasmo et cartes IC compatibles servent au métro non-JR, aux bus et aux achats du quotidien : pensez-y comme à votre portefeuille de transport local.',
			'Pour un voyage centré sur une seule région, comparez aussi les passes locaux et les billets point à point sur les sites officiels.'
		]
	},
	{
		slug: 'kyoto-lieux-incontournables',
		title: 'Kyoto : lieux incontournables et conseils',
		excerpt:
			'Prioriser les temples, éviter la surcharge et profiter de Gion sans précipitation.',
		category: 'Destinations',
		categoryColor: 'text-blue-500',
		readTime: '10 min',
		date: '22 décembre 2025',
		image: 'https://images.unsplash.com/photo-1624253329394-07805228e467?w=1200&q=80',
		paragraphs: [
			'Kyoto punit la course aux monuments : préférez deux visites bien cadrées par demi-journée plutôt que cinq temples à la chaîne.',
			'Fushimi Inari tôt le matin, Kinkaku-ji avec une lumière rasante, et une soirée dans les petites rues de Pontocho restent des repères solides.',
			'Respectez les zones résidentielles : parlez bas, évitez les photos intrusives dans les ruelles privées.'
		]
	},
	{
		slug: 'quand-partir-japon',
		title: 'Quand partir au Japon ? La meilleure période mois par mois',
		excerpt:
			'Cerisiers, canicule, typhons et foule : un calendrier pour choisir votre fenêtre selon budget et confort.',
		category: 'Quand partir',
		categoryColor: 'text-jp-red',
		readTime: '7 min',
		date: '10 décembre 2025',
		image: 'https://images.unsplash.com/photo-1522850959076-3297a3115053?w=1200&q=80',
		paragraphs: [
			'Le printemps et l’automne concentrent la demande : prix et affluence augmentent autour des floraisons et du feuillage.',
			'L’été mélange festivals et humidité ; l’hiver offre des paysages nets et moins de monde sur certains sites, au prix du froid.',
			'Prévoyez des marges sur les vols et trains entre août et octobre, période sensible aux typhons sur l’archipel.'
		]
	}
];

export function getArticles(): Article[] {
	return articles;
}

export function getArticle(slug: string): Article | undefined {
	return articles.find((a) => a.slug === slug);
}

/** Articles du même rubrique en priorité, puis les autres (exclut le slug courant). */
export function getRelatedArticles(slug: string, limit = 2): Article[] {
	const current = getArticle(slug);
	if (!current) return [];
	const others = articles.filter((a) => a.slug !== slug);
	const sameCat = others.filter((a) => a.category === current.category);
	const diffCat = others.filter((a) => a.category !== current.category);
	return [...sameCat, ...diffCat].slice(0, limit);
}
