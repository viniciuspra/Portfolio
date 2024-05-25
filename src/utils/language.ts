export type Lang = "en" | "pt";

export const setLanguage = (lang: Lang) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("language", lang);
  }
};

export const getCurrentLanguage = (defaultLang: Lang = "en"): Lang => {
  if (typeof window !== "undefined") {
    const language = window.localStorage.getItem("language");
    return language === "pt" ? "pt" : "en";
  }
  return defaultLang;
};
