export var sidebar = [
  {
    label: 'Start Here',
    translations: {
      ja: 'ここから始める',
    },
    items: [
      {
        label: 'Getting Started', slug: 'getting-started', link: '/getting-started',
        translations: {
          ja: '始め方」'
        }
      },
      {
        label: 'Installation', slug: 'installation', link: '/installation',
        translations: {
          ja: 'インストール」'
        }
      },
      {
        label: 'Build a secure calculator app',
        link: 'tutorial/code-tutorial/',
        badge: { text: 'Code', variant: 'tip' },
      },
      {
        label: 'Build a secure API',
        link: 'tutorial/api-tutorial',
        badge: { text: 'API', variant: 'tip' },
      },
    ],
  },
  {
    label: 'Tutorials',
    collapsed: true,
    translations: {
      ja: '「チュートリアル」'
    },
    items: [
      {
        label: 'Analyze Source',
        autogenerate: { directory: 'tutorials/analyze-source' },
        collapsed: true,
      },
      {
        label: 'Analyze Libraries',
        autogenerate: { directory: 'tutorials/analyze-libraries/' },
        collapsed: true,
      },
      { label: 'Analyze Binaries', link: 'tutorials/analyze-binary', collapsed: true },
    ],
  },
  {
    label: 'Core Concepts',
    collapsed: true,
    items: [
      { label: 'Using Mayhem', slug: 'using-mayhem', link: '/concepts/using-mayhem' },
      { label: 'How Mayhem Works', slug: 'how-mayhem-works', link: '/concepts/how-mayhem-works' },
      { label: 'Design Rationale', slug: 'design-rationale', link: '/concepts/design-rationale' },
      { label: 'Integration', slug: 'integration', link: '/concepts/integration' },
    ],
  },
  {
    label: 'Analyze',
    collapsed: true,
    items: [
      { label: 'Code & Binaries', link: 'analyze/code' },
      { label: 'APIs', link: 'analyze/api' },
      { label: 'Runtime SBOM', link: 'analyze/sbom' },
    ],
  },
  {
    label: 'Recipes',
    collapsed: true,
    autogenerate: { directory: 'recipes', collapsed: true },
  },
  {
    label: 'Managing Mayhem',
    collapsed: true,
    autogenerate: { directory: 'managing', collapsed: true },
  },
  {
    label: 'Reference',
    collapsed: true,
    autogenerate: { directory: 'reference', collapsed: true },
  },
  {
    label: 'Support',
    link: 'support/support',
  },
];

/*  { text: 'Installation', slug: 'installation', key: 'install' },
{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },

{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
{ text: 'Why Mayhem', slug: 'concepts/why-mayhem', key: 'concepts/why-mayhem' },
{ text: 'Design Rationale', slug: 'concepts/design-rationale', key: 'concepts/design-rationale' },
{ text: 'Dynamic Analysis', slug: 'concepts/dynamic-analysis', key: 'concepts/dynamic-analysis' },
{ text: 'CI Integration', slug: 'concepts/ci-integration', key: 'concepts/ci-integration' },

{ text: 'Analyze', header: true, type: 'learn', key: 'coreConcepts' },
{ text: 'Code & Binaries', slug: 'concepts/why-mayhem', key: 'concepts/why-mayhem' },
{ text: 'APIs', slug: 'concepts/design-rationale', key: 'concepts/design-rationale' },
{ text: 'Runtime SBOM', slug: 'concepts/dynamic-analysis', key: 'concepts/dynamic-analysis' },

{ text: 'Tutorials', header: true, type: 'learn', key: 'tutorials' },
{ text: 'Hands on Tour', slug: 'tutorials/hands-on-tour', key: 'tutorials/hands-on' },
{ text: 'Build an App', slug: 'tutorial/0-introduction', key: 'tbd' },
{ text: 'Harnessing Binaries', slug: 'tutorials/binary-harness', key: 'tutorials/binary-harness' },

{ text: 'Code Recipes', header: true, type: 'learn', key: 'fundamentals' },
{ text: 'make Integration', slug: 'recipies/make-integration', key: 'recipies/make-integration' },
{ text: 'cmake Integration', slug: 'recipies/cmake-integration', key: 'recipies/cmake-integration' },

{ text: 'API Recipes', header: true, type: 'learn', key: 'fundamentals' },


{ text: 'Integrations', header: true, type: 'integration', key: 'integration' },
{ text: 'Github', slug: 'integration/github', key: 'integration/github' },

{ text: 'Examples', header: true, type: 'learn', key: 'examples' },
{ text: 'Example 1', slug: 'examples/example1', key: 'examples/example1' },
{ text: 'Example 2', slug: 'examples/example2', key: 'examples/example2' },

{ text: 'Managing Mayhem', header: true, type: 'learn', key: 'tutorials' },
{ text: "SSO + User Management", slug: 'examples/example2', key: 'examples/example2' },
{ text: "Teams + Workspaces", slug: 'examples/example2', key: 'examples/example2' },
{ text: "Cluster Management", slug: 'examples/example1', key: 'examples/example1' },
{ text: "Installation + Upgrade", slug: 'examples/example1', key: 'examples/example1' },
{ text: "Worker Pools", slug: 'examples/example1', key: 'examples/example1' },

{ text: 'Reference', header: true, type: 'api', key: 'reference' },
{ text: 'Harnessing Templates', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },
{ text: 'Mayhemfile', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },
{ text: 'Helm Charts', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },
{ text: 'CLI', slug: 'reference/cli', key: 'reference/cli', },
{ text: 'Glossary', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },
{ text: 'Support', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },

] as const; */
