import React from "react";

function Universe() {
  const partners = [
    {
      logo: "media/images/zerodhaFundhouse.png",
      text: "Our asset management venture that is creating simple and transparent index funds.",
    },
    {
      logo: "media/images/sensibullLogo.svg",
      text: "Options trading platform that lets you create and analyze option strategies.",
    },
    {
      logo: "media/images/goldenpiLogo.png",
      text: "Investment research platform for discovering quality businesses.",
    },
    {
      logo: "media/images/streakLogo.png",
      text: "Systematic trading platform that allows you to create and backtest strategies.",
    },
    {
      logo: "media/images/smallcaseLogo.png",
      text: "Thematic investment platform for diversified stock portfolios.",
    },
    {
      logo: "media/images/dittoLogo.png",
      text: "Personalized insurance advice and recommendations.",
    },
  ];

  return (
    <div className="container text-center" style={{ marginTop: "120px" }}>
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "500",
          color: "#424242",
        }}
      >
        The Zerodha Universe
      </h1>

      <p
        className="text-muted mt-3"
        style={{
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>

      <div className="row justify-content-center mt-5">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-12"
            style={{ marginBottom: "70px" }}
          >
            <img
              src={partner.logo}
              alt="Partner Logo"
              style={{
                width: "140px",
                height: "45px",
                objectFit: "contain",
              }}
            />

            <p
              className="text-muted mx-auto mt-4"
              style={{
                width: "70%",
                fontSize: "0.85rem",
                lineHeight: "1.7",
              }}
            >
              {partner.text}
            </p>
          </div>
        ))}
      </div>

      <button
        className="btn btn-primary"
        style={{
          padding: "12px 40px",
          fontSize: "1.1rem",
          marginTop: "10px",
        }}
      >
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
