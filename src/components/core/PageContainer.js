import React from "react";
import Header from "../header/Header";
import "./PageContainer.css";

const PageContainer = props => (
  <div className={props.hasBackground ? "container-background" : ""}>
    <Header />
    {props.children}
  </div>
);

export default PageContainer;
