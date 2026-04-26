<script lang="ts">
  import { fly, fade } from 'svelte/transition';
</script>

<section class="relative h-[85vh] w-full overflow-hidden flex items-center">
  <div class="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" 
      alt="Japan Landscape" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-white/10 backdrop-brightness-90"></div>
  </div>

  <div class="container mx-auto px-12 lg:px-24 relative z-10">
    <div in:fly={{ y: 30, duration: 1000, delay: 200 }}>
        <div class="flex items-center gap-4 mb-6">
            <span class="h-[1px] w-12 bg-jp-red"></span>
            <span class="text-jp-red font-bold tracking-[0.2em] text-xs uppercase">Bienvenue au Japon</span>
        </div>
        
        <h1 class="font-serif text-6xl lg:text-8xl leading-[1.1] text-jp-black mb-6">
            Préparez votre <br /> 
            voyage au <span class="text-jp-red italic">Japon</span> <br />
            en toute sérénité
        </h1>
        
        <p class="text-jp-gray text-lg max-w-md mb-10 leading-relaxed">
            Guides pratiques, itinéraires, bons plans et conseils pour découvrir le Japon autrement.
        </p>

        <div class="flex items-center gap-6">
            <button class="bg-jp-red text-white px-10 py-4 font-bold text-xs tracking-widest hover:bg-black transition-colors flex items-center gap-3 group">
                DÉCOUVRIR LES GUIDES <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button class="flex items-center gap-3 font-bold text-xs tracking-widest group">
                <div class="w-10 h-10 border border-jp-black rounded-full flex items-center justify-center group-hover:bg-jp-black group-hover:text-white transition-all">
                    <span class="text-[10px]">▶</span>
                </div>
                VOIR LA VIDÉO
            </button>
        </div>
    </div>
  </div>
</section>