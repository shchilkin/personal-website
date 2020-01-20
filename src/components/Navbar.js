import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
        <span className='navbar-brand mb-0 h1'>CrazyRedKitten</span>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link to='/'>
              <a className='nav-item nav-link'>Home</a>
            </Link>
            <Link to='/projects'>
              <a className='nav-item nav-link'>Small Projets</a>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
