"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  ["/debt-removal", "Services"],
  ["/process", "Our Process"],
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
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Confidential debt review clearance enquiries</span>
          <a href="https://wa.me/27672602467" target="_blank" rel="noreferrer">
            WhatsApp: 067 260 2467
          </a>
        </div>
      </div>

      <div className="container nav">
        <Link href="/" className="brand" onClick={close} aria-label="Finova Associates home">
          <span className="brand-mark">FA</span>
          <span className="brand-copy">
            <span className="brand-finova">Finova Associates</span>
            <span className="brand-associates">Clearance & Status Support</span>
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
          <a
            className="mobile-nav-cta"
            href="https://wa.me/27672602467?text=Good%20day%20Finova%20Associates.%20I%20would%20like%20help%20with%20debt%20review%20removal."
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            WhatsApp Finova
          </a>
        </nav>

        <Link className="nav-cta desktop-cta" href="/eligibility">
          Request assessment
        </Link>
      </div>
    </header>
  );
}
