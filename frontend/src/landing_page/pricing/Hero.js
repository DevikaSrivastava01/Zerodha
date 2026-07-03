import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 style={{ fontSize: "48px", fontWeight: "500", color: "#424242" }}>
          Pricing
        </h1>

        <h3
          className="text-muted mt-3"
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#666",
            lineHeight: "1.7",
          }}
        >
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="pricing equity"
            style={{ width: "72%", marginBottom: "35px" }}
          />
          <h1 className="fs-3" style={{ color: "#424242", fontWeight: "500" }}>
            Free equity delivery
          </h1>
          <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="intraday trades"
            style={{ width: "72%", marginBottom: "35px" }}
          />
          <h1 className="fs-3" style={{ color: "#424242", fontWeight: "500" }}>
            Intraday and F&O trades
          </h1>
          <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="mutual funds"
            style={{ width: "72%", marginBottom: "35px" }}
          />
          <h1 className="fs-3" style={{ color: "#424242", fontWeight: "500" }}>
            Free direct MF
          </h1>
          <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;