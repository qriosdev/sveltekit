import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { imagetools } from 'vite-imagetools';
import cloudflare from '@sveltejs/adapter-cloudflare';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/lib/style/`;

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
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
		},
		adapter: cloudflare({})
	},

	preprocess: preprocess({
		scss: {
			prependData: `@use '${sassPath}global' as *;`
		}
	})
};

export default config;
