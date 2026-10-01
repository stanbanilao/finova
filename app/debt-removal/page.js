import Link from "next/link";

export const metadata = {
  title: "Debt Review Removal",
  description: "Understand debt review clearance, withdrawal assessment and credit-bureau follow-through routes in South Africa.",
};

export default function DebtRemoval() {
  return (
    <main>
      <section className="hero subpage-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow light-eyebrow">Debt Review Flag Removal</span>
            <h1>Establish the legal and factual position <span className="accent">before taking action.</span></h1>
            <p>
              Debt review is regulated. A status cannot simply be removed because a consumer requests it. The correct path depends on the stage of the matter, any order that exists, the payment position and the documents available.
            </p>
            <div className="hero-actions">
              <Link className="button gold-button" href="/eligibility">Request assessment</Link>
              <a className="button outline-light" href="https://wa.me/27672602467" target="_blank" rel="noreferrer">WhatsApp Finova</a>
            </div>
          </div>

          <aside className="hero-card dark-dossier">
            <span className="dossier-kicker">Potential Pathways</span>
            <h3>The route follows the record.</h3>
            <div className="pill-list">
              <span className="pill">Clearance certificate pathway</span>
              <span className="pill">Withdrawal assessment</span>
              <span className="pill">Court-order record review</span>
              <span className="pill">Paid-up verification</span>
              <span className="pill">Credit-bureau follow-through</span>
            </div>
            <p className="notice light-notice">The applicable route can only be confirmed after the relevant facts and supporting documents are reviewed.</p>
          </aside>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Common positions</span>
            <h2>Your status determines the next step.</h2>
          </div>
          <div className="grid-3">
            <article className="card"><span className="card-index">01</span><h3>Relevant debts settled</h3><p>If the required obligations have been settled and the statutory requirements are met, a formal clearance route may be available.</p></article>
            <article className="card"><span className="card-index">02</span><h3>No restructuring order yet</h3><p>Depending on the stage and the verified financial position, a withdrawal route may need to be assessed before an order exists.</p></article>
            <article className="card"><span className="card-index">03</span><h3>Court order on record</h3><p>An existing restructuring order changes the position and requires a more careful review of the order, payments and current record.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Case preparation</span>
            <h2>Strong matters begin with reliable records.</h2>
          </div>
          <div className="grid-2">
            <article className="card"><div className="card-icon">01</div><h3>Debt review status</h3><p>Current status information, debt counsellor details and the stage reached in the debt review process.</p></article>
            <article className="card"><div className="card-icon">02</div><h3>Settlement evidence</h3><p>Paid-up letters, settlement confirmations and account information where relevant.</p></article>
            <article className="card"><div className="card-icon">03</div><h3>Court documentation</h3><p>Orders or applications where they form part of the matter and affect the route forward.</p></article>
            <article className="card"><div className="card-icon">04</div><h3>Final status hand-offs</h3><p>Clearance or another confirmed status, followed by the appropriate bureau update process where applicable.</p></article>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container principles-panel standalone-principle">
          <span className="principles-number">IMPORTANT</span>
          <blockquote>No instant deletion. No guaranteed result.</blockquote>
          <p>Finova can assist with organisation, assessment and follow-through. Timelines and outcomes can still depend on debt counsellors, credit providers, courts where applicable, credit bureaus and the verified facts of the matter.</p>
        </div>
      </section>
    </main>
  );
}
