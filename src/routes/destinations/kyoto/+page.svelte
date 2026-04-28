<script lang="ts">
  import { fly } from 'svelte/transition';

  const info = {
    title: "Kyoto",
    kanji: "京都",
    hero: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920",
    description: "Ancienne capitale impériale, Kyoto est le cœur culturel du Japon. Entre temples millénaires, jardins de zen et le quartier des geishas à Gion, la ville offre une immersion totale dans le Japon traditionnel."
  };
</script>

<section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
  <img src={info.hero} alt={info.title} class="absolute inset-0 w-full h-full object-cover" />
  <div class="absolute inset-0 bg-black/40"></div>
  
  <div class="relative text-center text-white" in:fly={{ y: 30, duration: 1000 }}>
    <span class="text-xl font-bold tracking-[0.5em] mb-4 block opacity-80">{info.kanji}</span>
    <h1 class="text-7xl md:text-9xl font-serif">{info.title}</h1>
  </div>
</section>

<section class="bg-white py-24">
  <div class="container mx-auto px-6 lg:px-48">
    <div class="max-w-3xl">
        <div class="flex items-center gap-4 mb-8">
            <span class="h-[2px] w-12 bg-[#bc002d]"></span>
            <span class="text-[#bc002d] font-bold tracking-widest text-xs uppercase">Guide de voyage</span>
        </div>
        
        <p class="text-3xl font-serif leading-relaxed text-gray-800 mb-12">
            {info.description}
        </p>

        <div class="prose prose-lg text-gray-600">
            <h2 class="text-black font-serif text-3xl mb-6">Pourquoi visiter Kyoto ?</h2>
            <p class="mb-6">
                Kyoto est une ville qui se découvre lentement. Loin de l'agitation frénétique de Tokyo, elle invite à la contemplation. Avec plus de 1600 temples bouddhistes et 400 sanctuaires shinto, c'est un musée à ciel ouvert.
            </p>
            <p>
                Ne manquez pas le pavillon d'Or (Kinkaku-ji), les portes rouges de Fushimi Inari et une promenade au crépuscule dans les ruelles étroites de Pontocho.
            </p>
        </div>
    </div>
  </div>
</section>