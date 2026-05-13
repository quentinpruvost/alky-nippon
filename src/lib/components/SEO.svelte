<script lang="ts">
	import { page } from '$app/stores';
	
	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: string;
	}

	let {
		title = 'AlkyNippon — Le Japon, Autrement',
		description = 'Guides et outils pour préparer le Japon : destinations, blog pratique et configurateur d’itinéraire.',
		image = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200',
		type = 'website'
	}: Props = $props();

	const siteUrl = 'https://alkynippon.fr';
	const currentUrl = `${siteUrl}${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={currentUrl} />

	<!-- OpenGraph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="AlkyNippon" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
