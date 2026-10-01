import Link from "next/link";

export const metadata = {
  title: "Debt Review Removal",
  description: "Understand debt review clearance, withdrawal assessment and credit-bureau follow-through routes in South Africa.",
};

export default function DebtRemoval() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Debt review flag removal</span>
            <h1>Understand the route <span className="accent">before you act.</span></h1>
            <p>
              Debt review is a regulated process. A flag cannot simply be “deleted” on demand. The correct route depends on your current status, whether a restructuring order exists, what has been settled and what the supporting records show.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/eligibility">Check my starting point</Link>
              <Link className="button secondary" href="/process">See the full process</Link>
            </div>
          </div>

          <div className="hero-card surface-3d">
            <span className="eyebrow">Possible pathways</span>
            <h3>One goal. Different legal positions.</h3>
            <div>
              <span className="pill">Clearance certificate route</span>
              <span className="pill">Pre-order withdrawal assessment</span>
              <span className="pill">Court-order record review</span>
              <span className="pill">Paid-up verification</span>
              <span className="pill">Credit-bureau follow-through</span>
            </div>
            <p className="notice">The applicable route can only be confirmed after reviewing the facts and documents relevant to your matter.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Three common positions</span>
            <h2>Your status determines what happens next.</h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="card-index">01 / PAID UP</span>
              <h3>Relevant debts settled</h3>
              <p>If the required obligations are settled and the statutory conditions are met, a formal clearance route may be available.</p>
            </article>
            <article className="card">
              <span className="card-index">02 / EARLY STAGE</span>
              <h3>No restructuring order yet</h3>
              <p>Depending on the facts and current financial position, a withdrawal route may need to be assessed before any formal order is in place.</p>
            </article>
            <article className="card">
              <span className="card-index">03 / ORDER EXISTS</span>
              <h3>Court order on record</h3>
              <p>An existing restructuring order changes the position. The order, payment history and current records should be reviewed before the next step is proposed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What we verify</span>
            <h2>Strong cases begin with a clean record set.</h2>
          </div>
          <div className="grid-2">
            <article className="card"><div className="card-icon">01</div><h3>Debt review status</h3><p>Current status information, debt counsellor details and the stage reached in the debt review process.</p></article>
            <article className="card"><div className="card-icon">02</div><h3>Settlement evidence</h3><p>Paid-up letters, settlement confirmations and account information where relevant.</p></article>
            <article className="card"><div className="card-icon">03</div><h3>Court documentation</h3><p>Orders or applications where they form part of the matter and affect the lawful route forward.</p></article>
            <article className="card"><div className="card-icon">04</div><h3>Final status hand-offs</h3><p>Clearance or other confirmed status, followed by the appropriate bureau update process where applicable.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quote-panel">
          <span className="eyebrow">Important</span>
          <blockquote>No instant deletion. No guaranteed result.</blockquote>
          <p>Finova can improve the organisation, clarity and follow-through of your matter. Timelines and outcomes can still depend on debt counsellors, credit providers, courts where applicable, credit bureaus and the verified facts of your case.</p>
        </div>
      </section>
    </main>
  );
}
