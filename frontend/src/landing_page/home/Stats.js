import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container py-5">

      <div className="row align-items-center gy-5">

        {/* LEFT SIDE */}
        <div className="col-12 col-md-6 px-4">

          <h1 className="fs-2 mb-4 fw-normal">
            Trust with confidence
          </h1>

          <div className="mb-4">
            <h2 className="fs-5 fw-normal">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-normal">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-normal">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-normal">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we help you do better with your money.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-6 text-center px-4">

          <img
            src="/media/images/ecosystem.png"
            className="img-fluid mb-4"
            style={{ maxWidth: "520px" }}
            alt="ecosystem"
          />

          {/* LINKS (FIXED - no ESLint warning) */}
          <div className="d-flex justify-content-center gap-4">

            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500"
              }}
            >
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </Link>

            <Link
              to="/demo"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontWeight: "500"
              }}
            >
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;