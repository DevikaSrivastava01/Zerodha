import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* TEXT */}
        <div className="col-12 col-md-6 p-4">
          <h1 style={{ fontSize: "32px" }}>{productName}</h1>

          <p style={{ color: "#444", lineHeight: "1.6" }}>
            {productDesription}
          </p>

          <a href={learnMore}>Learn More</a>
        </div>

        {/* IMAGE */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
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

      </div>
    </div>
  );
}

export default RightSection;