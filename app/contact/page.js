import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Finova Associates for debt review clearance and removal support.",
};

export default function Contact() {
  return (
    <main>
      <section className="hero subpage-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow light-eyebrow">Contact Finova Associates</span>
            <h1>Discuss your matter <span className="accent">confidentially.</span></h1>
            <p>Start with the information you currently have. Finova can then help identify what needs to be checked before a route is confirmed.</p>
            <div className="hero-actions">
              <a
                className="button gold-button"
                href="https://wa.me/27672602467?text=Good%20day%20Finova%20Associates.%20I%20would%20like%20help%20with%20debt%20review%20removal."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp 067 260 2467
              </a>
              <a className="button outline-light" href="tel:+27672602467">Call 067 260 2467</a>
            </div>
          </div>

          <aside className="hero-card dark-dossier">
            <span className="dossier-kicker">Before you contact us</span>
            <h3>Have what you know available.</h3>
            <div className="info-list">
              <div className="info-row"><strong>Status</strong><span>Are you currently under debt review?</span></div>
              <div className="info-row"><strong>Court</strong><span>Do you know whether a restructuring order exists?</span></div>
              <div className="info-row"><strong>Payments</strong><span>Have the included accounts been settled?</span></div>
              <div className="info-row"><strong>Records</strong><span>Do you have paid-up letters or other case documents?</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="eyebrow">WhatsApp</span>
            <h2>067 260 2467</h2>
            <p>Send a message and briefly explain where you are in the debt review process.</p>
            <a
              className="button"
              href="https://wa.me/27672602467?text=Good%20day%20Finova%20Associates.%20I%20would%20like%20help%20with%20debt%20review%20removal."
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp
            </a>
          </div>
          <div className="contact-card">
            <span className="eyebrow">Online assessment</span>
            <h2>Start with four questions.</h2>
            <p>The eligibility checker gives an initial indication of the type of review your matter may require.</p>
            <Link className="button secondary" href="/eligibility">Start assessment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
