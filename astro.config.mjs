import { defineConfig, sharpImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { locales } from './config/locales';
import { sidebar } from './config/sidebar';

//import { makeSidebar } from './config/sidebar';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/en'
	},
	integrations: [
		starlight({
			title: 'Docs',
			defaultLocale: 'en',
			locales: locales,
			sidebar: sidebar,
			social: {
				github: 'https://github.com/forallsecure',
			},
		}),
	],
});

