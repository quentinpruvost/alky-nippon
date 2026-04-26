<script lang="ts">
    import ArticleCard from './ArticleCard.svelte';
</script>

<section class="py-24 bg-white">
    <div class="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row gap-16">
        <div class="lg:w-1/4">
            <div class="flex items-center gap-4 mb-6">
                <span class="h-[1px] w-10 bg-jp-red"></span>
                <span class="text-jp-red font-bold tracking-widest text-[10px] uppercase">Articles populaires</span>
            </div>
            <h2 class="font-serif text-4xl text-jp-black mb-8 leading-tight">Nos guides les plus consultés</h2>
            <button class="border border-jp-black px-6 py-3 text-[10px] font-bold tracking-widest hover:bg-jp-black hover:text-white transition-all uppercase">
                Voir tous les articles <span class="ml-2">→</span>
            </button>
        </div>

        <div class="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ArticleCard 
                category="Itinéraires" 
                title="Itinéraire 2 semaines au Japon : le guide complet" 
                duration="12 min"
                image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format"
            />
            <ArticleCard 
                category="Conseils Pratiques" 
                title="JR Pass, Suica, Pasmo : quel pass choisir ?" 
                duration="8 min"
                categoryColor="text-orange-500"
                image="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500&auto=format"
            />
            <ArticleCard 
                category="Destinations" 
                title="Kyoto : lieux incontournables et conseils" 
                duration="10 min"
                image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format"
            />
            <ArticleCard 
                category="Quand Partir" 
                title="Quand partir au Japon ? La meilleure période" 
                duration="7 min"
                categoryColor="text-blue-500"
                image="https://images.unsplash.com/photo-1522850959076-3297a3115053?w=500&auto=format"
            />
        </div>
    </div>
</section>