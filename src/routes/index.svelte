<script>
	import Picture from '$comp/Picture.svelte';
	import Metas from '$comp/Metas.svelte';

	let title = 'SvelteKit Playground';
	let description = 'Testing SvelteKit';
	let image = 'sveltekit.png';

	let url = import.meta.env.VITE_HOSTNAME || '';
	let url2 = import.meta.env['VITE_HOSTNAME'] || '';
	let url3 = import.meta.env.HOSTNAME || '';
	let url4 = import.meta.env['HOSTNAME'] || '';
	let url5 = import.meta.env.VITE_SITENAME || '';
	let url6 = import.meta.env.VITE_TEST || '';
	let url7 = import.meta.env['VITE_TEST'] || '';
</script>

<svelte:head>
	<Metas {title} {description} {image} />
</svelte:head>

<h1>SvelteKit Playground</h1>
<a href="/contact/">Contact</a>
<br />
<a href="/blog/">Blog</a>
<br />
<ul>
	<li>VITE_HOSTNAME: {url}</li>
	<li>['VITE_HOSTNAME']: {url2}</li>
	<li>HOSTNAME: {url3}</li>
	<li>['HOSTNAME']: {url4}</li>
	<li>VITE_SITENAME: {url5}</li>
	<li>VITE_TEST: {url6}</li>
	<li>['VITE_TEST']: {url7}</li>
</ul>

<div style="height: 110vh; background-color: orange;" />
<Picture file="svelte.png" alt="svelte" />

<div style="height: 50vh; background-color: grey;" />
<Picture file="sveltekit.png" alt="svelte" />
