import React, { useEffect } from "react";
import PageContainer from "../core/PageContainer";
import "./Covid.css";
import Blazy from "blazy";

const Covid19 = () => {
  useEffect(() => {
    window.bLazy = new Blazy();
  });

  return (
    <PageContainer hasBackground>
      <div className="section covid">
        <div className="container">
          <div className="columns is-centered">
            <div className="column headline">
              <p className="covid-heading">Regarding COVID-19</p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-narrow covid-details">
              <p>
                We will be providing dated updates on this page regarding any impact the coronavirus has on our wedding.
              </p>
              <p>
                Regardless of the situation, please use your best judgment. If you are sick or feeling any symptoms, please do not risk it.
              </p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-narrow covid-details">
              <p>
                If you would like to reach out to either of us directly for any questions or concerns you can reach us at 641-814-2466 (Katie) or 641-814-6441 (Andrew).
              </p>
              <p>
                We hope to be able to have a day surrounded by as many of our friends and family as possible in a safe and healthy environment whether that date be June 20th or a later date.
              </p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column covid-details">
              <p>
                <i>
                  <b>3/22/20:</b> As of now we are still going forward with our wedding to be held on June 20th, 2020. In the coming weeks we will be monitoring the state of the country and government regulations to determine if this date will remain or be postponed until later in the year. Should we decide to postpone, we will update as many of you directly as possible and will additionally add updates to this site for your reference.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Covid19;
