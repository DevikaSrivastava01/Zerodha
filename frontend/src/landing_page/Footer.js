import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#fafafa" }}>

      <div className="container border-top pt-5 mt-5">

        {/* TOP SECTION */}
        <div className="row gy-4">

          {/* LEFT - LOGO + BASIC INFO */}
          <div className="col-12 col-md-3">

            <img
              src="/media/images/logo.svg"
              alt="logo"
              style={{ width: "130px" }}
            />

            <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
              © 2010 - 2026, Zerodha Broking Ltd.
            </p>

            <p className="text-muted" style={{ fontSize: "12px" }}>
              All rights reserved.
            </p>

            <div className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              Online stock trading platform for India.
            </div>

          </div>

          {/* ACCOUNT */}
          <div className="col-6 col-md-3 text-muted" style={{ fontSize: "13px" }}>

            <h6 className="text-dark">Account</h6>

            <p className="mb-1">Open demat account</p>
            <p className="mb-1">Minor demat account</p>
            <p className="mb-1">NRI demat account</p>
            <p className="mb-1">HUF demat account</p>
            <p className="mb-1">Commodity</p>
            <p className="mb-1">Dematerialisation</p>
            <p className="mb-1">Fund transfer</p>
            <p className="mb-1">MTF</p>

          </div>

          {/* SUPPORT */}
          <div className="col-6 col-md-3 text-muted" style={{ fontSize: "13px" }}>

            <h6 className="text-dark">Support</h6>

            <p className="mb-1">Contact us</p>
            <p className="mb-1">Support portal</p>
            <p className="mb-1">How to file a complaint?</p>
            <p className="mb-1">Status of your complaints</p>
            <p className="mb-1">Bulletin</p>
            <p className="mb-1">Circular</p>
            <p className="mb-1">Z-Connect blog</p>
            <p className="mb-1">Downloads</p>

          </div>

          {/* COMPANY */}
          <div className="col-6 col-md-3 text-muted" style={{ fontSize: "13px" }}>

            <h6 className="text-dark">Company</h6>

            <p className="mb-1">About</p>
            <p className="mb-1">Philosophy</p>
            <p className="mb-1">Press & media</p>
            <p className="mb-1">Careers</p>
            <p className="mb-1">Zerodha Cares (CSR)</p>
            <p className="mb-1">Zerodha.tech</p>
            <p className="mb-1">Open source</p>
            <p className="mb-1">Referral program</p>

          </div>

        </div>

        {/* SECOND ROW */}
        <div className="row mt-4 text-muted" style={{ fontSize: "12px" }}>

          <div className="col">Quick links</div>
          <div className="col">Upcoming IPOs</div>
          <div className="col">Brokerage charges</div>
          <div className="col">Market holidays</div>
          <div className="col">Economic calendar</div>
          <div className="col">Calculators</div>
          <div className="col">Markets</div>
          <div className="col">Sectors</div>
          <div className="col">Gift Nifty</div>

        </div>

        {/* DISCLAIMER BLOCK (FULL YOUR CONTENT) */}
        <div className="mt-5 text-muted" style={{ fontSize: "11px", lineHeight: "1.6" }}>

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.:
            INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
            SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking
            please write to complaints@zerodha.com, for DP related to dp@zerodha.com...
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
            E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read all the related
            documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as margins...
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account..."
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;