import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [imagetools({ force: true })]
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
