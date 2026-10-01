export const metadata = {
  title: "FAQ",
  description: "Common questions about debt review flag removal, clearance, withdrawal assessment and credit-bureau updates.",
};

const faqs = [
  ["Can a debt review flag be removed instantly?", "No. The correct route depends on the verified legal and financial position. A status cannot responsibly be promised as an instant deletion."],
  ["What if I have paid all the debts included in debt review?", "A formal clearance route may be available if the required obligations are settled and the relevant statutory conditions are met. The balances and supporting proof still need to be verified."],
  ["What if my financial position improved?", "An improved financial position can be relevant in some withdrawal scenarios, but the debt review stage, court position and supporting records still matter."],
  ["What if a court order already exists?", "An existing restructuring order changes the case. The order and current payment position should be reviewed before any next step is proposed."],
  ["Will my credit profile update immediately?", "No immediate update should be assumed. The relevant parties and credit bureaus may have their own processing timelines after a valid clearance or other status process is completed."],
  ["Can Finova guarantee removal?", "No. Finova can assess the record, help organise the appropriate route and follow the process through. The final outcome depends on the facts and the parties involved."],
  ["What documents might be needed?", "Common records can include identification, debt review information, debt counsellor details, creditor/account information, paid-up letters, court documents where applicable and affordability information where relevant."],
  ["Does the online checker make a legal decision?", "No. It is a screening tool that helps identify a likely starting point. A route is only confirmed after the relevant documents are reviewed."],
];

export default function FAQ() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Frequently asked questions</span>
          <h1 className="page-title">Clear answers <span className="accent">before you start.</span></h1>
          <p className="lead">The most common questions are usually about timing, eligibility and what “removal” actually means.</p>
        </div>
      </section>
      <section className="section alt">
        <div className="container faq">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
