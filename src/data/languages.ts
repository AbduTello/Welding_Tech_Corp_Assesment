export type Language = {
  // BCP-47 tag; doubles as the future locale route segment (e.g. /es)
  code: string;
  nativeName: string;
  englishName: string;
};

export const LANGUAGES: Language[] = [
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "es", nativeName: "Español", englishName: "Spanish" },
  {
    code: "zh-CN",
    nativeName: "简体中文",
    englishName: "Chinese (Simplified)",
  },
  { code: "de", nativeName: "Deutsch", englishName: "German" },
  { code: "fr", nativeName: "Français", englishName: "French" },
];

export const DEFAULT_LANGUAGE = "en";
