import Blazy from "blazy";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Accomodations from "./components/accomodations/Accomodations";
import Homepage from "./components/homepage/Homepage";
import Registry from "./components/registry/Registry";
import Rsvp from "./components/rsvp/Rsvp";
import Venue from "./components/venue/Venue";
import { ACCOMODATIONS, REGISTRY, RSVP, VENUE } from "./routes";

const App = () => {
  useEffect(() => {
    new Blazy();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Homepage} />
      <Route exact path={RSVP} component={Rsvp} />
      <Route exact path={VENUE} component={Venue} />
      <Route exact path={ACCOMODATIONS} component={Accomodations} />
      <Route exact path={REGISTRY} component={Registry} />
    </Router>
  );
};

export default App;
