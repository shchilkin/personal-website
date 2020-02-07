import React, { Fragment } from "react";
import Contacts from "./contacts/Contacts";
import About from "../../About";
import StudiesAndProjects from "./StudiesAndProjects";
import Plans from "./Plans";

const Home = () => {
  return (
    <Fragment>
      <About />
      <StudiesAndProjects />
      <Plans />
      <Contacts />
    </Fragment>
  );
};

export default Home;
