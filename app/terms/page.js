export const metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <main>
      <section className="hero">
        <div className="container legal">
          <span className="eyebrow">Terms</span>
          <h1 className="page-title">Website terms of use.</h1>
          <p className="lead">These terms describe the role of this website and the limits of general information provided through it.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container legal">
          <h2>General information</h2>
          <p>The website explains Finova Associates’ services and provides general screening information. Website content is not a guarantee of eligibility, outcome, turnaround time or credit-bureau result.</p>

          <h2>No automatic engagement</h2>
          <p>Submitting an assessment or enquiry does not by itself create a professional engagement, legal representation or a guaranteed service outcome. Any service scope, fees and required authorisations should be confirmed separately.</p>

          <h2>Accuracy of information</h2>
          <p>Consumers are responsible for providing accurate and complete information. An assessment can change when additional records, balances, court documents or status information become available.</p>

          <h2>Third parties</h2>
          <p>Debt review matters may involve parties outside Finova’s control. Their decisions, processing times and systems can affect the progress and final outcome of a matter.</p>

          <h2>Website availability</h2>
          <p>Finova may update, suspend or change website features as the service evolves. Reasonable care is taken with content, but technical availability cannot be guaranteed at all times.</p>
        </div>
      </section>
    </main>
  );
}
