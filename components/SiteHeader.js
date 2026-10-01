"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  ["/", "Home"],
  ["/debt-removal", "Debt Review Removal"],
  ["/process", "How It Works"],
  ["/eligibility", "Eligibility"],
  ["/experience", "Experience"],
  ["/faq", "FAQ"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand" onClick={close} aria-label="Finova Associates home">
          <span className="brand-mark">F</span>
          <span className="brand-copy">
            <span className="brand-finova">Finova</span>
            <span className="brand-associates">Associates</span>
          </span>
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} onClick={close}>
              {label}
            </Link>
          ))}
          <Link className="mobile-nav-cta" href="/eligibility" onClick={close}>
            Start assessment
          </Link>
        </nav>

        <Link className="nav-cta desktop-cta" href="/eligibility">
          Start assessment
        </Link>
      </div>
    </header>
  );
}
