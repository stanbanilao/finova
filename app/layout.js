import "./globals.css";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: {
    default: "Finova Associates | Debt Review Flag Removal Support",
    template: "%s | Finova Associates",
  },
  description:
    "South African debt review clearance and flag-removal support with eligibility assessment, document guidance, case tracking and credit-bureau follow-through.",
};

const serviceLinks = [
  ["/debt-removal", "Debt Review Removal"],
  ["/process", "How It Works"],
  ["/eligibility", "Eligibility Assessment"],
  ["/experience", "Our Experience"],
];

const companyLinks = [
  ["/about", "About"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/popia", "POPIA"],
  ["/terms", "Terms"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <footer className="footer">
            <div className="container footer-grid">
              <div className="footer-brand">
                <Link href="/" className="brand">
                  <span className="brand-mark">F</span>
                  <span className="brand-copy">
                    <span className="brand-finova">Finova</span>
                    <span className="brand-associates">Associates</span>
                  </span>
                </Link>
                <p className="notice">
                  Practical support for consumers navigating lawful debt review clearance, withdrawal assessment and credit-bureau status follow-through in South Africa.
                </p>
                <p className="micro">No guaranteed removals. Every route depends on the verified facts of the case.</p>
              </div>

              <div>
                <h4>Services</h4>
                {serviceLinks.map(([href, label]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </div>

              <div>
                <h4>Company</h4>
                {companyLinks.map(([href, label]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </div>
            </div>
            <div className="container footer-bottom">
              <span>Finova Associates · South Africa</span>
              <span>Clear process. Verified records. Human guidance.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
