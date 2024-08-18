import React from "react";
import "./Trade.css";
import GaugeChart from "react-gauge-chart";

export default function Trade() {
  return (
    <div className="container">
      <div className="left-section" style={{ marginLeft: 45 }}>
        <h1>
          Trade, <br />
          when you are calm.
        </h1>
        <p>Apply for a Mentorship, Trade only when are calm</p>
      
      </div>
      <div className="right-section">
        <div className="credit-score">
          <p style={{ fontSize: 24 }}>
            Your Calmness score should be <span>Excellent!</span>
          </p>

          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={20}
            percent={0.8} // 80% (for the value of 80 out of 100)
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
}
