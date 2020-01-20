import React, { Fragment } from "react";
import Contacts from "./home/contacts/Contacts";
import About from "../About";
import Work from "./home/Work";

const Home = () => {
  return (
    <Fragment>
      <About />
      <Work />
      <Contacts />
    </Fragment>
  );
};

export default Home;
