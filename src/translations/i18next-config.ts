import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import { enTranslation, hiTranslation } from "./translations";


i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ["en"],
        resources: {
            en: {
                translation: enTranslation
            },
            hi: {
                translation: hiTranslation

            }
        }
    })

export default i18n;