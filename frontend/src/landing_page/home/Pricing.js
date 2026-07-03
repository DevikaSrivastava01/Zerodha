import React from "react";

function Pricing() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-12 col-lg-4 mb-4">

          <h1 style={{ fontWeight: "400", fontSize: "2rem" }}>
            Unbeatable pricing
          </h1>

          <p style={{ color: "#666", lineHeight: "1.7", marginTop: "15px" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <button
            style={{
              border: "none",
              background: "none",
              color: "#387ed1",
              padding: 0,
              fontWeight: "500",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            See Pricing <i className="fa fa-long-arrow-right"></i>
          </button>

        </div>

        <div className="col-lg-1 d-none d-lg-block"></div>

        {/* RIGHT SIDE - 3 CARDS */}
        <div className="col-12 col-lg-7">

          <div className="row g-0 border rounded text-center">

            {/* CARD 1 */}
            <div className="col-12 col-md-4 p-4 border-end">

              <img
                src="/media/images/pricingMF.svg"
                alt="mutual funds"
                style={{ width: "70px", marginBottom: "15px" }}
              />

              {/* NO NUMBER */}
              <p style={{ fontSize: "16px", fontWeight: "500", margin: "10px 0" }}>
                Free
              </p>

              <p style={{ color: "#666", fontSize: "14px" }}>
                Free equity delivery & mutual funds
              </p>

            </div>

            {/* CARD 2 */}
            <div className="col-12 col-md-4 p-4 border-end">

              <img
                src="/media/images/pricingMF.svg"
                alt="equity"
                style={{ width: "70px", marginBottom: "15px" }}
              />

              <p style={{ fontSize: "16px", fontWeight: "500", margin: "10px 0" }}>
                Free
              </p>

              <p style={{ color: "#666", fontSize: "14px" }}>
                Free equity delivery trading
              </p>

            </div>

            {/* CARD 3 */}
            <div className="col-12 col-md-4 p-4">

              <img
                src="/media/images/intradayTrades.svg"
                alt="intraday trades"
                style={{ width: "70px", marginBottom: "15px" }}
              />

              <p style={{ fontSize: "16px", fontWeight: "500", margin: "10px 0" }}>
                Pay per trade
              </p>

              <p style={{ color: "#666", fontSize: "14px" }}>
                Intraday & F&O trades
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Pricing;