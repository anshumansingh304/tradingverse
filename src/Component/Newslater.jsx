import React, { useState } from "react";
import "./Newslater.css";


export default function Newslater() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert(`Thank you for subscribing with phone number: ${phoneNumber}`);
  };

  return (
    <div className="container">
      <div className="containerNews">
        <h1>Join the Clan</h1>
        <p>
          Welcome to the ultimate trading community. Join our clan and receive
          the latest trading insights, strategies, and updates directly to your
          inbox. Whether you're into stocks, forex, crypto, or commodities,
          we've got you covered.
        </p>
        <form id="waitlist-form" onSubmit={handleSubmit}>
          <input
            type="tel"
            id="phonel"
            placeholder="Enter your phone number"
            required
            className="phone-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
