import { useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount]             = useState(0);
  const [step, setStep]               = useState(1);
  const [totalClicks, setTotalClicks] = useState(0);

  function increment() {
    setCount(count + step);
    setTotalClicks(totalClicks + 1);
  }

  function decrement() {
    setCount(count - step);
    setTotalClicks(totalClicks + 1);
  }

  function resetCount() {
    setCount(0);
    setTotalClicks(0);
  }

  function colorClass() {
    if (count > 0) return "positive";
    if (count < 0) return "negative";
    return "zero";
  }

  return (
    <div className="counter-wrap">

      <h1 className="app-heading">Counter App</h1>

      <Display count={count} colorClass={colorClass()} />

      <div className="btn-row">
        <button className="btn-main" onClick={decrement} aria-label="Decrement">−</button>
        <button className="btn-reset" onClick={resetCount} aria-label="Reset">↺</button>
        <button className="btn-main" onClick={increment} aria-label="Increment">+</button>
      </div>

      <StepSelector step={step} setStep={setStep} />

      <div className="stats-row">
        <StatCard value={totalClicks} label="total clicks" />
      </div>

    </div>
  );
}

// Shows the big number
function Display({ count, colorClass }) {
  return (
    <div className="counter-display">
      <div className={`count-number ${colorClass}`}>
        {count}
      </div>
      <div className="count-label">current count</div>
    </div>
  );
}

// Step selector buttons (1 / 5 / 10)
function StepSelector({ step, setStep }) {
  return (
    <div className="step-row">
      <span className="step-label">step</span>
      <button className={`step-btn ${step === 1  ? "active" : ""}`} onClick={() => setStep(1)}>1</button>
      <button className={`step-btn ${step === 5  ? "active" : ""}`} onClick={() => setStep(5)}>5</button>
      <button className={`step-btn ${step === 10 ? "active" : ""}`} onClick={() => setStep(10)}>10</button>
    </div>
  );
}

// A single stat card
function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-val">{value}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}