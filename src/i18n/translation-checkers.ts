import type docsearch from '@docsearch/js';
import type enUI from './en/ui';
import type { allLanguages } from './languages';

type ModalTranslations = NonNullable<Parameters<typeof docsearch>[0]['translations']>['modal'];

export type UIDictionaryKeys = keyof typeof enUI;
export type UIDict = Partial<typeof enUI>;
export type UILanguageKeys = keyof typeof allLanguages;

/** Helper to type check a dictionary of UI string translations. */
export const UIDictionary = (dict: Partial<typeof enUI>) => dict;

export interface DocSearchTranslation {
  // These two keys are Astro-specific and apply to the search box in the header.
  button?: string;
  shortcutLabel?: string;
  // Astro-specific labels for the custom `resultsFooterComponent`.
  resultsFooterLede?: string;
  resultsFooterIntegrations?: string;
  resultsFooterThemes?: string;
  resultsFooterDiscord?: string;
  // Search box placeholder text within the DocSearch modal.
  placeholder?: string;
  // This object follows DocSearch's translation.modal format.
  // See: https://docsearch.algolia.com/docs/api/#translations
  modal?: ModalTranslations;
}

/** Helper to type check a dictionary of DocSearch string translations. */
export const DocSearchDictionary = (dict: DocSearchTranslation) => dict;
