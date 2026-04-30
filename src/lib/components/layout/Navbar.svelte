<script lang="ts">
  import { navLinks } from '$lib/data/site';
  import { Search, Globe } from 'lucide-svelte';
</script>

<nav class="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-12 py-6 bg-white/95 backdrop-blur-sm border-b border-gray-100">
  
  <!-- LOGO ET NOM CLIQUABLE -->
  <a href="/" class="flex items-center gap-2 group transition-transform hover:scale-105">
    <div class="w-10 h-10 bg-[#bc002d] rounded-full flex items-center justify-center text-white font-bold italic">AN</div>
    <div class="leading-none">
      <h1 class="text-xl font-bold tracking-tighter text-black uppercase">AlkyNippon</h1>
      <p class="text-[10px] text-gray-400 tracking-[0.2em] group-hover:text-[#bc002d] transition-colors">LE JAPON, AUTREMENT</p>
    </div>
  </a>

  <!-- NAVIGATION -->
  <div class="hidden lg:flex gap-8 items-center">
    {#each navLinks as link}
      <a href={link.href} class="text-xs font-bold tracking-widest text-black hover:text-[#bc002d] transition-colors">
        {link.name}
      </a>
    {/each}
  </div>

  <!-- TOOLS -->
  <div class="flex items-center gap-4 text-black">
    <Search size={20} strokeWidth={1.5} class="cursor-pointer hover:text-[#bc002d] transition-colors" />
    <div class="h-4 w-[1px] bg-gray-200 mx-2"></div>
    <div class="flex items-center gap-2 cursor-pointer group">
      <Globe size={18} strokeWidth={1.5} class="group-hover:text-[#bc002d]" />
      <span class="text-[10px] font-bold group-hover:text-[#bc002d]">FR</span>
    </div>
  </div>
</nav>