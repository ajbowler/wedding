import Blazy from "blazy";
import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  useEffect(() => {
    new Blazy();
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
    </Router>
  );
};

export default App;
