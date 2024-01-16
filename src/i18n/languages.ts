export const allLanguages = {
  en: 'English',
  ja: '日本語',
} as const;

// Build for two languages only to speed up Astro's smoke tests
const twoLanguages = {
  en: 'English',
  ja: '日本語',
} as const;

/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
export default import.meta.env?.PUBLIC_TWO_LANG ? twoLanguages : allLanguages;

export const rtlLanguages = new Set(['']);
