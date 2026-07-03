import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container text-center">

      {/* IMAGE */}
      <div className="mb-5">
        <img
          src="/media/images/homeHero.png"
          alt="Hero banner"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "auto",
            margin: "0 auto",
            display: "block"
          }}
        />
      </div>

      {/* TEXT */}
      <div style={{ maxWidth: "650px", margin: "0 auto" }}>

        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: "400",
            color: "#2a2a2a",
            marginBottom: "15px"
          }}
        >
          Invest in everything
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            color: "#666",
            lineHeight: "1.7"
          }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/signup")}
          className="btn btn-primary"
          style={{
            marginTop: "25px",
            padding: "10px 26px",
            fontSize: "15px",
            borderRadius: "4px"
          }}
        >
          Signup Now
        </button>

      </div>

    </div>
  );
}

export default Hero;