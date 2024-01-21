import { defineConfig, sharpImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

import { locales } from './config/locales';
import { sidebar } from './config/sidebar';

import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';

import { sitemap } from './integrations/sitemap';
import { rehypeAutolink } from './plugins/rehype-autolink';
import { rehypeOptimizeStatic } from './plugins/rehype-optimize-static';
import { rehypeTasklistEnhancer } from './plugins/rehype-tasklist-enhancer';
import { remarkFallbackLang } from './plugins/remark-fallback-lang';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/en',
  },
  integrations: [
    starlight({
      title: 'Docs',
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/dbrumley/mayhem-docs/edit/main',
      },
      // * Don't report error when we have not translated a page. Starlight will
      //   default back to english, which is expected.
      // * Ensure when we do have translations they point to the right locale.
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: true,
        }),
      ],
      defaultLocale: 'en',
      locales: locales,
      sidebar: sidebar,
      social: {
        github: 'https://github.com/forallsecure/',
        linkedin: 'https://www.linkedin.com/company/forallsecure-inc',
        twitter: 'https://twitter.com/ForAllSecure'
      },
    }),
    sitemap(),
  ],
  trailingSlash: 'always',
  scopedStyleStrategy: 'where',
  markdown: {
    // Override with our own config
    smartypants: false,
    remarkPlugins: [
      [remarkSmartypants, { dashes: false }],
      // Add our custom plugin that marks links to fallback language pages
      remarkFallbackLang(),
    ],
    rehypePlugins: [
      rehypeSlug,
      // This adds links to headings
      ...rehypeAutolink(),
      // Tweak GFM task list syntax
      rehypeTasklistEnhancer(),
      // Collapse static parts of the hast to html
      rehypeOptimizeStatic,
    ],
  },
});
