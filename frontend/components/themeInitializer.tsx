"use client";

import { useEffect } from "react";
import { THEME_KEY } from "@/lib/theme";

export default function ThemeInitializer() {
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  }, []);

  return null;
}
