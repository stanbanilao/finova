import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1 className="page-title">This page is not part of the current <span className="accent">Finova journey.</span></h1>
          <p className="lead">Return home or start the eligibility assessment.</p>
          <div className="hero-actions">
            <Link className="button" href="/">Go home</Link>
            <Link className="button secondary" href="/eligibility">Start assessment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
