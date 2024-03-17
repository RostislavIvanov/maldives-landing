import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_ru from '~/translations/ru/global.json';
import global_en from '~/translations/en/global.json';

i18n.use(initReactI18next).init({
    interpolation: { escapeValue: false },
    lng: 'ru',
    resources: {
        en: {
            global: global_en,
        },
        ru: {
            global: global_ru,
        },
    },
});
