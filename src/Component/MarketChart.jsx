import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Ensure the widget container is empty before appending the script
    if (container.current && container.current.children.length === 0) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;

      // Instead of using innerHTML, use textContent
      script.textContent = JSON.stringify({
        width: "100%",
        height: "610",
        symbol: "BITSTAMP:BTCUSD",
        interval: "5",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        backgroundColor: "rgba(0, 0, 0, 1)",
        gridColor: "rgba(0, 0, 0, 0.06)",
        allow_symbol_change: true,
        save_image: false,
        calendar: false,
        details: true,
        hide_volume: true,
        support_host: "https://www.tradingverse.in",
      });

      container.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <h4>Market summary</h4>{" "}
      <div className="tradingview-widget-container" ref={container}>
        {" "}
      </div>
    </>
  );
}

export default memo(TradingViewWidget);
