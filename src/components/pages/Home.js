import React, { Fragment } from "react";
import Contacts from "./home/contacts/Contacts";
import About from "../About";
import Work from "./home/Work";
import Plans from "./home/Plans";

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
