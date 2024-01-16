/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
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
      { label: 'Design Rationale', link: 'tbd' },
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
export default [
  { text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
  { text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
  { text: 'Installation', slug: 'installation', key: 'install' },

  { text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
  { text: 'Why Mayhem', slug: 'concepts/why-mayhem', key: 'concepts/why-mayhem' },
  { text: 'Design Rationale', slug: 'concepts/design-rationale', key: 'concepts/design-rationale' },
  { text: 'Dynamic Analysis', slug: 'concepts/dynamic-analysis', key: 'concepts/dynamic-analysis' },
  { text: 'CI Integration', slug: 'concepts/ci-integration', key: 'concepts/ci-integration' },

  { text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
  { text: 'Build an App', slug: 'tutorial/0-introduction', key: 'tbd' },
  { text: "Harnessing Binaries", slug: 'tutorials/binary-harness', key: 'tutorials/binary-harness' },

  { text: 'Recipes', header: true, type: 'fundamentals', key: 'fundamentals' },
  { text: "make Integration", slug: 'recipies/make-integration', key: 'recipies/make-integration' },
  { text: "cmake Integration", slug: 'recipies/cmake-integration', key: 'recipies/cmake-integration' },

  { text: 'Examples', header: true, type: 'examples', key: 'examples' },
  { text: "Example 1", slug: 'examples/example1', key: 'examples/example1' },
  { text: "Example 2", slug: 'examples/example2', key: 'examples/example2' },

  { text: 'Reference', header: true, type: 'api', key: 'reference' },
  { text: 'Mayhemfile', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },
  { text: 'CLI', slug: 'reference/cli', key: 'reference/cli', },

] as const;
