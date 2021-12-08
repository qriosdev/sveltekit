import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { imagetools } from 'vite-imagetools';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-netlify';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/lib/style/`;

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		// trailingSlash: 'ignore',
		vite: {
			plugins: [imagetools({ force: true })],

			resolve: {
				alias: {
					$comp: path.resolve('./src/lib/components'),
					$util: path.resolve('./src/lib/utils'),
					$act: path.resolve('./src/lib/actions'),
					$data: path.resolve('./src/lib/data')
				}
			}
		}
	},

	preprocess: preprocess({
		scss: {
			prependData: `@use '${sassPath}global' as *;`
		}
	})
};

export default config;
