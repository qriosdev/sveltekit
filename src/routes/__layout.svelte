<script context="module">
	import { fonts } from '$data/fontData';
</script>

<svelte:head>
	{#each fonts as font}
		{#if font.includes('.woff2')}
			<link rel="preload" href={font} as="font" type="font/woff2" crossorigin />
		{/if}
	{/each}
</svelte:head>

<slot />

<style global lang="scss">
	/*-----------------------------------------------------------
FONTS
-----------------------------------------------------------*/

	/* quicksand-600 - latin */
	@font-face {
		font-family: 'Quicksand';
		font-style: normal;
		font-weight: 600;
		src: local(''), url('/fonts/quicksand-v24-latin-600.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('/fonts/quicksand-v24-latin-600.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* quicksand-700 - latin */
	@font-face {
		font-family: 'Quicksand';
		font-style: normal;
		font-weight: 700;
		src: local(''), url('/fonts/quicksand-v24-latin-700.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('/fonts/quicksand-v24-latin-700.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* open-sans-regular - latin */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		src: local(''), url('/fonts/open-sans-v23-latin-regular.woff2') format('woff2'),
			/* Chrome 26+, Opera 23+, Firefox 39+ */ url('/fonts/open-sans-v23-latin-regular.woff')
				format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		width: auto;
		overflow-x: hidden;
	}

	body {
		background-color: $dark;
		font-family: $font-open-sans;
		font-size: 16px;
		line-height: 1.8;
		color: $white;
	}

	button {
		font-family: $font-open-sans;
	}

	section {
		padding: calc(2rem + 5vw) 0;
	}

	.row {
		max-width: 1080px;
		width: 80%;
		margin: 0 auto;
		display: block;
	}

	h1,
	h2,
	h3 {
		font-family: $font-quicksand;
		margin-bottom: 0.5em;
		font-weight: 700;
		line-height: 1.4;
	}

	h1,
	.h1 {
		text-shadow: 0em 0em 0.4em rgba($white, 50%);
	}

	h1 {
		@include fluid-typography(46, 64);
	}

	h2 {
		@include fluid-typography(30, 36);
	}

	h3 {
		@include fluid-typography(28, 30);
	}

	img {
		max-width: 100%;
		object-fit: contain;
	}

	p {
		margin-bottom: 1em;
	}

	ul,
	ol {
		margin-left: 0;
		padding-left: 3rem;
		margin-bottom: 1em;
	}

	a {
		text-decoration: none;
	}

	svg {
		max-width: 500px;
	}

	pre {
		white-space: pre-wrap; /* css-3 */
		white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
		white-space: -pre-wrap; /* Opera 4-6 */
		white-space: -o-pre-wrap; /* Opera 7 */
		word-wrap: break-word; /* Internet Explorer 5.5+ */
		text-align: left;
	}
</style>
