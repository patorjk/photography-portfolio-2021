import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import translationEn from './translation.en.json';

const languages = ['en']; // (*)

const resource = {
  en: {
    translation: translationEn,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // detection: options,
    detection: {order: ['querystring', 'navigator']},
    fallbackLng: 'en',
    resources: resource,
    whitelist: languages,
    //lng: "ko",
    ns: ['translation'],
    defaultNS: "translation",
    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
