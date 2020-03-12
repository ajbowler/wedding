import React, { useEffect } from "react";
import PageContainer from "../core/PageContainer";
import "./Venue.css";
import Blazy from "blazy";

const Venue = () => {
  useEffect(() => {
    window.bLazy = new Blazy();
  });

  return (
    <PageContainer hasBackground>
      <div className="section venue">
        <div className="container">
          <div className="columns is-centered">
            <div className="column headline">
              <p className="venue-heading">VENUE</p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-narrow">
              <img
                alt="Bridge View Center"
                className="b-lazy"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                data-src="bridgeview.jpg"
              />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-narrow venue-details">
              <p>Bridge View Center</p>
              <p>102 Church St.</p>
              <p>Ottumwa, IA 52501</p>
              <a
                rel="noopener noreferrer"
                className="venue-map"
                href="https://goo.gl/maps/npsB69KWuZ2kqUDy9"
                target="_blank"
              >
                <p>
                  <i>View Map</i>
                </p>
              </a>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-half venue-details schedule">
              <p>
                <i>
                  The ceremony will begin at 6:00 pm. Following the ceremony
                  will be a reception with dinner and dancing.
                </i>
              </p>
              <p>
                <i>
                  Please contact the bride or groom if you have any dietary restrictions.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Venue;
