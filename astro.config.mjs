// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BBlogs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/superb-b' }],
			sidebar: [
				{
					label: 'SS26 Courses',
					items: [{ autogenerate: { directory: 'SS26' } }],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
		react(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
