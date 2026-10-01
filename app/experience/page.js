import Link from "next/link";

export const metadata = {
  title: "Our Experience",
  description: "Finova Associates brings practical experience to debt review status checks, clearance support, record verification and bureau follow-through.",
};

export default function Experience() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Our experience</span>
            <h1>Experience across the <span className="accent">whole hand-off.</span></h1>
            <p>
              Finova Associates brings practical experience from debt review removal and clearance matters where the challenge is rarely a single form. The real work is understanding the status, reconciling the evidence and keeping the right parties moving.
            </p>
          </div>
          <div className="hero-card surface-3d">
            <span className="eyebrow">What experience changes</span>
            <h3>Fewer assumptions. Better questions.</h3>
            <div className="info-list">
              <div className="info-row"><strong>Status</strong><span>Know what has actually happened in the debt review journey.</span></div>
              <div className="info-row"><strong>Evidence</strong><span>Identify the documents that matter to the route.</span></div>
              <div className="info-row"><strong>Handoffs</strong><span>Track what still sits with a counsellor, provider, court or bureau.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Practical case experience</span>
            <h2>The work behind a clean outcome.</h2>
          </div>
          <div className="grid-3">
            <article className="card"><span className="card-index">01 / STATUS</span><h3>Debt review record checks</h3><p>Establishing the actual position before recommending a removal or clearance pathway.</p></article>
            <article className="card"><span className="card-index">02 / PROOF</span><h3>Paid-up and balance reconciliation</h3><p>Working through the evidence that supports whether a clearance process may be ready to progress.</p></article>
            <article className="card"><span className="card-index">03 / FOLLOW-UP</span><h3>Credit-bureau hand-offs</h3><p>Understanding that a completed process is only useful when the resulting status is correctly carried through.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container quote-panel">
          <span className="eyebrow">What we will not do</span>
          <blockquote>Turn experience into a guarantee.</blockquote>
          <p>Past experience helps us identify issues earlier and guide the process more clearly. It does not allow anyone to promise that every consumer qualifies for the same route or the same turnaround time.</p>
          <div className="hero-actions">
            <Link className="button" href="/eligibility">Check your starting point</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
