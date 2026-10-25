"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/brandMark";
import { readRecentStocks, RECENT_STOCKS_EVENT } from "@/lib/recentStocks";
import { THEME_EVENT, THEME_KEY } from "@/lib/theme";

const DEMO_USER_KEY = "larp-stocks-demo-user";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [recentStocks, setRecentStocks] = useState<string[]>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const updateRecentStocks = () => setRecentStocks(readRecentStocks());
    const savedTheme = localStorage.getItem(THEME_KEY);
    const useDarkTheme = savedTheme === "dark";
    document.documentElement.dataset.theme = useDarkTheme ? "dark" : "light";
    queueMicrotask(() => setDarkTheme(useDarkTheme));
    queueMicrotask(updateRecentStocks);
    window.addEventListener(RECENT_STOCKS_EVENT, updateRecentStocks);
    window.addEventListener("storage", updateRecentStocks);
    return () => {
      window.removeEventListener(RECENT_STOCKS_EVENT, updateRecentStocks);
      window.removeEventListener("storage", updateRecentStocks);
    };
  }, []);

  function toggleTheme() {
    const nextIsDark = !darkTheme;
    setDarkTheme(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    localStorage.setItem(THEME_KEY, nextIsDark ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  function signOut() {
    localStorage.removeItem(DEMO_USER_KEY);
    router.replace("/");
  }

  return (
    <aside className="sidebar">
      <a className="brand sidebar-brand" href="/dashboard">
        <BrandMark />
        <span>LarpStocks</span>
      </a>
      <div className="sidebar-label">WORKSPACE</div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        <a className={`sidebar-link${pathname === "/dashboard" ? " active" : ""}`} href="/dashboard">
          <span className="nav-icon">▦</span>Dashboard
        </a>
        <a className={`sidebar-link${pathname === "/sampleStocks" ? " active" : ""}`} href="/sampleStocks">
          <span className="nav-icon">◫</span>Market samples
        </a>
        <a className={`sidebar-link${pathname === "/example" ? " active" : ""}`} href="/example">
          <span className="nav-icon">⌁</span>Larp market
          <span className="nav-live-dot" />
        </a>
        {recentStocks.length > 0 && (
          <>
            <div className="sidebar-label recent-sidebar-label">RECENT STOCKS</div>
            {recentStocks.map((symbol) => (
              <a
                className="sidebar-link recent-stock-link"
                href={`/example?symbol=${encodeURIComponent(symbol)}`}
                key={symbol}
              >
                <span className="recent-stock-icon">▥</span>{symbol}
              </a>
            ))}
          </>
        )}
      </nav>
      <div className="sidebar-bottom">
        <button
          aria-pressed={darkTheme}
          className="theme-toggle-button"
          onClick={toggleTheme}
          type="button"
        >
          <span className="nav-icon">{darkTheme ? "☾" : "☼"}</span>
          {darkTheme ? "Dark theme" : "Light theme"}
          <span className={`theme-switch${darkTheme ? " enabled" : ""}`} aria-hidden="true"><i /></span>
        </button>
        <button className="sign-out-button" onClick={signOut} type="button">
          <span className="nav-icon">↪</span>Sign out
        </button>
        <span className="sidebar-version">LARPSTOCKS · DEMO EDITION</span>
      </div>
    </aside>
  );
}
