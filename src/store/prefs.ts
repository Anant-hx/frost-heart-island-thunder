import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Lang = "en" | "hi";

type Prefs = {
  lang: Lang;
  lite: boolean;
  setLang: (lang: Lang) => void;
  toggleLite: () => void;
};

const memory = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const usePrefs = create<Prefs>()(
  persist(
    (set) => ({
      lang: "en",
      lite: false,
      setLang: (lang) => set({ lang }),
      toggleLite: () => set((s) => ({ lite: !s.lite })),
    }),
    {
      name: "vidyanta-prefs",
      storage: createJSONStorage(() => (typeof window === "undefined" ? memory : localStorage)),
    },
  ),
);
