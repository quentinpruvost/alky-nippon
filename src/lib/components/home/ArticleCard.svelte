<script lang="ts">
    let { 
        category, 
        title, 
        duration, 
        image, 
        categoryColor = "text-jp-red" 
    } = $props<{
        category: string;
        title: string;
        duration: string;
        image: string;
        categoryColor?: string;
    }>();
</script>

<div class="flex flex-col group cursor-pointer">
    <div class="relative aspect-[3/4] overflow-hidden mb-4 rounded-sm">
        <img src={image} alt={title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    <span class="text-[10px] font-bold uppercase tracking-widest {categoryColor} mb-2">{category}</span>
    <h3 class="font-serif text-xl text-jp-black leading-snug group-hover:text-jp-red transition-colors mb-4">
        {title}
    </h3>
    <div class="flex items-center gap-2 text-jp-gray text-[10px]">
        <span class="opacity-50">🕒</span> {duration} de lecture
    </div>
</div>