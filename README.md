# Mayhem Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Getting started

To build this project, first make sure you have a current version of `node` and
`npm`, and then run:
```bash
npm i
npm run dev
```
You can then see the documentation at `https://localhost:4321`.

*Format code*:  `npm run format`
*Build production code*: `npm run build`, which will output the code in `dist`.




## 🚀 Project Structure

Inside this project you'll find the following file structure:
```
.
├── public/        # put any static content here, such as images
├── plugins/       # rehype and other plugin information
├── config/
│   ├── navbar.js  # navigation bar
│   └── locales.js # locale information. 
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   ├──── en/   # english content
│   │   ├──── ja/   # japanese translation
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Our documentation is built upon Starlight, which looks for `.md` or `.mdx`
files in the `src/content/docs/` directory. Each file is exposed as a route
based on its file name.


Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

Here are some useful files to know about:
 * The sidebar is in `config/sidebar.js`.
 * Content is stored in `content/en/`, which is written in [MDX
   format](https://mdxjs.com/). MDX is just like markdown, and also allows you
   to use JSX in your markdown content. 
 * Translations are a WIP, and under `content/{ja}`. English is our default
   language. If a page is not translated, it will fall back to the english
   page.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run format`          | Run `prettier`` on the code                      |

