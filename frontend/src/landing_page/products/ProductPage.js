import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

// import Footer from "../Footer";

function PricingPage() {
  return (
    <>
      

      {/* HERO */}
      <Hero />

      {/* PRODUCTS WRAPPER (Zerodha spacing + clean layout) */}
      <div style={{ padding: "70px 0", background: "#fff" }}>

        {/* KITE */}
        <LeftSection
          imageURL="media/images/kite.png"
          productName="Kite"
          productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />

        {/* CONSOLE */}
        <RightSection
          imageURL="media/images/console.png"
          productName="Console"
          productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore=""
        />

        {/* COIN */}
        <LeftSection
          imageURL="media/images/coin.png"
          productName="Coin"
          productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />

        {/* KITE CONNECT */}
        <RightSection
          imageURL="media/images/kiteconnect.png"
          productName="Kite Connect API"
          productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore=""
        />

        {/* VARSITY */}
        <LeftSection
          imageURL="media/images/varsity.png"
          productName="Varsity Mobile"
          productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          googlePlay=""
          appStore=""
        />

      </div>

      {/* INFO SECTION (Zerodha style minimal text) */}
      <div style={{ textAlign: "center", padding: "50px 20px" }}>
        <p style={{ fontSize: "18px", color: "#444" }}>
          Want to know more about our technology stack? Check out the Zerodha tech blog.
        </p>
      </div>

      {/* UNIVERSE SECTION */}
      <Universe />

    </>
  );
}

export default PricingPage;