import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	build: {
		minify: true,
	},
	kit: {
		adapter: adapter()
	},
	"package": {
		"files": "docs"
	  },
	preprocess: [
		preprocess({
		  postcss: true,
		})]
};

export default config;
