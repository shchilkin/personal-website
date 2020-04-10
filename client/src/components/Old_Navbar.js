import React, {Fragment, useContext, useState} from "react";
import { Link } from "react-router-dom";
import Cat from "../icons/CatLogoV9.svg";
import CatTongue from "../icons/CatTongue.svg";
// import '../components/Layout/Navbar/navbar-item.css';
import ThemeContext from '../contexts/theme/ThemeContext';
import Moon from '../icons/Moon.svg';
import Sun from '../icons/Sun.svg';

const Old_Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const themeContext =  useContext(ThemeContext);
  const {changeTheme, darkMode} = themeContext;

  const changePressed = () => {
    setPressed(!pressed);
  };

  return (
      <Fragment>
        <nav className={`navbar sticky-top ${darkMode ? `navbar-dark` : `navbar-light`} navbar-expand-lg`}>
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
            <ul className='navbar-nav mr-auto'>
              <Link className='nav-item nav-link' to='/Contact'>
                Contact
              </Link>
            </ul>
            <div className='navbar-nav'>
              <button className={`btn`} onClick={changeTheme}>
                <img src={darkMode ? Moon : Sun} style={{ width: "48px" }} alt='arrow'/>
              </button>
              {/*{isAuthenticated ? authenticatedLinks : authenticationLinks }*/}
            </div>
        </nav>
      </Fragment>
  );
};

export default Old_Navbar;