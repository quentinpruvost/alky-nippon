<script lang="ts">
	import DestinationGuide from '$lib/components/destinations/DestinationGuide.svelte';
	import { cityGuides } from '$lib/data/cityGuides';

	const guide = cityGuides.tokyo;
</script>

<DestinationGuide {...guide} />
