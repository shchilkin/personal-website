import React, {Fragment, useContext} from "react";
import '../components/Layout/Navbar/navbar-item.css';
import ThemeContext from '../contexts/theme/ThemeContext';
import {Link} from "react-router-dom";
import Button from "./Layout/Buttons/Button/Button.component";

const Footer = () => {
    const themeContext =  useContext(ThemeContext);
    const {changeTheme, darkMode} = themeContext;

    return (
        <Fragment>
            <footer className={`page-footer pt-4 pb-4 ${darkMode ? `footer-dark` : `footer-light`}`}>
                <div className="container-fluid text-center">
                    <div className="row">
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Projects</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link style={{color:'#ed2939'}} to={'/projects/findOnGithub'}>Find on GitHub</Link>
                                    </li>
                                    <li>
                                        <Link style={{color:'#ed2939'}} to={'/projects/avatarGenerator'}>Avatar generator</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link style={{color:'#ed2939'}} to={'/'}>Home</Link>
                                    </li>
                                    <li>
                                        <Link style={{color:'#ed2939'}} to={'/contact'}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link style={{color:'#ed2939'}} to="/login">Log in</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
