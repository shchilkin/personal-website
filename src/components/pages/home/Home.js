import React, { Fragment } from "react";
import Contacts from "./contacts/Contacts";
import About from "../../About";
import Work from "./Work";
import Plans from "./Plans";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Work />
      <Plans />
      <Contacts />
    </Fragment>
  );
};

export default Home;
