export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <main>
      <section className="hero">
        <div className="container legal">
          <span className="eyebrow">Privacy</span>
          <h1 className="page-title">Privacy policy.</h1>
          <p className="lead">This page explains the privacy principles Finova Associates applies to information submitted through its digital services.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container legal">
          <h2>Information we may collect</h2>
          <p>When enquiry or case-intake functionality is connected, information may include contact details, identity and case information, debt review status, account or creditor information, documents supplied by the consumer and technical website information.</p>

          <h2>Why information is used</h2>
          <p>Information is used to respond to enquiries, assess a requested service, progress an authorised matter, communicate case updates, maintain appropriate records and meet legal or compliance obligations.</p>

          <h2>Sharing</h2>
          <p>Information is not intended to be sold. Where a matter requires it and the consumer has authorised the process, relevant information may need to be shared with parties involved in the lawful handling of the matter, such as professional advisers, debt review participants, service providers or credit bureaus.</p>

          <h2>Security and retention</h2>
          <p>Reasonable safeguards should be used to protect personal information. Records should be retained only for as long as required for the service, legal obligations, dispute handling or legitimate business record-keeping.</p>

          <h2>Your rights</h2>
          <p>South African data-protection rights may include requesting access to personal information, asking for inaccurate information to be corrected and raising an objection or complaint where permitted by law.</p>

          <p className="notice">This website policy should be finalised with the company’s confirmed contact details, responsible party information and actual data-processing systems before a live enquiry form begins collecting personal information.</p>
        </div>
      </section>
    </main>
  );
}
