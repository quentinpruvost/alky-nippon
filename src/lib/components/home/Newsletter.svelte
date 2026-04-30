<section class="relative py-24 w-full overflow-hidden bg-black">
  <!-- IMAGE DE FOND : On utilise un filtre noir et blanc avec une opacité réduite -->
  <img 
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop" 
            alt="Torii Gate" 
    class="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
  />

  <!-- OVERLAY SOMBRE UNIFORME -->
  <div class="absolute inset-0 bg-black/40"></div>

  <div class="relative container mx-auto px-6 lg:px-24">
    <div class="flex flex-col md:flex-row items-center justify-between gap-12">
      
      <!-- TEXTE -->
      <div class="max-w-xl">
        <div class="flex items-center gap-3 mb-4">
          <span class="h-[1px] w-8 bg-[#bc002d]"></span>
          <span class="text-[#bc002d] font-bold tracking-[0.3em] text-[10px] uppercase">Conseils, Bons Plans, Inspirations...</span>
        </div>
        <h2 class="text-white font-serif text-4xl md:text-5xl leading-tight mb-4 drop-shadow-md">
          Rejoignez plus de <span class="italic">15 000</span> voyageurs passionnés par le Japon
        </h2>
        <p class="text-gray-300 text-sm tracking-wide">
          Recevez chaque semaine nos meilleurs conseils et bons plans pour préparer votre voyage.
        </p>
      </div>

      <!-- FORMULAIRE -->
      <div class="w-full max-w-md">
        <form class="flex flex-col sm:flex-row gap-0 shadow-2xl">
          <input 
            type="email" 
            placeholder="Votre adresse e-mail" 
            class="w-full px-6 py-5 bg-white text-black outline-none text-sm font-light"
            required
          />
          <button 
            type="submit" 
            class="bg-[#bc002d] text-white px-8 py-5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 whitespace-nowrap"
          >
            S'inscrire
          </button>
        </form>
        <p class="mt-4 text-[10px] text-gray-400 italic text-center md:text-left">
          Pas de spam, désinscription en 1 clic.
        </p>
      </div>

    </div>
  </div>
</section>