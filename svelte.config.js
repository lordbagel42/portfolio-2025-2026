import { mdsvex } from 'mdsvex';
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import relativeImages from 'mdsvex-relative-images';
import { visit } from 'unist-util-visit';

/**
 * Custom Remark plugin to handle:
 * 1. Obsidian-style images: ![[filename.ext]]
 * 2. Standard markdown images with bare filenames: ![](filename.ext)
 */
function remarkObsidianImages() {
	return (tree) => {
		// Handle standard markdown images: ![](filename.ext)
		visit(tree, 'image', (node) => {
			if (
				node.url &&
				!node.url.startsWith('/') &&
				!node.url.startsWith('./') &&
				!node.url.startsWith('../') &&
				!node.url.startsWith('http') &&
				!node.url.startsWith('$lib')
			) {
				// Prepend $lib/assets/ and decode URL encoding (like %20 for spaces)
				const decodedUrl = decodeURIComponent(node.url);
				node.url = `$lib/assets/${decodedUrl}`;
			}
		});

		// Handle Obsidian-style wikilinks: ![[filename.ext]]
		visit(tree, 'text', (node, index, parent) => {
			const regex = /!\[\[(.*?)\]\]/g;
			let match;
			const children = [];
			let lastIndex = 0;

			while ((match = regex.exec(node.value)) !== null) {
				if (match.index > lastIndex) {
					children.push({ type: 'text', value: node.value.slice(lastIndex, match.index) });
				}
				children.push({
					type: 'image',
					url: `$lib/assets/${match[1]}`,
					alt: match[1]
				});
				lastIndex = regex.lastIndex;
			}

			if (children.length > 0) {
				if (lastIndex < node.value.length) {
					children.push({ type: 'text', value: node.value.slice(lastIndex) });
				}
				parent.children.splice(index, 1, ...children);
				return index + children.length;
			}
		});
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [remarkObsidianImages, relativeImages]
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
	extensions: ['.svelte', '.md']
};

export default config;