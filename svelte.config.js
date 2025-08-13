// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter({ strict: true }),
		paths: {
			base: '',
			relative: false
		},
		prerender: {
			entries: ['/', '/en/', '/it/']
		},
	}
};

export default config;
