
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

  { text: 'Recipes', header: true, type: 'learn', key: 'fundamentals' },
  { text: "make Integration", slug: 'recipies/make-integration', key: 'recipies/make-integration' },
  { text: "cmake Integration", slug: 'recipies/cmake-integration', key: 'recipies/cmake-integration' },

  { text: 'Examples', header: true, type: 'learn', key: 'examples' },
  { text: "Example 1", slug: 'examples/example1', key: 'examples/example1' },
  { text: "Example 2", slug: 'examples/example2', key: 'examples/example2' },

  { text: 'Reference', header: true, type: 'api', key: 'reference' },
  { text: 'Mayhemfile', slug: 'reference/mayhemfile', key: 'reference/mayhemfile', },
  { text: 'CLI', slug: 'reference/cli', key: 'reference/cli', },

] as const;
