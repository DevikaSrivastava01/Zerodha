import React from "react";
import "./Apps.css";

const appsData = [
  {
    name: "Kite",
    desc: "Trading platform for stocks, derivatives and more.",
    color: "#00b386",
  },
  {
    name: "Console",
    desc: "Reports, portfolio tracking and account management.",
    color: "#5367ff",
  },
  {
    name: "Coin",
    desc: "Mutual fund investment platform.",
    color: "#ff5722",
  },
  {
    name: "Varsity",
    desc: "Stock market learning platform.",
    color: "#9c27b0",
  },
];

const Apps = () => {
  return (
    <div className="apps-container">
      <h1 className="title">Zerodha Apps</h1>
      <p className="subtitle">
        Explore all trading and investment tools in one place
      </p>

      <div className="apps-grid">
        {appsData.map((app, index) => (
          <div key={index} className="app-card">
            <div
              className="app-icon"
              style={{ backgroundColor: app.color }}
            ></div>

            <h2>{app.name}</h2>
            <p>{app.desc}</p>

            <button>Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;