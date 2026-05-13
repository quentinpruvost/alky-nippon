<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="relative h-screen w-full overflow-hidden bg-black" style="min-height: 600px;">
  <!-- Image de fond -->
  <img 
    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070" 
    alt="Rue de Kyoto" 
    class="absolute inset-0 w-full h-full object-cover opacity-80"
  />

  <!-- Overlay dégradé -->
  <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>

  <!-- Contenu -->
  <div class="relative h-full flex flex-col justify-center px-6 sm:px-10 lg:px-24">
    <div class="max-w-xl sm:max-w-2xl lg:max-w-4xl">
      <!-- Surtitre -->
      <div class="flex items-center gap-4 mb-5" in:fly={{ y: 20, duration: 1000 }}>
        <span class="h-[1px] w-10 bg-[#bc002d]"></span>
        <span class="text-white font-bold tracking-[0.3em] text-[10px] uppercase">Bienvenue au Japon</span>
      </div>

      <!-- Titre principal -->
      <h1 class="text-white font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-6 drop-shadow-lg">
        Préparez votre <br class="hidden sm:block" />
        voyage au <span class="text-[#bc002d] italic">Japon</span><br class="hidden sm:block" />
        en toute sérénité
      </h1>

      <!-- Description -->
      <p class="text-gray-200 text-base sm:text-lg max-w-sm sm:max-w-xl mb-8 leading-relaxed font-light">
        Guides pratiques, itinéraires, bons plans et conseils pour découvrir le Japon autrement.
      </p>

      <!-- Boutons -->
      <div class="flex flex-col xs:flex-row flex-wrap gap-4 items-start">
        <a
          href="/destinations"
          class="bg-[#bc002d] text-white px-7 py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
        >
          Découvrir les guides →
        </a>

        <a
          href="/itineraires"
          class="border border-white/45 px-7 py-4 text-[11px] font-bold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Créer mon itinéraire
        </a>
      </div>
    </div>
  </div>
</section>