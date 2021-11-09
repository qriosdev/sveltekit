<script context="module">
	import { browser } from '$app/env';
	let windowWidth;

	if (browser) {
		windowWidth = window.screen.width;
	}
</script>

<script>
	import lazyimage from '$act/lazyimage';

	export let file;
	export let alt = '';
	const [name, ext] = file.split('.');
	const webp = `/images/${name}.webp`;
	const src = `/images/${file}`;

	const endpoint = `/api/${file}`;

	let width, height;

	let image;
	if (browser) {
		const getImage = async () => {
			try {
				const request = await fetch(endpoint);
				const result = await request.json();
				const imageExists = result.webp.format;
				const w = result.webp.width;
				const h = result.webp.height;
				const aspectRatio = w / h;

				if (w > windowWidth) {
					width = windowWidth;
					height = width / aspectRatio;
				} else {
					width = w;
					height = w / aspectRatio;
				}

				const placeholder = result.placeholder;

				if (imageExists) {
					return placeholder;
				} else {
					return;
				}
			} catch (error) {
				console.log(error);
			}
		};

		image = getImage(file);
	}
</script>

{#await image then placeholder}
	<picture>
		<source data-srcset={webp} srcset={placeholder} use:lazyimage type="image/webp" />
		<img data-src={src} src={placeholder} use:lazyimage {width} {height} {alt} />
	</picture>
{/await}

<style lang="scss">
	img {
		display: block;
	}
</style>
