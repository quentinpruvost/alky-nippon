<script lang="ts">
    // Correction des imports Lucide pour les réseaux sociaux
    import { Instagram, Youtube, Facebook, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-[#111] text-white pt-20 pb-10">
    <div class="container mx-auto px-6 lg:px-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <div class="lg:col-span-1">
                <div class="flex items-center gap-2 mb-6">
                    <div class="w-8 h-8 bg-jp-red rounded-full flex items-center justify-center font-bold italic text-sm text-white">JV</div>
                    <span class="font-bold tracking-tighter text-lg uppercase">Japon Voyage</span>
                </div>
                <p class="text-xs text-gray-500 leading-relaxed mb-6">
                    Blog voyage dédié au Japon : conseils pratiques, itinéraires, bons plans et découvertes pour un voyage inoubliable.
                </p>
                <div class="flex gap-4 text-gray-400">
                    <a href="/" aria-label="Instagram" class="hover:text-white transition-colors"><Instagram size={18} /></a>
                    <a href="/" aria-label="Youtube" class="hover:text-white transition-colors"><Youtube size={18} /></a>
                    <a href="/" aria-label="Facebook" class="hover:text-white transition-colors"><Facebook size={18} /></a>
                    <a href="/" aria-label="Twitter" class="hover:text-white transition-colors"><Twitter size={18} /></a>
                </div>
            </div>

            {#each [
                {title: 'Destinations', links: ['Tokyo', 'Kyoto', 'Osaka', 'Hokkaido']},
                {title: 'Préparer', links: ['Budget', 'Transports', 'Visa', 'Assurance']},
                {title: 'Ressources', links: ['Guides PDF', 'Cartes', 'Lexique', 'Newsletter']},
                {title: 'Le Site', links: ['À propos', 'Contact', 'Publicité', 'Partenaires']}
            ] as col}
                <div>
                    <h4 class="font-bold text-[11px] tracking-widest uppercase mb-6 text-white">{col.title}</h4>
                    <ul class="flex flex-col gap-3">
                        {#each col.links as link}
                            <li>
                                <a href="/" class="text-xs text-gray-500 hover:text-jp-red transition-colors capitalize">{link}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-[10px] text-gray-600">© 2026 Japon Voyage — Tous droits réservés</p>
            <div class="flex gap-6 text-[10px] text-gray-600 uppercase tracking-widest">
                <a href="/" class="hover:text-white transition-colors">Mentions légales</a>
                <a href="/" class="hover:text-white transition-colors">Confidentialité</a>
                <a href="/" class="hover:text-white transition-colors">CGU</a>
            </div>
        </div>
    </div>
</footer>