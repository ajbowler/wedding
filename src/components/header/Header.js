import React from "react";
import { Link } from "react-router-dom";
import { ACCOMODATIONS, REGISTRY, RSVP, VENUE } from "../../routes";
import "./Header.css";

const Header = () => (
  <header className="nav-links-container">
    <div className="columns is-centered nav-links">
      <div className="column is-narrow">
        <Link to={RSVP}>RSVP</Link>
      </div>
      <div className="column is-narrow">
        <Link to={VENUE}>VENUE</Link>
      </div>
      <div className="column is-narrow ">
        <Link to={ACCOMODATIONS}>ACCOMODATIONS</Link>
      </div>
      <div className="column is-narrow">
        <Link to={REGISTRY}>REGISTRY</Link>
      </div>
    </div>
  </header>
);

export default Header;
