import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero finova-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Debt review flag removal support</span>
            <h1>
              Ready to move <span className="accent">beyond debt review?</span>
            </h1>
            <p>
              Finova Associates helps South African consumers understand the correct route toward debt review clearance, withdrawal assessment and credit-bureau status follow-through.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/eligibility">Check my starting point</Link>
              <Link className="button secondary" href="/debt-removal">Explore removal routes</Link>
            </div>
            <div className="trust-row">
              <span className="trust-chip">Clearance support</span>
              <span className="trust-chip">Record verification</span>
              <span className="trust-chip">Bureau follow-through</span>
            </div>
          </div>

          <div className="hero-card surface-3d finova-card">
            <div className="card-orb card-orb-one" />
            <div className="card-orb card-orb-two" />
            <span className="eyebrow on-purple">Your case journey</span>
            <h3>Simple steps. Clear progress.</h3>
            <p className="muted on-purple-muted">We make the process easier to understand from the first check to the final hand-off.</p>
            <div className="journey-stack">
              <div className="journey-item">
                <span className="journey-number">1</span>
                <strong>Check your current status</strong>
                <span>Start</span>
              </div>
              <div className="journey-item">
                <span className="journey-number">2</span>
                <strong>Verify records and documents</strong>
                <span>Review</span>
              </div>
              <div className="journey-item">
                <span className="journey-number">3</span>
                <strong>Confirm the correct route</strong>
                <span>Route</span>
              </div>
              <div className="journey-item">
                <span className="journey-number">4</span>
                <strong>Follow through on status updates</strong>
                <span>Finish</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What Finova helps with</span>
            <h2>There is no one-size-fits-all “remove my flag” button.</h2>
            <p>
              Your route depends on what happened in your debt review process, whether an order exists, what has been settled and what the supporting records show.
            </p>
          </div>

          <div className="grid-3">
            <article className="card surface-3d">
              <span className="card-index">Clearance</span>
              <h3>Paid-up clearance support</h3>
              <p>For matters where the relevant obligations have been settled and the required clearance conditions may be met.</p>
              <Link className="card-link" href="/debt-removal">Learn more →</Link>
            </article>
            <article className="card surface-3d card-yellow">
              <span className="card-index">Assessment</span>
              <h3>Withdrawal route review</h3>
              <p>For matters where the stage of debt review, court position and improved financial circumstances need to be checked.</p>
              <Link className="card-link" href="/eligibility">Check your position →</Link>
            </article>
            <article className="card surface-3d">
              <span className="card-index">Follow-through</span>
              <h3>Credit-bureau status support</h3>
              <p>Where the applicable process is completed, we help keep attention on the final status and credit-bureau hand-offs.</p>
              <Link className="card-link" href="/process">See the process →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section purple-section">
        <div className="container hero-grid">
          <div className="section-title light-title">
            <span className="eyebrow on-purple">Experience that matters</span>
            <h2>We know the difference between a promising story and a properly supported case.</h2>
            <p>
              Practical experience means checking paid-up letters, balances, debt counsellor records, court information where applicable and the final status hand-offs before an outcome is presented as possible.
            </p>
            <div className="hero-actions">
              <Link className="button yellow-button" href="/experience">See our experience</Link>
            </div>
          </div>

          <div className="quote-panel bright-panel">
            <span className="eyebrow">Finova approach</span>
            <blockquote>Start with the facts. Build the route from there.</blockquote>
            <p>Clear information first makes the rest of the process easier to understand and easier to manage.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">How it works</span>
            <h2>A straightforward path from assessment to follow-through.</h2>
          </div>

          <div className="grid-2">
            <div className="process-step" data-step="01">
              <h3>Initial status check</h3>
              <p>We establish whether you are still under debt review, whether a court order exists and what has already been paid.</p>
            </div>
            <div className="process-step" data-step="02">
              <h3>Document verification</h3>
              <p>The records supporting your matter are checked before a route is suggested.</p>
            </div>
            <div className="process-step" data-step="03">
              <h3>Route confirmation</h3>
              <p>The matter is classified for clearance, withdrawal assessment or further review.</p>
            </div>
            <div className="process-step" data-step="04">
              <h3>Status follow-through</h3>
              <p>Where applicable, the final clearance or status and subsequent bureau update process are followed through.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner">
          <div>
            <span className="eyebrow">Start here</span>
            <h2>Not sure what route applies to you?</h2>
            <p>Answer four short questions to get an initial indication of what should be investigated next.</p>
          </div>
          <div className="hero-actions">
            <Link className="button" href="/eligibility">Start assessment</Link>
            <Link className="button secondary" href="/faq">Read FAQs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
