<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<section class="relative h-screen w-full overflow-hidden bg-black">
  <!-- L'IMAGE : On baisse un peu l'opacité globale -->
  <img 
    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070" 
    alt="Kyoto Street" 
    class="absolute inset-0 w-full h-full object-cover opacity-80"
  />

  <!-- OVERLAY DÉGRADÉ : Indispensable pour la lisibilité -->
  <!-- On crée un voile sombre à gauche (là où est le texte) qui s'estompe vers la droite -->
  <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

  <!-- CONTENU -->
  <div class="relative h-full flex flex-col justify-center px-12 lg:px-24">
    <div class="max-w-4xl">
      <!-- Surtitre -->
      <div class="flex items-center gap-4 mb-6" in:fly={{ y: 20, duration: 1000 }}>
        <span class="h-[1px] w-12 bg-[#bc002d]"></span>
        <span class="text-white font-bold tracking-[0.3em] text-[10px] uppercase">Bienvenue au Japon</span>
      </div>

      <!-- TITRE : Passage en blanc avec une ombre légère pour le détacher -->
      <h1 class="text-white font-serif text-6xl md:text-8xl leading-[1.1] mb-8 drop-shadow-lg">
        Préparez votre <br /> 
        voyage au <span class="text-[#bc002d] italic">Japon</span> <br /> 
        en toute sérénité
      </h1>

      <!-- Description : Passage en gris clair/blanc -->
      <p class="text-gray-200 text-lg max-w-xl mb-12 leading-relaxed font-light">
        Guides pratiques, itinéraires, bons plans et conseils pour découvrir le Japon autrement.
      </p>

      <!-- Boutons -->
      <div class="flex flex-wrap gap-6 items-center">
        <a href="/destinations" class="bg-[#bc002d] text-white px-10 py-5 text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
          Découvrir les guides →
        </a>
        
        <a href="#newsletter" class="flex items-center gap-4 group">
            <div class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#bc002d] group-hover:border-[#bc002d] transition-all">
                <div class="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white ml-1"></div>
            </div>
            <span class="text-white text-[11px] font-bold tracking-widest uppercase">Newsletter</span>
        </a>
      </div>
    </div>
  </div>
</section>