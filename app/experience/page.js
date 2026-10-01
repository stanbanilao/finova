import Link from "next/link";

export const metadata = {
  title: "Experience",
  description: "Finova Associates brings practical experience to debt review status checks, clearance support, record verification and bureau follow-through.",
};

export default function Experience() {
  return (
    <main>
      <section className="hero subpage-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow light-eyebrow">Experience</span>
            <h1>Practical experience across the <span className="accent">full case hand-off.</span></h1>
            <p>
              Finova Associates has experience working through debt review removal and clearance matters where the real challenge is often status verification, document reconciliation and consistent follow-up.
            </p>
          </div>
          <aside className="hero-card dark-dossier">
            <span className="dossier-kicker">Why experience matters</span>
            <h3>Fewer assumptions. Better case preparation.</h3>
            <div className="info-list">
              <div className="info-row"><strong>Status</strong><span>Establish what has actually happened in the debt review journey.</span></div>
              <div className="info-row"><strong>Evidence</strong><span>Identify the records that matter to the proposed route.</span></div>
              <div className="info-row"><strong>Handoffs</strong><span>Track what remains with a counsellor, provider, court or bureau.</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Practical case experience</span>
            <h2>The work behind a well-prepared matter.</h2>
          </div>
          <div className="grid-3">
            <article className="card"><span className="card-index">01</span><h3>Debt review record checks</h3><p>Establishing the current position before recommending a removal or clearance pathway.</p></article>
            <article className="card"><span className="card-index">02</span><h3>Paid-up and balance reconciliation</h3><p>Working through the evidence that supports whether a clearance process may be ready to progress.</p></article>
            <article className="card"><span className="card-index">03</span><h3>Credit-bureau hand-offs</h3><p>Recognising that the process only feels complete when the resulting status has been properly carried through.</p></article>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container principles-panel standalone-principle">
          <span className="principles-number">PROFESSIONAL STANDARD</span>
          <blockquote>Experience supports judgment. It does not create certainty.</blockquote>
          <p>Past experience can help identify issues sooner and guide a matter more clearly, but it cannot guarantee that every consumer qualifies for the same route or turnaround time.</p>
          <div className="hero-actions">
            <Link className="button gold-button" href="/eligibility">Check your starting point</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
