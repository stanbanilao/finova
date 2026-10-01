import "./globals.css";
import Link from "next/link";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import SiteHeader from "../components/SiteHeader";
import WhatsAppButton from "../components/WhatsAppButton";

const displayFont = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-finova-display",
  weight: ["400", "700"],
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-finova-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Finova Associates | Debt Review Clearance Support",
    template: "%s | Finova Associates",
  },
  description:
    "Professional South African debt review clearance and flag-removal support with structured assessment, document verification and credit-bureau follow-through.",
};

const serviceLinks = [
  ["/debt-removal", "Debt Review Removal"],
  ["/process", "Our Process"],
  ["/eligibility", "Eligibility Assessment"],
  ["/experience", "Experience"],
];

const companyLinks = [
  ["/about", "About Finova"],
  ["/faq", "Frequently Asked Questions"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/popia", "POPIA"],
  ["/terms", "Terms"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <footer className="footer">
            <div className="container footer-grid">
              <div className="footer-brand">
                <Link href="/" className="brand">
                  <span className="brand-mark">FA</span>
                  <span className="brand-copy">
                    <span className="brand-finova">Finova Associates</span>
                    <span className="brand-associates">Debt Review Clearance Support</span>
                  </span>
                </Link>
                <p className="notice">
                  Structured assistance for consumers navigating debt review clearance, withdrawal assessment and credit-bureau status follow-through in South Africa.
                </p>
                <p className="micro">
                  Finova Associates is presented as a support and case-coordination service, not as an attorney practice. Outcomes depend on the verified facts, applicable processes and third parties involved.
                </p>
              </div>

              <div>
                <h4>Services</h4>
                {serviceLinks.map(([href, label]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </div>

              <div>
                <h4>Contact</h4>
                <a href="https://wa.me/27672602467" target="_blank" rel="noreferrer">WhatsApp 067 260 2467</a>
                <a href="tel:+27672602467">Call 067 260 2467</a>
                {companyLinks.map(([href, label]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </div>
            </div>
            <div className="container footer-bottom">
              <span>Finova Associates · South Africa</span>
              <span>Professional · Discreet · Process-driven</span>
            </div>
          </footer>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
