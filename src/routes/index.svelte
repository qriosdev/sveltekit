<script>
	import Picture from '$comp/Picture.svelte';
	import Metas from '$comp/Metas.svelte';

	let title = 'SvelteKit Playground';
	let description = 'Testing SvelteKit';
	let image = 'sveltekit.png';

	let url = import.meta.env.VITE_HOSTNAME || '';
	let url2 = import.meta.env['VITE_HOSTNAME'] || '';
	let url3 = import.meta.env.HOSTNAME || '';
</script>

<svelte:head>
	<Metas {title} {description} {image} />
</svelte:head>

<h1>SvelteKit Playground</h1>
<a href="/contact/">Contact</a>
<br />
<a href="/blog/">Blog</a>
<br />
VITE_HOSTNAME: {url} || ['VITE_HOSTNAME']: {url2} || HOSTNAME: {url3} ||

<div style="height: 100vh; background-color: orange;" />
<Picture file="svelte.png" alt="svelte" />

<div style="height: 50vh; background-color: grey;" />
<Picture file="sveltekit.png" alt="svelte" />
