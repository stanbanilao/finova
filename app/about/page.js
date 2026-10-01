import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Finova Associates and its structured, professional approach to debt review clearance and removal support.",
};

export default function About() {
  return (
    <main>
      <section className="hero subpage-hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow light-eyebrow">About Finova Associates</span>
            <h1>Professional support for a <span className="accent">regulated consumer process.</span></h1>
            <p>Finova Associates is focused on making debt review clearance and removal matters easier to understand, better organised and more professionally communicated.</p>
          </div>
          <aside className="hero-card dark-dossier">
            <span className="dossier-kicker">Our approach</span>
            <h3>Clarity. Preparation. Follow-through.</h3>
            <p>We aim to make the case journey understandable even when the final outcome depends on external parties and formal processes.</p>
          </aside>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container grid-3">
          <article className="card"><span className="card-index">01</span><h3>Clarity</h3><p>Clients should understand the stage of their matter, what remains outstanding and why the next step matters.</p></article>
          <article className="card"><span className="card-index">02</span><h3>Preparation</h3><p>Focused document handling helps reduce avoidable back-and-forth and improves the quality of the case record.</p></article>
          <article className="card"><span className="card-index">03</span><h3>Responsibility</h3><p>Debt review removal is not presented as an instant or guaranteed result. The verified facts determine the route.</p></article>
        </div>
      </section>

      <section className="section compact-section">
        <div className="container consultation-panel">
          <div>
            <span className="eyebrow">Begin with the record</span>
            <h2>Start with the facts of your matter.</h2>
            <p>Use the eligibility screen for an initial indication, then continue to a document-based review.</p>
          </div>
          <div className="consultation-actions">
            <Link className="button" href="/eligibility">Start assessment</Link>
            <Link className="button secondary" href="/experience">Our experience</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
