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
              <span style={{color: 'crimson'}}><i>NEW NEW DATE </i></span><i>June 25, 2022</i>
            </p>
            <p className="wedding-date">
              Ottumwa, Iowa
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
);

export default Homepage;
