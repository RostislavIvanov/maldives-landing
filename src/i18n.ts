import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_ru from '~/translations/ru/global.json';
import global_en from '~/translations/en/global.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        resources: {
            en: {
                global: global_en,
            },
            ru: {
                global: global_ru,
            },
        },
    });
