import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* TEXT */}
        <div className="col-12 col-md-6 p-4 mt-4 mt-md-0">
          <h1 style={{ fontSize: "32px" }}>{productName}</h1>

          <p style={{ color: "#444", lineHeight: "1.6" }}>
            {productDesription}
          </p>

          <div className="mt-3">
            <a href={tryDemo} style={{ marginRight: "40px" }}>
              Try Demo
            </a>
            <a href={learnMore}>Learn More</a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>

            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;