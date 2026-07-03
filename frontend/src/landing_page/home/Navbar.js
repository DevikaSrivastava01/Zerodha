import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        height: "64px",
        borderBottom: "1px solid #eee",
        background: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        {/* LOGO */}
        <Link to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha logo"
            style={{ height: "18px" }}
          />
        </Link>

        {/* MENU */}
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Link style={linkStyle} to="/signup">Signup</Link>
          <Link style={linkStyle} to="/about">About</Link>
          <Link style={linkStyle} to="/product">Product</Link>
          <Link style={linkStyle} to="/pricing">Pricing</Link>
          <Link style={linkStyle} to="/support">Support</Link>

          <i className="fa-solid fa-bars" style={{ cursor: "pointer" }}></i>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontSize: "14px",
  color: "#666",
  fontWeight: "500",
};

export default Navbar;