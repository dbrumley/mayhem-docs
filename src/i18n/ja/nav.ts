export default [
  { text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
  { text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },
  { text: 'Installation', slug: 'installation', key: 'install' },

  { text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
  { text: 'Why Mayhem', slug: 'tbd', key: 'concepts/why-astro' },
  { text: 'Dynamic Analysis', slug: 'concepts/dynamic_analysis', key: 'tbd' },
  { text: 'Shifting Left', slug: 'concepts/shiftleft', key: 'tbd' },

  { text: 'More Concepts', header: true, type: 'learn', key: 'coreConcepts' },


  { text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
  { text: 'Build an App', slug: 'tutorial/0-introduction', key: 'tbd' },
  { text: 'Reference', header: true, type: 'api', key: 'reference' },
  {
    text: 'Mayhemfile',
    slug: 'reference/mayhemfile',
    key: 'tbd',
  },
] as const;
