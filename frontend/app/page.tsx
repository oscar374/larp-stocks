"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BrandMark from "@/components/brandMark";

const DEMO_USER_KEY = "larp-stocks-demo-user";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem(DEMO_USER_KEY, email.trim());
    router.push("/dashboard");
  }

  return (
    <main className="login-page">
      <section className="login-story">
        <Link className="brand brand-light" href="/" aria-label="LarpStocks home">
          <BrandMark />
          <span>LarpStocks</span>
        </Link>
        <div className="story-copy">
          <span className="eyebrow eyebrow-light">YOUR MARKET. YOUR MOVE.</span>
          <h1>Practice the<br />art of the trade.</h1>
          <p>Explore the market, make your call, and build your investing instincts — with pretend money and real-time simulated prices.</p>
        </div>
        <div className="story-market">
          <div className="market-label"><span className="live-dot" /> SIMULATED MARKET</div>
          <div className="market-line" aria-hidden="true">
            <svg viewBox="0 0 460 118" preserveAspectRatio="none">
              <path d="M0 95 C26 80 34 98 55 77 S85 84 108 67 139 78 159 55 191 68 211 43 247 57 269 35 301 53 321 30 349 42 372 21 402 32 431 10 460 18" />
            </svg>
          </div>
        </div>
        <span className="story-orbit story-orbit-one" />
        <span className="story-orbit story-orbit-two" />
      </section>

      <section className="login-panel">
        <div className="login-topline">
          <span>Already a member?</span>
          <span className="secure-label"><span className="secure-dot" /> DEMO ACCESS</span>
        </div>
        <div className="login-card">
          <div className="login-icon" aria-hidden="true">↗</div>
          <span className="eyebrow">WELCOME TO LARPSTOCKS</span>
          <h2>Sign in to your<br />trading desk.</h2>
          <p className="login-intro">Use any email and password to enter the simulated market.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              autoComplete="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <span>Demo account</span>
            </div>
            <input
              autoComplete="current-password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter any password"
              required
              type="password"
              value={password}
            />
            <button className="primary-button login-submit" type="submit">
              Enter trading desk <span aria-hidden="true">→</span>
            </button>
          </form>
          <p className="demo-note"><span>i</span> This is a demo experience. No real account or money is used.</p>
        </div>
        <div className="login-legal">© 2026 LarpStocks <span>·</span> Maciej Kapustka &amp; Oskar Pach</div>
      </section>
    </main>
  );
}
