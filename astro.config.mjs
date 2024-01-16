import { defineConfig, sharpImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { makeLocalesConfig } from './config/locales';
import { makeSidebar } from './config/sidebar';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			defaultLocale: 'en',
			locales: makeLocalesConfig(),
			sidebar: makeSidebar(),
			social: {
				github: 'https://github.com/forallsecure',
			},
		}),
	],
});

/* sidebar: [
	{
		label: 'Start Here',
		items: [
			{ label: 'Getting Started', link: 'getting-started' },
			{ label: 'Installation', link: 'installation' },
			{ label: 'Setup', link: 'tbd' },
		],
	},
	{
		label: 'Core Concepts',
		items: [
			{ label: 'Why Mayhem', link: 'tbd' },
			{ label: 'Dynamic Analysis', link: 'tbd' },
			{ label: 'Shifting Left', link: 'tbd' },
		],
	},
	{
		label: 'Tutorials',
		items: [
			{ label: 'Your first run', link: 'tbd' },
			{ label: 'Your first project', link: 'tbd' },
			{ label: 'Using Docker', link: 'tbd' },
			{ label: 'Binary-only', link: 'tbd' },
		],
	},
	{
		label: 'Fundamentals',
		items: [
			{ label: 'Project Structure', link: 'tbd' },
			{ label: 'Sending Inputs', link: 'tbd' },
			{ label: 'Test Suites', link: 'tbd' },
			{ label: 'Dictionaries', link: 'tbd' },
		],
	},
	{
		label: 'Recipes',
		items: [
			{ label: 'make Integration', link: 'tbd' },
			{ label: 'cmake Integration', link: 'tbd' },
			{ label: 'Maven Integration', link: 'tbd' },
			{ label: 'Github CI/CD Integration', link: 'tbd' },
		],
	},
	{
		label: 'Examples',
		items: [
			// Each item here is one entry in the navigation menu.
			{ label: 'Binary Analysis', link: '/guides/example/' },
		],
	},
	{
		label: 'Configuration',
		items: [
			{ label: 'Mayhemfile', link: 'tbd' },
			{ label: 'CLI', link: 'tbd' },
		],
	},
	{
		label: 'Reference',
		autogenerate: { directory: 'reference' },
	},
],
*/