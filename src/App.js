import Blazy from "blazy";
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import couple from "./couple.JPG";

const App = () => {
  useEffect(() => {
    new Blazy();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="section homepage" style={{ backgroundImage: couple }}>
        <div className="container">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
