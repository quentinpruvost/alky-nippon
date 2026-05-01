export type CityGuide = {
	title: string;
	kanji: string;
	hero: string;
	lead: string;
	whyTitle: string;
	whyParagraphs: string[];
};

export const cityGuides: Record<string, CityGuide> = {
	kyoto: {
		title: 'Kyoto',
		kanji: '京都',
		hero: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920',
		lead: 'Ancienne capitale impériale, Kyoto est le cœur culturel du Japon. Entre temples millénaires, jardins zen et le quartier des geishas à Gion, la ville offre une immersion totale dans le Japon traditionnel.',
		whyTitle: 'Pourquoi visiter Kyoto ?',
		whyParagraphs: [
			'Kyoto est une ville qui se découvre lentement. Loin de l’agitation frénétique de Tokyo, elle invite à la contemplation. Avec plus de 1600 temples bouddhistes et 400 sanctuaires shinto, c’est un musée à ciel ouvert.',
			'Ne manquez pas le pavillon d’Or (Kinkaku-ji), les portes rouges de Fushimi Inari et une promenade au crépuscule dans les ruelles étroites de Pontocho.'
		]
	},
	tokyo: {
		title: 'Tokyo',
		kanji: '東京',
		hero: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1920',
		lead: 'Mégalopole où se croisent gratte-ciels futuristes, sanctuaires discrets et quartiers populaires, Tokyo se vit au rythme des lignes de train et des promenades le long des fleuves.',
		whyTitle: 'Pourquoi visiter Tokyo ?',
		whyParagraphs: [
			'Tokyo concentre des visages multiples : le calme du jardin de Shinjuku Gyoen, l’effervescence de Shibuya, l’élégance d’Omotesando et la tradition d’Asakusa. Chaque arrondissement mérite au moins une demi-journée.',
			'Réservez des créneaux pour les musées et certaines tables : la ville récompense ceux qui anticipent, tout en gardant de la place pour l’improvisation dans les yokocho et les konbini.'
		]
	},
	osaka: {
		title: 'Osaka',
		kanji: '大阪',
		hero: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1920',
		lead: 'Capitale gourmande du Kansai, Osaka assume son côté populaire : marchés animés, street food légendaire et nuits électriques à Dotonbori, à deux pas d’un château emblématique.',
		whyTitle: 'Pourquoi visiter Osaka ?',
		whyParagraphs: [
			'La ville se déguste autant qu’elle se visite : okonomiyaki, takoyaki, couverts vibrants du marché Kuromon Ichiba. C’est aussi le pivot idéal pour Nara, Kobe ou Himeji en trains de banlieue.',
			'Le château d’Osaka et sa vue, le quartier de Namba et les quais d’Umeda offrent trois ambiances distinctes : prévoyez des soirées pour profiter du spectacle urbain.'
		]
	}
};

export function getCityGuide(slug: string): CityGuide | undefined {
	return cityGuides[slug];
}
