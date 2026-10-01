import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Start a debt review clearance or removal enquiry with Finova Associates.",
};

export default function Contact() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Contact Finova</span>
            <h1>Start with your <span className="accent">current position.</span></h1>
            <p>The fastest way to begin is the eligibility assessment. It helps organise the first conversation around the facts that matter.</p>
            <div className="hero-actions">
              <Link className="button" href="/eligibility">Start eligibility assessment</Link>
              <Link className="button secondary" href="/faq">Read common questions</Link>
            </div>
          </div>

          <div className="hero-card surface-3d">
            <span className="eyebrow">Before you begin</span>
            <h3>Have what you know close by.</h3>
            <div className="info-list">
              <div className="info-row"><strong>Status</strong><span>Are you currently under debt review?</span></div>
              <div className="info-row"><strong>Court</strong><span>Do you know whether a restructuring order exists?</span></div>
              <div className="info-row"><strong>Payments</strong><span>Have the included accounts been settled?</span></div>
              <div className="info-row"><strong>Records</strong><span>Do you have paid-up letters or other case documents?</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container quote-panel">
          <span className="eyebrow">Contact channel</span>
          <blockquote>Your preferred Finova email and WhatsApp details can be connected here next.</blockquote>
          <p>The website and assessment flow are ready. Once the official business contact details are confirmed, this page can route enquiries directly to your inbox, WhatsApp Business or CRM without changing the rest of the website.</p>
        </div>
      </section>
    </main>
  );
}
