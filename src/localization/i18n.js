import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { locales } from '../../locales/index'

i18n.locale = Localization.locale;
i18n.fallbacks = true;
const t = i18n.t
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: locales.en,
  sk: locales.sk
};

export { t }