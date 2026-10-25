"use client";

import { useEffect, useState } from "react";

export const THEME_KEY = "larp-stocks-theme";
export const THEME_EVENT = "larp-stocks-theme-changed";

export function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setDarkTheme(document.documentElement.dataset.theme === "dark");
    };
    queueMicrotask(updateTheme);
    window.addEventListener(THEME_EVENT, updateTheme);
    return () => window.removeEventListener(THEME_EVENT, updateTheme);
  }, []);

  return darkTheme;
}
