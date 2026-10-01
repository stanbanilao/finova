import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Debt review clearance support · South Africa</span>
            <h1>
              Clear the path <span className="accent">beyond debt review.</span>
            </h1>
            <p>
              Finova Associates helps consumers understand and progress the lawful route toward debt review clearance, withdrawal assessment and credit-bureau status follow-through — with practical guidance and a case journey you can understand.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/eligibility">Check my starting point</Link>
              <Link className="button secondary" href="/debt-removal">Understand removal routes</Link>
            </div>
            <div className="trust-row">
              <span className="trust-chip">Clearance pathways</span>
              <span className="trust-chip">Record verification</span>
              <span className="trust-chip">Bureau follow-through</span>
              <span className="trust-chip">No guaranteed outcomes</span>
            </div>
          </div>

          <div className="hero-card surface-3d">
            <span className="eyebrow">Case journey</span>
            <h3>Know what happens next.</h3>
            <p className="muted">A structured route from status check to the final verified outcome.</p>
            <div className="journey-stack">
              <div className="journey-item">
                <span className="journey-number">01</span>
                <strong>Assess the current status</strong>
                <span><i className="status-dot" /> Start</span>
              </div>
              <div className="journey-item">
                <span className="journey-number">02</span>
                <strong>Verify records and documents</strong>
                <span>Evidence</span>
              </div>
              <div className="journey-item">
                <span className="journey-number">03</span>
                <strong>Confirm the lawful route</strong>
                <span>Review</span>
              </div>
              <div className="journey-item">
                <span className="journey-number">04</span>
                <strong>Follow through on status updates</strong>
                <span>Outcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What Finova does</span>
            <h2>Removal is not one button. It is the right route, properly handled.</h2>
            <p>
              The word “removal” can mean different things depending on the consumer’s debt review history. Finova starts by establishing the facts, then helps organise the process that fits the verified position.
            </p>
          </div>

          <div className="grid-3">
            <article className="card surface-3d">
              <span className="card-index">01 / CLEARANCE</span>
              <h3>Clearance support</h3>
              <p>For matters where the relevant obligations have been settled and the statutory requirements for clearance may be met.</p>
              <Link className="card-link" href="/debt-removal">See the route -&gt;</Link>
            </article>
            <article className="card surface-3d">
              <span className="card-index">02 / WITHDRAWAL</span>
              <h3>Withdrawal assessment</h3>
              <p>For cases where the debt review stage, court position and improved financial circumstances need to be checked before a route can be confirmed.</p>
              <Link className="card-link" href="/eligibility">Check starting point -&gt;</Link>
            </article>
            <article className="card surface-3d">
              <span className="card-index">03 / FOLLOW-THROUGH</span>
              <h3>Bureau status follow-through</h3>
              <p>Once the relevant clearance or status process is complete, the remaining hand-offs and credit-bureau updates still matter.</p>
              <Link className="card-link" href="/process">See the process -&gt;</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hero-grid">
          <div className="section-title">
            <span className="eyebrow">Experience that matters</span>
            <h2>We understand where debt review matters get stuck.</h2>
            <p>
              Practical experience means knowing the importance of paid-up letters, current balances, debt counsellor records, court documentation where applicable, and the final status hand-offs. Finova focuses on getting the record clear before promising a result.
            </p>
            <div className="hero-actions">
              <Link className="button secondary" href="/experience">Read about our experience</Link>
            </div>
          </div>

          <div className="quote-panel surface-3d">
            <span className="eyebrow">Finova principle</span>
            <blockquote>“Proof first. Process second. Outcome only when the record supports it.”</blockquote>
            <p>That keeps the conversation realistic, compliant and easier for the client to follow.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">How it works</span>
            <h2>A visible process from first check to final follow-through.</h2>
          </div>

          <div className="grid-2">
            <div className="process-step" data-step="01">
              <h3>Initial status check</h3>
              <p>We establish whether you are still under debt review, whether a court order exists and what has already been paid.</p>
            </div>
            <div className="process-step" data-step="02">
              <h3>Document verification</h3>
              <p>The records supporting your case are checked before a route is suggested.</p>
            </div>
            <div className="process-step" data-step="03">
              <h3>Route confirmation</h3>
              <p>The matter is classified for a clearance, withdrawal assessment or a more detailed legal/debt-counselling review.</p>
            </div>
            <div className="process-step" data-step="04">
              <h3>Outcome and bureau follow-through</h3>
              <p>Where applicable, we track the final confirmation and subsequent credit-bureau status process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner">
          <h2>Not sure what route applies to you?</h2>
          <p>Start with four questions. The eligibility checker gives you an initial indication of what needs to be investigated next.</p>
          <div className="hero-actions">
            <Link className="button" href="/eligibility">Start the assessment</Link>
            <Link className="button secondary" href="/faq">Read common questions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
