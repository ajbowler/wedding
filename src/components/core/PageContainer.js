import React from "react";
import Header from "../header/Header";

const PageContainer = props => (
  <React.Fragment>
    <Header />
    {props.children}
  </React.Fragment>
);

export default PageContainer;
