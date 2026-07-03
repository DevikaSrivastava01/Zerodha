import React from "react";

function Team() {
  return (
    <div className="container">

      {/* PEOPLE SECTION */}
      <div className="row mt-5 pt-5 border-top">
        <div className="col text-center">

          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: "400",
              color: "#424242"
            }}
          >
            People
          </h1>

        </div>
      </div>

      {/* CONTENT */}
      <div
        className="row p-3 text-muted align-items-center mt-4"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >

        {/* IMAGE */}
        <div className="col-12 col-md-6 p-3 text-center">

          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              borderRadius: "50%",
              width: "220px",
              height: "220px",
              objectFit: "cover"
            }}
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder, CEO</h6>

        </div>

        {/* TEXT */}
        <div className="col-12 col-md-6 p-3">

          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          {/* FIXED LINKS (NO WARNING) */}
          <p>
            Connect on{" "}
            <button style={linkStyle}>Homepage</button> /{" "}
            <button style={linkStyle}>TradingQnA</button> /{" "}
            <button style={linkStyle}>Twitter</button>
          </p>

        </div>

      </div>

    </div>
  );
}

const linkStyle = {
  border: "none",
  background: "none",
  color: "#387ed1",
  cursor: "pointer",
  padding: 0,
  fontSize: "1rem"
};

export default Team;