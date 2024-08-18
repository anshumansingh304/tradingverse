import React from "react";
import "./Indianmarket.css"; // Make sure you have the CSS file in place

export default function IndianMarket() {
  return (
    <>
      <div className="container">
        <div className="market-container">
          <div className="left-section">
            <h1>Indian markets at your fingertips.</h1>
            <p>
              Long-term or short-term, high risk or low risk. Be the kind of
              investor you want to be.
            </p>
            <div className="options">
              <div className="option-item">
                <span>Stocks & Intraday</span>
              </div>
              <div className="option-item">
                <span>Crypto & Indices</span>
              </div>
              <div className="option-item">
                <span>Forex & Comex</span>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img
              src="https://4kwallpapers.com/images/walls/thumbs_3t/13849.png"
              alt="Mobile Screen"
              className="mobile-screen"
            />
          </div>
        </div>
      </div>
    </>
  );
}
