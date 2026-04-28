<script lang="ts">
  const destinations = [
    { title: 'Tokyo', kanji: '東京', href: '/destinations/tokyo', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' },
    { title: 'Kyoto', kanji: '京都', href: '/destinations/kyoto', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800' },
    { title: 'Osaka', kanji: '大阪', href: '/destinations/osaka', img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800' }
  ];
</script>

<div class="min-h-screen bg-[#faf9f6] pt-32 pb-20 px-6 lg:px-24">
  <div class="flex items-center gap-4 mb-8">
    <span class="h-[2px] w-12 bg-[#bc002d]"></span>
    <span class="text-[#bc002d] font-bold tracking-[0.2em] text-[11px] uppercase">Exploration</span>
  </div>
  
  <h1 class="font-serif text-6xl mb-16 italic">Toutes les <span class="text-[#bc002d] not-italic">destinations</span></h1>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each destinations as item}
      <a href={item.href} class="group relative aspect-[4/5] overflow-hidden bg-black block">
        <img src={item.img} alt={item.title} class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span class="text-4xl font-bold opacity-30 mb-2">{item.kanji}</span>
          <h3 class="text-2xl font-serif tracking-widest uppercase">{item.title}</h3>
          <span class="mt-4 text-[10px] tracking-[0.3em] border-b border-white/30 pb-1 opacity-0 group-hover:opacity-100 transition-opacity">DÉCOUVRIR</span>
        </div>
      </a>
    {/each}
  </div>
</div>