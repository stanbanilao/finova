import Assessment from "../../components/Assessment";

export const metadata = {
  title: "Eligibility Assessment",
  description: "Use Finova Associates' four-question screening tool to understand which debt review route may need to be investigated.",
};

export default function Eligibility() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Eligibility screening</span>
          <h1 className="page-title">Find your likely <span className="accent">starting point.</span></h1>
          <p className="lead">Answer four questions for an initial indication of which debt review route may need to be investigated next.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Assessment />
        </div>
      </section>

      <section className="section">
        <div className="container quote-panel">
          <span className="eyebrow">Screening only</span>
          <blockquote>An answer is not yet an outcome.</blockquote>
          <p>The checker does not determine legal eligibility, replace professional advice or guarantee a credit-bureau result. The route should only be confirmed after the relevant records are reviewed.</p>
        </div>
      </section>
    </main>
  );
}
