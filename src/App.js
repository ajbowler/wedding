import Blazy from "blazy";
import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    new Blazy();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow">
            <img
              alt="Bowler? I barely know her!"
              title="Bowler? I barely know her!"
              className="b-lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src="couple.JPG"
            />
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-narrow headline">
            <div className="names">
              <p>Andrew Bowler & Katie Brems</p>
            </div>
            <p className="wedding-date">
              <i>June 20, 2020 &mdash; Ottumwa, Iowa</i>
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-narrow nav-links">
            <a href="#">RSVP</a>
            <a href="#">VENUE</a>
            <a href="#">ACCOMODATIONS</a>
            <a href="#">REGISTRY</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
