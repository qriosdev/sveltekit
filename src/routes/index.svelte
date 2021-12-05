<script>
	import Picture from '$comp/Picture.svelte';
	import Metas from '$comp/Metas.svelte';

	let title = 'SvelteKit Playground';
	let description = 'Testing SvelteKit';
	let image = 'sveltekit.png';

	let url = import.meta.env.VITE_HOSTNAME || '';
</script>

<svelte:head>
	<Metas {title} {description} {image} />
</svelte:head>

<h1>SvelteKit Playground</h1>

<h2>URL:</h2>
{url}

<!-- <h2>Direct Image</h2>
<img src={image} alt="svelte" /> -->

<h2>Dynamic Picture</h2>

<div style="height: 120vh; background-color: orange;" />
<Picture file="svelte.png" alt="svelte" />

<div style="height: 50vh; background-color: grey;" />
<Picture file="sveltekit.png" alt="svelte" />
