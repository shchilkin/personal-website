import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Cat from "../../../../icons/CatLogoV9.svg";
import CatTongue from "../../../../icons/CatTongue.svg";
import '../../../Layout/Navbar/navbar-item.css'
import './HomepageNavbar.style.css'

const HomepageNavbar = () => {
    const [pressed, setPressed] = useState(false);

    const changePressed = () => {
        setPressed(!pressed);
    };

    return (
        <Fragment>
            {/*<nav className={'HomepageNavbar'} style={{backgroundColor:'#303030'}}>*/}
            {/*    <p>CrazyRedKitten</p>*/}
            {/*    <ul className={'HomepageNavbar-Links'}>*/}
            {/*        <li>*/}
            {/*            <Link className={'HomepageNavItem'} to='/contact'>Contact</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link className={'HomepageNavItem'} to='/login'>Log in</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <nav className="topnav">
                <Link className={'HomepageNavItem'} to='/login' style={{marginRight:'1rem'}}>Log in</Link>
                <Link className={'HomepageNavItem'} to='/contact'>Contact</Link>
            </nav>
        </Fragment>
    );
};

export default HomepageNavbar;