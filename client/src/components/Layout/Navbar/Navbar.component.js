import React, {useContext, useState} from "react";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import CatTongue from "../../../icons/CatTongue.svg";
import Cat from "../../../icons/CatLogoV9.svg";
import {Link} from "react-router-dom";


const Navbar = () => {
    const themeContext =  useContext(ThemeContext);
    const {changeTheme, darkMode} = themeContext;

    const [pressed, setPressed] = useState(false);

    const changePressed = () => {
        setPressed(!pressed);
    };


    return(
        <nav className={`
        navbar navbar-expand-lg fixed-top
        navbar-${darkMode ? "dark" :"light"} 
        Navbar-${darkMode ? "Dark" : "Light"}`}>
            <Link className="navbar-brand"
                  to={'/#About'}
                  onMouseDown={changePressed}
                  onMouseUp={changePressed}
                  onTouchStart={changePressed}
                  onTouchEnd={changePressed}
                  onTouchCancel={changePressed}
            >  <img
                src={pressed ? CatTongue : Cat}
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
            />{" "}CrazyRedKitten</Link>
            <button className="navbar-toggler"
                    style={{border:"none"}} type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href={'#About'}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={'#StudiesAndProjects'}>About</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/SoftUI-generator'}>Soft UI generator</Link>
                    </li>
                </ul>
                <button className={'btn'} onClick={changeTheme} >
                    {darkMode ?
                        <svg className="bi bi-moon" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="#f0f0f0"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
                                  clipRule="evenodd"/>
                        </svg> :
                        <svg className="bi bi-sun" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/>
                            <path fillRule="evenodd"
                                  d="M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
                                  clipRule="evenodd"/>
                        </svg>
                    }
                </button>
            </div>
        </nav>
    )
}


export default Navbar