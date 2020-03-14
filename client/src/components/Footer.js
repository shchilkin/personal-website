import React, {Fragment, useContext} from "react";
import '../components/Layout/Navbar/navbar-item.css';
import ThemeContext from '../contexts/theme/ThemeContext';
import './Footer.style.css'
import {Link} from "react-router-dom";
import Alert from "./Layout/Alert/Alert.component";
import Badge from "./Layout/Badge/Badge.component";

const Footer = () => {
    const themeContext =  useContext(ThemeContext);
    const {changeTheme, darkMode} = themeContext;

    return (
        <Fragment>
            <footer className={`page-footer pt-4 pb-4 ${darkMode ? `footer-dark` : `footer-light`}`}>
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p style={{color:'#fdce26'}}><Badge className={'Yellow'}>Currently is under development!</Badge></p>
                            <button className={`btn ${darkMode ? 'btn-light': 'btn-dark' }`} onClick={changeTheme}>Dark mode</button>
                        </div>
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
                                    <li>
                                        <a href="#!">TODO</a>
                                    </li>
                                    <li>
                                        <a href="#!">TODO</a>
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
                                        <a href="#!">TODO</a>
                                    </li>
                                    <li>
                                        <a href="#!">TODO</a>
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
