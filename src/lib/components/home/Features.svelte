<script lang="ts">
  import { features } from '$lib/data/site';
  import * as Icons from 'lucide-svelte';
  import type { Component } from 'svelte';

  // On force le typage pour extraire uniquement les composants
  const getIcon = (name: string): Component<any> => {
    // @ts-ignore - On sait que le nom vient de notre fichier data typé
    return Icons[name];
  };
</script>

<section id="pourquoi-alkynippon" class="scroll-mt-28 py-16 border-b border-gray-100 bg-white">
  <div class="container mx-auto px-6 lg:px-24">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {#each features as item}
        {@const Icon = getIcon(item.icon)}
        <div class="flex flex-col items-center text-center group cursor-pointer">
          <div class="mb-5 text-jp-red group-hover:scale-110 transition-transform duration-300">
            {#if Icon}
              <Icon size={32} strokeWidth={1.2} />
            {/if}
          </div>
          <h3 class="font-bold text-[13px] mb-2 uppercase tracking-tight text-jp-black">{item.title}</h3>
          <p class="text-[11px] text-jp-gray leading-relaxed px-2">{item.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>