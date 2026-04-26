import * as Icons from 'lucide-svelte';

export type Feature = {
    icon: keyof typeof Icons; // On force l'icône à être une clé valide de Lucide
    title: string;
    desc: string;
};

export const navLinks = [
    { name: 'DESTINATIONS', href: '#' },
    { name: 'PRÉPARER SON VOYAGE', href: '#' },
    { name: 'CONSEILS', href: '#' },
    { name: 'ITINÉRAIRES', href: '#' },
    { name: 'BLOG', href: '#' },
];

export const features: Feature[] = [
    { icon: 'BookOpen', title: 'Guides pratiques', desc: 'Tout ce qu\'il faut savoir avant de partir.' },
    { icon: 'MapPin', title: 'Itinéraires détaillés', desc: 'Des parcours clés en main selon la durée de votre séjour.' },
    { icon: 'Coins', title: 'Budget maîtrisé', desc: 'Astuces et bons plans pour voyager sans se ruiner.' },
    { icon: 'Palmtree', title: 'Culture & traditions', desc: 'Comprendre le Japon pour mieux l\'apprécier.' },
    { icon: 'Utensils', title: 'Food & adresses', desc: 'Les meilleures expériences à vivre sur place.' },
];