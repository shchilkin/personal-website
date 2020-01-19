import React, { Fragment } from "react";
import Logo from "./logos/logo.svg";

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-light bg-light'>
        <span className='navbar-brand mb-0 h1'>
          <img
            src={Logo}
            width='30'
            height='30'
            class='d-inline-block align-top'
            alt=''
          />
          CrazyRedKitten
        </span>
      </nav>
    </Fragment>
  );
};

export default Navbar;
