import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Accomodations from "./components/accomodations/Accomodations";
import Homepage from "./components/homepage/Homepage";
import Registry from "./components/registry/Registry";
import Venue from "./components/venue/Venue";
import { ACCOMODATIONS, REGISTRY, VENUE, COVID } from "./routes";
import Covid19 from "./components/covid/Covid";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={Homepage} />
    <Route exact path={VENUE} component={Venue} />
    <Route exact path={ACCOMODATIONS} component={Accomodations} />
    <Route exact path={REGISTRY} component={Registry} />
    <Route exact path={COVID} component={Covid19} />
  </Router>
);

export default App;
