<script lang="ts">
    import { fly } from 'svelte/transition';

    const spots = [
        { name: 'HOKKAIDO', desc: 'Nature sauvage et paysages grandioses', top: '15%', left: '80%' },
        { name: 'TOKYO', desc: 'Modernité, pop culture et découvertes', top: '65%', left: '72%' },
        { name: 'KYOTO', desc: 'Temples, jardins et histoire', top: '70%', left: '55%' },
        { name: 'KANAZAWA', desc: 'Traditions et artisanat japonais', top: '60%', left: '58%' },
        { name: 'OSAKA', desc: 'Gastronomie et ambiance festive', top: '75%', left: '50%' },
    ];
</script>

<section class="py-24 bg-[#F9F9F9] overflow-hidden">
    <div class="container mx-auto px-6 lg:px-24">
        <div class="flex flex-col lg:flex-row items-center gap-16">
            
            <div class="lg:w-1/3">
                <div class="flex items-center gap-4 mb-6">
                    <span class="h-[1px] w-10 bg-jp-red"></span>
                    <span class="text-jp-red font-bold tracking-widest text-[10px] uppercase">Où aller au japon ?</span>
                </div>
                <h2 class="font-serif text-5xl text-jp-black mb-8 leading-tight">Explorez les régions incontournables</h2>
                <p class="text-jp-gray mb-10 leading-relaxed">
                    Du nord au sud, découvrez les villes, paysages et expériences uniques que chaque région a à offrir.
                </p>
                <button class="bg-jp-red text-white px-8 py-4 font-bold text-[10px] tracking-widest hover:bg-black transition-all uppercase">
                    Voir la carte interactive →
                </button>
            </div>

            <div class="lg:w-2/3 relative">
                <img src="https://www.japon-voyage.com/wp-content/themes/japon-voyage/img/map-japan.png" alt="Carte du Japon" class="opacity-20 grayscale" />
                
                {#each spots as spot}
                    <div class="absolute group" style="top: {spot.top}; left: {spot.left};">
                        <div class="relative">
                            <div class="w-3 h-3 bg-jp-red rounded-full cursor-pointer hover:scale-150 transition-transform"></div>
                            
                            <div class="absolute left-6 top-1/2 -translate-y-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <h4 class="font-bold text-xs tracking-tighter text-jp-black">{spot.name}</h4>
                                <p class="text-[10px] text-jp-gray leading-tight">{spot.desc}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>