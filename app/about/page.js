import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Finova Associates and its practical, transparent approach to debt review clearance and removal support.",
};

export default function About() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">About Finova Associates</span>
            <h1>A clearer client experience for a <span className="accent">regulated process.</span></h1>
            <p>Finova Associates exists to make debt review clearance and removal support easier to understand, easier to organise and easier to follow.</p>
          </div>
          <div className="hero-card surface-3d">
            <span className="eyebrow">Our approach</span>
            <h3>Clear explanations. Verified records. Structured milestones.</h3>
            <p className="muted">The process should be transparent even when the outcome depends on external parties.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-3">
          <article className="card"><span className="card-index">01 / CLARITY</span><h3>Explain the position</h3><p>Clients should understand what stage their matter is at and why the next step matters.</p></article>
          <article className="card"><span className="card-index">02 / PRACTICAL</span><h3>Ask for what matters</h3><p>Focused document handling reduces avoidable back-and-forth and makes exceptions easier to identify.</p></article>
          <article className="card"><span className="card-index">03 / RESPONSIBLE</span><h3>Do not sell certainty</h3><p>Debt review removal is not marketed as an instant or guaranteed result. The facts determine the route.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container banner">
          <h2>Start with the facts of your case.</h2>
          <p>Use the eligibility screen for an initial indication, then continue to a document-based review.</p>
          <div className="hero-actions">
            <Link className="button" href="/eligibility">Start assessment</Link>
            <Link className="button secondary" href="/experience">See our experience</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
