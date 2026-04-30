export type Question = {
    id: string;
    label: string;
    type: 'choice' | 'multiple' | 'text' | 'number';
    options?: { value: string; label: string; icon?: string }[];
    placeholder?: string;
};

export const quizQuestions: Question[] = [
    // --- PROFIL & VIBE ---
    { id: 'name', label: "Commençons par faire connaissance. Comment vous appelez-vous ?", type: 'text', placeholder: "Votre prénom" },
    {
        id: 'vibe',
        label: "Quelle est l'atmosphère idéale de votre voyage ?",
        type: 'choice',
        options: [
            { value: 'zen', label: 'Temples & Zen', icon: '⛩️' },
            { value: 'neon', label: 'Cyberpunk & Néons', icon: '🏙️' },
            { value: 'nature', label: 'Montagnes & Forêts', icon: '🌲' },
            { value: 'culture', label: 'Art & Tradition', icon: '🎭' }
        ]
    },
    {
        id: 'first_time',
        label: "Est-ce votre premier voyage au Japon ?",
        type: 'choice',
        options: [
            { value: 'yes', label: 'Oui, c\'est une première !', icon: '🆕' },
            { value: 'no', label: 'Non, j\'y suis déjà allé', icon: '🔄' }
        ]
    },
    // --- LOGISTIQUE ---
    { id: 'duration', label: "Combien de jours prévoyez-vous de rester sur place ?", type: 'number', placeholder: "Ex: 15" },
    {
        id: 'season',
        label: "À quelle saison souhaitez-vous partir ?",
        type: 'choice',
        options: [
            { value: 'spring', label: 'Printemps (Cerisiers)', icon: '🌸' },
            { value: 'summer', label: 'Été (Festivals)', icon: '☀️' },
            { value: 'autumn', label: 'Automne (Érable)', icon: '🍁' },
            { value: 'winter', label: 'Hiver (Neige & Onsen)', icon: '❄️' }
        ]
    },
    {
        id: 'budget',
        label: "Quel est votre budget par personne (hors vols) ?",
        type: 'choice',
        options: [
            { value: 'budget', label: 'Serré (Auberges/Street food)', icon: '🎒' },
            { value: 'standard', label: 'Équilibré (Hôtels 3*/Restos)', icon: '🍱' },
            { value: 'luxury', label: 'Confort (Ryokans/Luxe)', icon: '✨' }
        ]
    },
    // --- COMPAGNONS ---
    {
        id: 'travelers',
        label: "Avec qui partagez-vous cette aventure ?",
        type: 'choice',
        options: [
            { value: 'solo', label: 'Solo', icon: '👤' },
            { value: 'couple', label: 'En amoureux', icon: '👩‍❤️‍👨' },
            { value: 'friends', label: 'Entre amis', icon: '🍻' },
            { value: 'family', label: 'En famille', icon: '👨‍👩‍👧‍👦' }
        ]
    },
    // --- CENTRES D'INTÉRÊT (MULTIPLE) ---
    {
        id: 'interests',
        label: "Quelles activités sont incontournables ? (Plusieurs choix)",
        type: 'multiple',
        options: [
            { value: 'food', label: 'Gastronomie', icon: '🍜' },
            { value: 'history', label: 'Châteaux & Samouraïs', icon: '🏯' },
            { value: 'geek', label: 'Anime & Tech', icon: '🕹️' },
            { value: 'nature', label: 'Randonnée', icon: '🥾' },
            { value: 'shopping', label: 'Mode & Shopping', icon: '🛍️' },
            { value: 'art', label: 'Musées & Design', icon: '🎨' }
        ]
    },
    // --- RYTHME & TRANSPORT ---
    {
        id: 'pace',
        label: "Quel rythme de visite préférez-vous ?",
        type: 'choice',
        options: [
            { value: 'slow', label: 'Tranquille (1 lieu/jour)', icon: '🐌' },
            { value: 'moderate', label: 'Standard (2-3 lieux/jour)', icon: '🚶' },
            { value: 'fast', label: 'Intense (Le maximum !)', icon: '🏃' }
        ]
    },
    {
        id: 'transport',
        label: "Comment préférez-vous vous déplacer ?",
        type: 'choice',
        options: [
            { value: 'train', label: 'Train & JR Pass', icon: '🚄' },
            { value: 'car', label: 'Location de voiture', icon: '🚗' },
            { value: 'feet', label: 'À pied & transports locaux', icon: '🚲' }
        ]
    },
    // --- DÉTAILS SPÉCIFIQUES ---
    {
        id: 'food_pref',
        label: "Une préférence alimentaire particulière ?",
        type: 'choice',
        options: [
            { value: 'none', label: 'Je mange de tout', icon: '😋' },
            { value: 'vege', label: 'Végétarien', icon: '🥦' },
            { value: 'fish', label: 'Pas de viande, que du poisson', icon: '🐟' },
            { value: 'halal', label: 'Halal', icon: '☪️' }
        ]
    },
    {
        id: 'accommodation',
        label: "Où préférez-vous dormir ?",
        type: 'multiple',
        options: [
            { value: 'hotel', label: 'Hôtel moderne', icon: '🏢' },
            { value: 'ryokan', label: 'Ryokan (Traditionnel)', icon: '👘' },
            { value: 'capsule', label: 'Hôtel Capsule', icon: '🛌' },
            { value: 'airbnb', label: 'Appartement typique', icon: '🏠' }
        ]
    },
    {
        id: 'language',
        label: "Quel est votre niveau de japonais ?",
        type: 'choice',
        options: [
            { value: 'zero', label: 'Arigato... et c\'est tout', icon: '😶' },
            { value: 'basic', label: 'Quelques phrases de survie', icon: '🗣️' },
            { value: 'fluent', label: 'Je me débrouille bien', icon: '🎓' }
        ]
    },
    {
        id: 'nightlife',
        label: "L'importance de la vie nocturne (bars, clubs) ?",
        type: 'choice',
        options: [
            { value: 'low', label: 'Peu important', icon: '😴' },
            { value: 'medium', label: 'De temps en temps', icon: '🍹' },
            { value: 'high', label: 'Indispensable !', icon: '🕺' }
        ]
    },
    {
        id: 'nature_type',
        label: "Quel type de paysage préférez-vous ?",
        type: 'choice',
        options: [
            { value: 'mountains', label: 'Alpes Japonaises', icon: '🏔️' },
            { value: 'coast', label: 'Bords de mer & Îles', icon: '🌊' },
            { value: 'countryside', label: 'Campagne & Rizières', icon: '🌾' }
        ]
    },
    {
        id: 'off_path',
        label: "Voulez-vous sortir des sentiers battus ?",
        type: 'choice',
        options: [
            { value: 'no', label: 'Non, je veux voir les classiques', icon: '📸' },
            { value: 'yes', label: 'Oui, je veux des lieux secrets', icon: '🗺️' }
        ]
    },
    {
        id: 'shopping_type',
        label: "Si vous faites du shopping, c'est plutôt :",
        type: 'choice',
        options: [
            { value: 'souvenirs', label: 'Souvenirs traditionnels', icon: '🎭' },
            { value: 'gadgets', label: 'Électronique & Gadgets', icon: '🔋' },
            { value: 'luxury', label: 'Marques de luxe', icon: '💎' },
            { value: 'thrift', label: 'Friperies & Vintage', icon: '👕' }
        ]
    },
    {
        id: 'onsen',
        label: "L'expérience des Onsen (sources thermales) ?",
        type: 'choice',
        options: [
            { value: 'must', label: 'Indispensable', icon: '♨️' },
            { value: 'maybe', label: 'Pourquoi pas', icon: '🤔' },
            { value: 'no', label: 'Pas pour moi', icon: '🙅' }
        ]
    },
    { id: 'extra_info', label: "Une dernière chose à nous préciser pour votre PDF ?", type: 'text', placeholder: "Allergies, passion précise..." },
    { id: 'email', label: "Dernière étape : votre email pour recevoir l'itinéraire.", type: 'text', placeholder: "votre@email.com" }
];