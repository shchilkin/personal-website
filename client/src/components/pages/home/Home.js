import React, { Fragment } from "react";
import Contacts from "./contacts/Contacts";
import About from "./About";
import StudiesAndProjects from "./StudiesAndProjects";
import Footer from "../../Footer";

const Home = () => {
  return (
    <Fragment>
      <About />
      <StudiesAndProjects />
      <Contacts />
        <Footer/>
    </Fragment>
  );
};

export default Home;
