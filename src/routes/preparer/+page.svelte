<script lang="ts">
  import { fly } from 'svelte/transition';
  import { ShoppingBag, Train, Wifi, Hotel, Map, Camera, CreditCard, CheckCircle } from 'lucide-svelte';

  type Tool = {
    title: string;
    desc: string;
    link: string;
    icon: any;
    tag: string;
    cta: string;
    highlight?: boolean;
  };

  const essentials: Tool[] = [
    { title: "JR Pass Officiel", desc: "Le sésame pour traverser le Japon en Shinkansen. Rentable dès un aller-retour Tokyo-Osaka.", link: "#", icon: Train, tag: "Indispensable", cta: "Calculer mon trajet", highlight: true },
    { title: "Pocket WiFi", desc: "Connexion 4G illimitée pour toute la famille. Récupération à l'aéroport d'arrivée.", link: "#", icon: Wifi, tag: "Best-seller", cta: "Réserver ma borne" },
    { title: "Suica / Pasmo", desc: "La carte de transport prépayée pour le métro, les bus et même les distributeurs.", link: "#", icon: CreditCard, tag: "Pratique", cta: "Commander ma carte" }
  ];

  const booking: Tool[] = [
    { title: "Booking.com", desc: "Notre sélection de Ryokans traditionnels avec Onsen privés.", link: "#", icon: Hotel, tag: "Logement", cta: "Voir la sélection" },
    { title: "Klook Activities", desc: "Billets TeamLab, Ghibli Park et Universal Studios Japan au meilleur prix.", link: "#", icon: Map, tag: "Expériences", cta: "Réserver mes billets" }
  ];
</script>

<svelte:head>
    <title>AlkyNippon | Préparer votre voyage au Japon</title>
</svelte:head>

<div class="min-h-screen bg-[#faf9f6]">
  
  <!-- HERO SECTION : Ajustée avec pt-52 pour laisser passer la nav bar -->
  <section class="relative pt-52 pb-24 bg-white border-b border-gray-100">
    <div class="container mx-auto px-6 lg:px-24">
        <div class="max-w-3xl">
            <div class="flex items-center gap-4 mb-8" in:fly={{ y: 20, duration: 800 }}>
                <span class="h-[1px] w-12 bg-[#bc002d]"></span>
                <span class="text-[#bc002d] font-bold tracking-[0.4em] text-[10px] uppercase">Planification</span>
            </div>
            <h1 class="font-serif text-6xl md:text-8xl text-black mb-10 leading-none" in:fly={{ y: 30, duration: 1000 }}>
                L'essentiel <br /><span class="italic font-light text-gray-900">du départ.</span>
            </h1>
            <p class="text-gray-500 text-lg leading-relaxed max-w-xl">
                Oubliez le stress de l'organisation. Nous avons condensé 10 ans d'expertise pour ne garder que les outils qui fonctionnent vraiment.
            </p>
        </div>
    </div>
  </section>

  <!-- NAVIGATION INTERNE -->
  <nav class="sticky top-[80px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 hidden md:block">
      <div class="container mx-auto px-24 flex gap-12 py-5">
          {#each ['Les Indispensables', 'Réservations', 'Équipement', 'Checklist'] as link}
              <a href="#{link.toLowerCase()}" class="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#bc002d] transition-colors">{link}</a>
          {/each}
      </div>
  </nav>

  <div class="container mx-auto px-6 lg:px-24 py-24">
    
    <!-- SECTION 1 : LES INDISPENSABLES -->
    <section id="les indispensables" class="mb-32">
        <div class="grid lg:grid-cols-3 gap-8">
            {#each essentials as item}
                <div class="group relative bg-white border border-gray-100 p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-700 {item.highlight ? 'ring-1 ring-[#bc002d]/20' : ''}">
                    {#if item.highlight}
                        <div class="absolute -top-3 left-10 bg-[#bc002d] text-white text-[9px] font-black px-4 py-1 uppercase tracking-widest">Recommandé</div>
                    {/if}
                    <div>
                        <div class="text-[#bc002d] mb-10 group-hover:scale-110 transition-transform duration-500">
                            <svelte:component this={item.icon} size={32} strokeWidth={1} />
                        </div>
                        <h3 class="font-serif text-3xl mb-4 text-black">{item.title}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed mb-10">{item.desc}</p>
                    </div>
                    <a href={item.link} class="group/btn flex items-center justify-between border-t border-gray-50 pt-8 mt-auto">
                        <span class="text-[11px] font-bold tracking-[0.2em] uppercase text-black">{item.cta}</span>
                        <span class="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-all text-black">→</span>
                    </a>
                </div>
            {/each}
        </div>
    </section>

    <!-- SECTION 2 : ÉQUIPEMENT -->
    <section id="équipement" class="mb-32">
        <div class="bg-black text-white p-12 lg:p-24 overflow-hidden relative">
            <div class="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Camera size={400} strokeWidth={0.5} />
            </div>
            <div class="max-w-2xl relative z-10">
                <h2 class="font-serif text-5xl mb-8 leading-tight">Le matériel <span class="italic">photo & vidéo</span> pour ramener le Japon chez vous.</h2>
                <p class="text-gray-400 mb-12 text-lg font-light leading-relaxed">
                    Découvrez notre sélection Amazon : du boîtier hybride tropicalisé aux accessoires de survie urbaine (batteries, adaptateurs compacts).
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="#" class="bg-white text-black px-10 py-5 font-bold text-[11px] tracking-widest uppercase hover:bg-[#bc002d] hover:text-white transition-all">Consulter le guide Amazon</a>
                    <a href="#" class="border border-white/20 px-10 py-5 font-bold text-[11px] tracking-widest uppercase hover:bg-white/10 transition-all">Notre Setup 2024</a>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3 : CHECKLIST -->
    <section id="checklist" class="grid lg:grid-cols-2 gap-24 items-center">
        <div class="relative">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070" alt="Tradition" class="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" />
            <div class="absolute bottom-[-30px] right-[-30px] bg-white p-10 hidden lg:block border border-gray-100 shadow-2xl">
                <div class="flex flex-col gap-5">
                    <div class="flex items-center gap-3">
                        <CheckCircle size={16} class="text-[#bc002d]" />
                        <span class="text-[10px] font-bold uppercase tracking-widest text-black">Passeport à jour</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <CheckCircle size={16} class="text-[#bc002d]" />
                        <span class="text-[10px] font-bold uppercase tracking-widest text-black">Visit Japan Web rempli</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2 class="font-serif text-5xl mb-10 leading-tight text-black">Les 5 étapes <br /><span class="italic font-light text-gray-800">à J-30.</span></h2>
            <div class="space-y-10">
                {#each [
                    { t: "Validation Administrative", d: "Enregistrement sur Visit Japan Web pour le passage douanier et sanitaire." },
                    { t: "Réservation des Trains", d: "Achat du JR Pass si votre itinéraire dépasse deux régions géographiques." },
                    { t: "Change & Devises", d: "Le Japon reste une société de cash. Commandez vos Yens à l'avance pour les meilleurs taux." }
                ] as tip, i}
                    <div class="group flex gap-8">
                        <span class="font-serif text-4xl text-gray-200 group-hover:text-[#bc002d] transition-colors">{i+1}.</span>
                        <div>
                            <h4 class="font-bold text-[11px] uppercase tracking-[0.2em] mb-3 text-black">{tip.t}</h4>
                            <p class="text-gray-500 text-sm leading-relaxed">{tip.d}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

  </div>

  <!-- CTA FINAL -->
  <section class="bg-white border-y border-gray-100 py-32 text-center">
      <div class="container mx-auto px-6">
          <h2 class="font-serif text-6xl mb-10 italic text-black">AlkyNippon <span class="not-italic font-bold">Plus</span></h2>
          <p class="text-gray-400 max-w-2xl mx-auto mb-14 uppercase tracking-[0.4em] text-[10px] leading-loose">
              L'expérience ultime de planification. Itinéraires dynamiques, cartes hors-ligne et support WhatsApp 24/7.
          </p>
          <a href="/itineraires" class="bg-black text-white px-16 py-7 font-black text-[11px] tracking-[0.4em] uppercase hover:bg-[#bc002d] transition-all duration-500 shadow-2xl">
              Accéder au configurateur
          </a>
      </div>
  </section>
</div>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }
    
    .font-serif {
        font-family: 'Playfair Display', serif;
    }
</style>