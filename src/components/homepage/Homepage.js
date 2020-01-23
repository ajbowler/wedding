import React from "react";
import couple from "./couple.JPG";
import PageContainer from "../core/PageContainer";
import "./Homepage.css";

const Homepage = () => (
  <PageContainer>
    <div className="section homepage" style={{ backgroundImage: couple }}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-narrow headline name-headline">
            <div className="names">
              <p>Katie Brems & Andrew Bowler</p>
            </div>
            <p className="wedding-date">
              <i>June 20, 2020 &mdash; Ottumwa, Iowa</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
);

export default Homepage;
