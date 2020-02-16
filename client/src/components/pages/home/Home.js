import React, { Fragment } from "react";
import Contacts from "./contacts/Contacts";
import About from "../../About";
import StudiesAndProjects from "./StudiesAndProjects";

const Home = () => {
  return (
    <Fragment>
      <About />
      <StudiesAndProjects />
      <Contacts />
    </Fragment>
  );
};

export default Home;
