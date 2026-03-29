import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { zh, type LocaleKeys } from "./locales/zh";
import { en } from "./locales/en";

export type Locale = "zh" | "en";

const locales: Record<Locale, LocaleKeys> = { zh, en };

const STORAGE_KEY = "astra-locale";

interface I18nContextType {
  locale: Locale;
  t: LocaleKeys;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Locale) || "zh";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const value: I18nContextType = {
    locale,
    t: locales[locale],
    setLocale,
  };

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};
