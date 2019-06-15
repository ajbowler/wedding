import React from "react";
import "./Header.css";

const Header = () => (
  <header className="nav-links-container">
    <div className="columns is-centered nav-links">
      <div className="column is-narrow">
        <a href="#">RSVP</a>
      </div>
      <div className="column is-narrow">
        <a href="#">VENUE</a>
      </div>
      <div className="column is-narrow ">
        <a href="#">ACCOMODATIONS</a>
      </div>
      <div className="column is-narrow">
        <a href="#">REGISTRY</a>
      </div>
    </div>
  </header>
);

export default Header;
