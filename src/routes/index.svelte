<script>
	import Picture from '$comp/Picture.svelte';
</script>

<svelte:head>
	<title>SvelteKit Playground</title>
	<meta name="description" content="Testing SvelteKit" />
</svelte:head>

<h1>SvelteKit Playground</h1>

<!-- <h2>Direct Image</h2>
<img src={image} alt="svelte" /> -->

<h2>Dynamic Picture</h2>

<div style="height: 120vh; background-color: orange;" />
<Picture file="svelte.png" alt="svelte" />

<div style="height: 50vh; background-color: grey;" />
<Picture file="sveltekit.png" alt="svelte" />
