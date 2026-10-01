import Link from "next/link";

export const metadata = {
  title: "Our Process",
  description: "See the Finova Associates debt review clearance and removal-support process from assessment to bureau follow-through.",
};

export default function Process() {
  return (
    <main>
      <section className="hero subpage-hero">
        <div className="container">
          <span className="eyebrow light-eyebrow">Our Process</span>
          <h1 className="page-title">A structured process from <span className="accent">first review to final follow-through.</span></h1>
          <p className="lead">Every matter differs. The purpose of the process is to establish the record, confirm the route and keep the client informed at each material stage.</p>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container process-rail">
          <div className="process-step" data-step="01"><h3>Initial intake</h3><p>We obtain the basic information needed to understand the stage of the debt review matter.</p></div>
          <div className="process-step" data-step="02"><h3>Case classification</h3><p>We identify whether the matter appears to fit a clearance route, a withdrawal assessment or a more detailed review.</p></div>
          <div className="process-step" data-step="03"><h3>Focused document request</h3><p>We request the records relevant to the specific route rather than treating every matter the same.</p></div>
          <div className="process-step" data-step="04"><h3>Verification</h3><p>Balances, status information, paid-up evidence and court records where applicable are checked against the proposed route.</p></div>
          <div className="process-step" data-step="05"><h3>Process progression</h3><p>The appropriate compliant process can then be progressed based on the verified position.</p></div>
          <div className="process-step" data-step="06"><h3>Confirmation and follow-through</h3><p>We communicate the outcome and monitor remaining status or bureau hand-offs where they apply.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <span className="card-index">Within our control</span>
            <h3>Preparation and communication</h3>
            <p>Focused document requests, structured checks, case classification, milestone communication and follow-up.</p>
          </div>
          <div className="card">
            <span className="card-index">Outside our control</span>
            <h3>Third-party processing times</h3>
            <p>Credit providers, debt counsellors, courts and credit bureaus may each have their own procedures and turnaround times.</p>
          </div>
        </div>
        <div className="container hero-actions">
          <Link className="button" href="/eligibility">Request an assessment</Link>
        </div>
      </section>
    </main>
  );
}
