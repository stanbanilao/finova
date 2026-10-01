export const metadata = { title: "POPIA" };

export default function Popia() {
  return (
    <main>
      <section className="hero">
        <div className="container legal">
          <span className="eyebrow">POPIA</span>
          <h1 className="page-title">Personal information should be handled <span className="accent">with purpose.</span></h1>
          <p className="lead">Finova Associates is designed to treat personal information as part of the service responsibility, not as a marketing asset.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container legal">
          <h2>Purpose limitation</h2>
          <p>Information collected for an enquiry or debt review matter should be used for a clear service-related purpose and only to the extent reasonably necessary for that purpose.</p>

          <h2>Minimum necessary information</h2>
          <p>Case handling should request the information and documents that are relevant to the route being assessed or progressed, rather than collecting information without a defined need.</p>

          <h2>Access and correction</h2>
          <p>A person may request access to personal information held about them and may ask for inaccurate or outdated information to be corrected, subject to applicable law and record-keeping requirements.</p>

          <h2>Operators and service providers</h2>
          <p>Where technology providers or other operators process information on behalf of Finova, appropriate confidentiality, security and processing controls should be applied.</p>

          <h2>Complaints</h2>
          <p>POPIA-related contact details and the appropriate internal contact person should be published here before live personal-information collection is enabled.</p>
        </div>
      </section>
    </main>
  );
}
