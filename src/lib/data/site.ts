import * as Icons from 'lucide-svelte';

export type Feature = {
    icon: keyof typeof Icons;
    title: string;
    desc: string;
};

// On change le nom global ici si besoin
export const siteName = "AlkyNippon";

export const navLinks = [
    { name: 'DESTINATIONS', href: '/destinations' },
    { name: 'PRÉPARER SON VOYAGE', href: '/preparer' },
    { name: 'CONSEILS', href: '/conseils' },
    { name: 'ITINÉRAIRES', href: '/itineraires' },
    { name: 'BLOG', href: '/blog' },
];

export const features: Feature[] = [
    { icon: 'BookOpen', title: 'Guides pratiques', desc: 'Tout ce qu\'il faut savoir avant de partir.' },
    { icon: 'MapPin', title: 'Itinéraires détaillés', desc: 'Des parcours clés en main selon la durée de votre séjour.' },
    { icon: 'Coins', title: 'Budget maîtrisé', desc: 'Astuces et bons plans pour voyager sans se ruiner.' },
    { icon: 'Palmtree', title: 'Culture & traditions', desc: 'Comprendre le Japon pour mieux l\'apprécier.' },
    { icon: 'Utensils', title: 'Food & adresses', desc: 'Les meilleures expériences à vivre sur place.' },
];