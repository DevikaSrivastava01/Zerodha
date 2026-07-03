import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">

        {/* LEFT SIDE */}
        <div className="col-8 p-4">

          <button
            style={{
              border: "none",
              background: "transparent",
              color: "#387ed1",
              fontSize: "18px",
              fontWeight: "500",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            Brokerage calculator
          </button>

          <ul
            className="text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2.2",
              fontSize: "14px",
              color: "#666",
              paddingLeft: "18px",
            }}
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-4 p-4">

          <button
            style={{
              border: "none",
              background: "transparent",
              color: "#387ed1",
              fontSize: "18px",
              fontWeight: "500",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            List of charges
          </button>

          <p
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: "1.8",
            }}
          >
            View complete breakdown of brokerage and statutory charges across all segments.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Brokerage;