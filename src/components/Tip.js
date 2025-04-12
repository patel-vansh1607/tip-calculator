import React, { useState } from "react";
import "../styles/Tip.css";

const TipCalculator = () => {
  const [purchase, setPurchase] = useState("");
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTip = () => {
    const amount = parseFloat(purchase);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    let calculatedTip = 0;

    if (amount > 1000) {
      calculatedTip = Math.floor((amount - 1000) / 1000) * 50;
    }

    const calculatedTotal = amount + calculatedTip;
    setTip(calculatedTip);
    setTotal(calculatedTotal);
  };

  return (
    <div className="tip-container">
      <h2>Tip Calculator 💰</h2>
      <input
        type="number"
        placeholder="Enter purchase amount (Ksh)"
        value={purchase}
        onChange={(e) => setPurchase(e.target.value)}
      />
      <button onClick={calculateTip}>Calculate</button>

      <div className="results">
        <p>Tip: <strong>{tip} Ksh</strong></p>
        <p>Total (with Tip): <strong>{total} Ksh</strong></p>
      </div>
    </div>
  );
};

export default TipCalculator;
