// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path'; // 👈 aggiunto

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter({ strict: true }),
		paths: {
			base: '',
			relative: false
		},
		alias: {
			$lib: path.resolve('./src/lib') // 👈 alias corretti
		}
	}
};

export default config;
