<script lang="ts">
  import { navLinks } from '$lib/data/site';
  import { Search, Globe } from 'lucide-svelte';
</script>

<nav class="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-6 bg-white/90 backdrop-blur-sm border-b border-gray-100">
  <div class="flex items-center gap-2">
    <div class="w-10 h-10 bg-jp-red rounded-full flex items-center justify-center text-white font-bold italic">JV</div>
    <div class="leading-none">
      <h1 class="text-xl font-bold tracking-tighter text-jp-black">JAPON VOYAGE</h1>
      <p class="text-[10px] text-jp-gray tracking-[0.2em]">LE JAPON, AUTREMENT</p>
    </div>
  </div>

<div class="hidden lg:flex gap-8 items-center">
    {#each navLinks as link}
      <a href={link.href} class="text-xs font-bold tracking-widest text-jp-black hover:text-jp-red transition-colors">
        {link.name} <span class="text-[8px] opacity-50 ml-1">▼</span>
      </a>
    {/each}
  </div>

  <div class="flex items-center gap-4 text-jp-black">
    <Search size={20} />
    <div class="flex items-center gap-1 border-l pl-4">
        <Globe size={18} />
        <span class="text-xs font-bold">FR</span>
    </div>
  </div>
</nav>