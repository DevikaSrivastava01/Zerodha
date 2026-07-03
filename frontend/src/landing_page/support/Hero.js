import React from "react";

function Hero() {
  const handleClick = (e) => e.preventDefault();

  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/" onClick={handleClick}>
          Track Tickets
        </a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input placeholder="Eg. how do I activate F&O" />
          <br />

          <a href="/" onClick={handleClick}>
            Track account opening
          </a>
          <a href="/" onClick={handleClick}>
            Track segment activation
          </a>
          <a href="/" onClick={handleClick}>
            Intraday margins
          </a>
          <a href="/" onClick={handleClick}>
            Kite user manual
          </a>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>

          <ol>
            <li>
              <a href="/" onClick={handleClick}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="/" onClick={handleClick}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;