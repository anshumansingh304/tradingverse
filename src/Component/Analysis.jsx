import React from "react";
import "./Analysis.css";

export default function Analysis() {
  return (
    <div className="container">
      <div>
        <button
          type="button"
          className="btn btn-outline-danger"
          style={{ fontSize: 20 }}
        >
          Daily Analysis & Youtube
        </button>
      </div>
      <br />
      <div className="flex">
        <div className="card">
          <div className="card-details">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/Byg0NSbdJD4"
              title="Live market sensex expiry 300 points book kiye wo bhi live"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <button className="card-button">Youtube</button>
        </div>
        <div className="card">
          <div className="card-details">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/yXsupY5hizk"
              title="Mastering the EUR/USD Forex Trade: M Pattern Strategy Explained @Octa_broker  @Exness"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <button className="card-button">Youtube</button>
        </div>
        <div className="card">
          <div className="card-details">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oFI5d4vafAU"
              title="How to cover 400 Points in a BankNifty Market Crash @LearningMarketsWithManish  @"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <button className="card-button">Youtube</button>
        </div>
        <div className="card">
          <div className="card-details">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-m9W1mz95rU"
              title=" "
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <button className="card-button">Youtube</button>
        </div>
      </div>
    </div>
  );
}
