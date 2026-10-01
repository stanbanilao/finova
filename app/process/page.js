import Link from "next/link";

export const metadata = {
  title: "How It Works",
  description: "See the Finova Associates debt review clearance and removal-support process from assessment to bureau follow-through.",
};

export default function Process() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">How it works</span>
          <h1 className="page-title">A process you can <span className="accent">actually follow.</span></h1>
          <p className="lead">Every matter is different, but the workflow should not feel mysterious. Finova keeps the journey structured from the first status check to the final verified hand-off.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container process-rail">
          <div className="process-step" data-step="01"><h3>Initial intake</h3><p>You answer a short set of questions so we can understand your debt review stage and what is already known.</p></div>
          <div className="process-step" data-step="02"><h3>Case classification</h3><p>We identify whether the matter appears to fit a clearance route, withdrawal assessment or a more detailed record/legal review.</p></div>
          <div className="process-step" data-step="03"><h3>Focused document request</h3><p>You receive a list of documents relevant to your route rather than a generic request for everything.</p></div>
          <div className="process-step" data-step="04"><h3>Verification</h3><p>Balances, status information, paid-up evidence and court records where applicable are checked against the proposed route.</p></div>
          <div className="process-step" data-step="05"><h3>Process execution</h3><p>The appropriate compliant process can then be progressed based on the verified position.</p></div>
          <div className="process-step" data-step="06"><h3>Confirmation and follow-through</h3><p>We communicate the outcome and track the remaining status/bureau hand-offs where they apply.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <span className="card-index">WHAT WE CONTROL</span>
            <h3>Organisation and communication</h3>
            <p>Clear document requests, structured checks, case classification, milestone communication and follow-up.</p>
          </div>
          <div className="card">
            <span className="card-index">WHAT WE DO NOT CONTROL</span>
            <h3>External processing times</h3>
            <p>Credit providers, debt counsellors, courts and credit bureaus may each have their own process and turnaround times.</p>
          </div>
        </div>
        <div className="container hero-actions">
          <Link className="button" href="/eligibility">Start with the assessment</Link>
        </div>
      </section>
    </main>
  );
}
