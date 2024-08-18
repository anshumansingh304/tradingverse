import React, { useEffect } from "react";

export default function Ticker() {
  useEffect(() => {
    // Create and insert the script tag dynamically
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { description: "Nifty Thursday XP", proName: "NSE:NIFTY" },
        { description: "Sensex Friday XP", proName: "BSE:SENSEX" },
        { description: "Bank nifty Wednesday XP", proName: "NSE:BANKNIFTY" },
        { description: "Bankex Monday XP", proName: "BSE:BANK" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    // Append the script to the container
    const container = document.querySelector(".tradingview-widget-container");
    if (container) {
      container.appendChild(script);
    }

    // Cleanup function to remove the script tag when the component unmounts
    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      {/* TradingView Widget BEGIN */}
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}
