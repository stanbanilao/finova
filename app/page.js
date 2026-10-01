import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero finova-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Debt Review Clearance & Flag Removal Support</span>
            <h1>
              Professional guidance for a <span className="accent">regulated process.</span>
            </h1>
            <p>
              Finova Associates assists South African consumers with structured debt review clearance support, withdrawal assessment and credit-bureau status follow-through. Every matter begins with the record, not a promise.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/eligibility">Request an assessment</Link>
              <a
                className="button secondary"
                href="https://wa.me/27672602467?text=Good%20day%20Finova%20Associates.%20I%20would%20like%20help%20with%20debt%20review%20removal."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp 067 260 2467
              </a>
            </div>
            <div className="trust-row">
              <span className="trust-chip">Confidential enquiries</span>
              <span className="trust-chip">Document-led assessment</span>
              <span className="trust-chip">No guaranteed outcomes</span>
            </div>
          </div>

          <aside className="hero-card legal-dossier">
            <span className="dossier-kicker">Matter Overview</span>
            <h3>Your case deserves a structured review.</h3>
            <p>
              Debt review “removal” can involve different routes. We first identify the status, supporting documents and parties involved before the next step is recommended.
            </p>
            <div className="dossier-list">
              <div><span>01</span><strong>Status & stage</strong><small>Establish the current position</small></div>
              <div><span>02</span><strong>Records & balances</strong><small>Verify the supporting evidence</small></div>
              <div><span>03</span><strong>Appropriate route</strong><small>Clearance, withdrawal or review</small></div>
              <div><span>04</span><strong>Follow-through</strong><small>Track the final status hand-offs</small></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="credibility-strip">
        <div className="container credibility-grid">
          <div><strong>Structured</strong><span>case assessment</span></div>
          <div><strong>Evidence-led</strong><span>document review</span></div>
          <div><strong>Professional</strong><span>client communication</span></div>
          <div><strong>Transparent</strong><span>about outcomes & timing</span></div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our services</span>
            <h2>Debt review removal is not one procedure.</h2>
            <p>
              The appropriate route depends on your actual debt review status, whether a restructuring order exists, what has been settled and what the available records support.
            </p>
          </div>

          <div className="grid-3">
            <article className="card service-card">
              <span className="card-index">01</span>
              <h3>Clearance support</h3>
              <p>For matters where the relevant obligations have been settled and the statutory clearance requirements may be satisfied.</p>
              <Link className="card-link" href="/debt-removal">View clearance pathways →</Link>
            </article>
            <article className="card service-card featured-card">
              <span className="card-index">02</span>
              <h3>Withdrawal assessment</h3>
              <p>For matters where the debt review stage, court position and current financial circumstances require careful review.</p>
              <Link className="card-link" href="/eligibility">Assess your position →</Link>
            </article>
            <article className="card service-card">
              <span className="card-index">03</span>
              <h3>Status follow-through</h3>
              <p>For clients who need disciplined follow-up after the relevant clearance or status process has been progressed.</p>
              <Link className="card-link" href="/process">See our process →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section navy-section">
        <div className="container split-editorial">
          <div className="section-title light-title">
            <span className="eyebrow light-eyebrow">Our approach</span>
            <h2>Measured advice starts with verified information.</h2>
            <p>
              Paid-up letters, current balances, debt counsellor records, court documentation where applicable and credit-bureau status all matter. Finova focuses on understanding the file before presenting a route as viable.
            </p>
            <div className="hero-actions">
              <Link className="button gold-button" href="/experience">Our experience</Link>
            </div>
          </div>

          <div className="principles-panel">
            <span className="principles-number">FINOVA / 01</span>
            <blockquote>“The objective is not to make the process sound easy. It is to make the process clear.”</blockquote>
            <p>
              That means realistic communication, documented steps and no suggestion that a valid debt review status can simply be erased on request.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our process</span>
            <h2>A disciplined path from assessment to outcome.</h2>
          </div>

          <div className="grid-2">
            <div className="process-step" data-step="01">
              <h3>Initial status review</h3>
              <p>We establish the current debt review position, known court status and payment history.</p>
            </div>
            <div className="process-step" data-step="02">
              <h3>Document verification</h3>
              <p>The records relevant to the matter are gathered and checked before a route is proposed.</p>
            </div>
            <div className="process-step" data-step="03">
              <h3>Route confirmation</h3>
              <p>The matter is classified for clearance, withdrawal assessment or further professional review where necessary.</p>
            </div>
            <div className="process-step" data-step="04">
              <h3>Completion & follow-through</h3>
              <p>Where applicable, we monitor the remaining status and bureau hand-offs and keep the client informed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container consultation-panel">
          <div>
            <span className="eyebrow">Confidential enquiry</span>
            <h2>Unsure what applies to your matter?</h2>
            <p>Start with the eligibility assessment or speak to Finova on WhatsApp.</p>
          </div>
          <div className="consultation-actions">
            <Link className="button" href="/eligibility">Start assessment</Link>
            <a
              className="button secondary"
              href="https://wa.me/27672602467?text=Good%20day%20Finova%20Associates.%20I%20would%20like%20help%20with%20debt%20review%20removal."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Finova
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
