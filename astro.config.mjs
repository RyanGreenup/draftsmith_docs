// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryangreenup.github.io',
  // base: '/draftsmith_docs',
	integrations: [
		starlight({
			title: 'DraftSmith Docs',
			social: {
				github: 'https://github.com/RyanGreenup/draftsmith_rs',
			},
			sidebar: [
        {
          label: 'Installation Guides',
          autogenerate: { directory: 'installation' },
        },
        {
          label: 'Usage Examples',
          autogenerate: { directory: 'usage' },
        },
				{
					label: 'Guides',
          autogenerate: { directory: 'guides' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	// { label: 'Example Guide', slug: 'guides/example' },
					// ],
				},
        {
          label: 'API Guide',
          autogenerate: { directory: 'api' },
        },
        {
          label: 'CLI Guide',
          autogenerate: { directory: 'cli' },
        },
        {
          label: 'TUI Guide',
          autogenerate: { directory: 'tui' },
        },
        {
          label: 'Web App Guide',
          autogenerate: { directory: 'web-app' },
        },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
