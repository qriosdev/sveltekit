<script context="module">
	import { browser } from '$app/env';
	import { images } from '$util/imgData';
	let windowWidth;

	if (browser) {
		windowWidth = window.screen.width;
	}
</script>

<script>
	import lazyimage from '$act/lazyimage';

	export let file;
	export let alt = '';
	const [name] = file.split('.');
	const webp = `/images/${name}.webp`;
	const src = `/images/${file}`;

	const width = images[`${name}`].width;
	const height = images[`${name}`].height;
	const placeholder = images[`${name}`].dataURI;
	console.log(placeholder);
</script>

<picture>
	<source
		data-file={file}
		data-srcset={webp}
		srcset={placeholder}
		use:lazyimage
		type="image/webp"
	/>
	<img data-file={file} data-src={src} src={placeholder} use:lazyimage {width} {height} {alt} />
</picture>

<style lang="scss">
	img {
		display: block;
	}
</style>
