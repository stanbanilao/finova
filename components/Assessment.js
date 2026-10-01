"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const questions = [
  ["underReview", "Are you currently under debt review?"],
  ["courtOrder", "Was a debt restructuring court order granted?"],
  ["paidUp", "Are the debts included in debt review fully paid, except a home loan where applicable?"],
  ["canPay", "Has your financial position improved enough to meet your current obligations?"],
];

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    underReview: "",
    courtOrder: "",
    paidUp: "",
    canPay: "",
  });

  const current = questions[step];
  const answered = Object.values(answers).filter(Boolean).length;
  const done = answered === questions.length;

  const result = useMemo(() => {
    if (!done) return null;
    if (answers.paidUp === "yes") {
      return {
        title: "A clearance route may be worth assessing.",
        body: "Your next step is to verify balances, paid-up evidence and the records needed for a formal clearance process.",
      };
    }
    if (answers.courtOrder === "no" && answers.canPay === "yes") {
      return {
        title: "A withdrawal route may be worth assessing.",
        body: "The exact position depends on the stage of the debt review and the supporting affordability and case records.",
      };
    }
    return {
      title: "Your matter needs a fuller record review.",
      body: "A court order, unsettled obligations or an unclear case status can change the correct route. The record should be verified before any removal step is suggested.",
    };
  }, [answers, done]);

  function answer(value) {
    setAnswers((previous) => ({ ...previous, [current[0]]: value }));
    if (step < questions.length - 1) setStep((valueNow) => valueNow + 1);
  }

  return (
    <div className="assessment">
      <div>
        <div className="progress-row">
          <span>Assessment progress</span>
          <strong>{answered}/4</strong>
        </div>
        <div className="progress-track">
          <span style={{ width: `${(answered / 4) * 100}%` }} />
        </div>

        <div className="assessment-nav">
          {questions.map((question, index) => (
            <button
              key={question[0]}
              className={`assessment-tab ${index === step ? "active" : ""} ${answers[question[0]] ? "complete" : ""}`}
              onClick={() => setStep(index)}
              type="button"
            >
              <span>0{index + 1}</span>
              <span>{question[1]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="hero-card surface-3d assessment-card">
        <span className="eyebrow">Digital assessment</span>
        <h3>{current[1]}</h3>
        <p className="muted">Choose the answer that best describes your position. You can return to any question.</p>

        <div className="hero-actions">
          <button className="button" type="button" onClick={() => answer("yes")}>Yes</button>
          <button className="button secondary" type="button" onClick={() => answer("no")}>No</button>
        </div>

        {done && result && (
          <div className="result-box">
            <span className="result-label">Initial indication</span>
            <h4>{result.title}</h4>
            <p>{result.body}</p>
            <p className="notice">This screening is general information only. It does not determine legal eligibility or guarantee a bureau outcome.</p>
            <Link className="text-link" href="/contact">Continue with a case review -&gt;</Link>
          </div>
        )}
      </div>
    </div>
  );
}
