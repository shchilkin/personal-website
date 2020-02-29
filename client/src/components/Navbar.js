import React, {Fragment, useContext, useState} from "react";
import { Link } from "react-router-dom";
import Cat from "../icons/CatLogoV9.svg";
import CatTongue from "../icons/CatTongue.svg";
import '../components/Layout/Navbar/navbar-item.css';
import ThemeContext from '../contexts/theme/ThemeContext';
import AuthContext from '../contexts/auth/AuthContext';
import Moon from '../icons/Moon.svg';
import Sun from '../icons/Sun.svg';

const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const themeContext =  useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const {changeTheme, darkMode} = themeContext;
  const {isAuthenticated, logout, user} = authContext;

  const changePressed = () => {
    setPressed(!pressed);
  };

  const authenticatedLinks = (
      <Fragment>
        <li>Hello {user && user.name}</li>
        <a href={'#!'}>Log out</a>
      </Fragment>
  );

  const authenticationLinks = (
      <Fragment>
        <Link className='nav-item nav-link' to='/Login'>
          Log in
        </Link>
        <Link className='nav-item nav-link' to='/Register'>
          Register
        </Link>
      </Fragment>
  );

  return (
    <Fragment>
      <nav className={`navbar sticky-top ${darkMode ? `navbar-dark` : `navbar-light`} navbar-expand-lg`}
           style={darkMode ? {backgroundColor:'#303030'} : {backgroundColor:'#F0F0F0'}}>
        <Link
          to='/'
          className='navbar-brand mb-0 h1'
          onMouseDown={changePressed}
          onMouseUp={changePressed}
          onTouchStart={changePressed}
          onTouchEnd={changePressed}
          onTouchCancel={changePressed}
        >
          <img
            src={pressed ? CatTongue : Cat}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt=''
          />{" "}CrazyRedKitten
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#MainNavbar'
          aria-controls='MainNavbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'/>
        </button>
        <div className='navbar-collapse collapse' id="MainNavbar">
          <ul className='navbar-nav mr-auto'>
            <Link className='nav-item nav-link' to='/projects'>
              Small Projects
            </Link>
            <Link className='nav-item nav-link' to='/Contact'>
              Contact
            </Link>
          </ul>
          <div className='navbar-nav'>
            <button className={`btn ${darkMode ? 'btn-dark' : 'btn-secondary' }`} onClick={changeTheme}>
              <img src={darkMode ? Moon : Sun} style={{ width: "24px" }} alt='arrow'/>
            </button>
            {isAuthenticated ? authenticatedLinks : authenticationLinks}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;