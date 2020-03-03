import React, {Fragment, useContext} from "react";
import ThemeContext from '../../../../contexts/theme/ThemeContext'
import './ContactLink.style.css'
import Icons from "./Icons";
import { Link } from "react-router-dom";

const ContactLink = ({icon, link, width = '2rem', height = '2rem', internalLink = false}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    const contactLinkButton = (
        <button className={ darkMode ? 'ContactLink-Dark' : 'ContactLink-Light'}>
            <div style={{width:width, height:height}}>
                {Icons[icon].group ? (
                    <svg
                        height={'100%'}
                        width={'100%'}
                        className={darkMode ? 'ContactLink-Dark-Image' : 'ContactLink-Light-Image'}
                        viewBox={Icons[icon].viewBox}
                    >
                        <g>
                            {Icons[icon].group.map( Path => <path d={Path} /> )}
                        </g>
                    </svg>
                ) : (
                    <svg
                        height={'100%'}
                        width={'100%'}
                        className={darkMode ? 'ContactLink-Dark-Image' : 'ContactLink-Light-Image'}
                        viewBox={Icons[icon].viewBox}
                    >
                        <path d={Icons[icon].path}/>
                    </svg>
                )}
                </div>
        </button>
    );

    return (
        <Fragment>
            {internalLink ? (
                <Link to={link}>
                    {contactLinkButton}
                </Link>
            ) : (
                <a  href={link} target='blank'>
                    {contactLinkButton}
                </a>
            ) }
        </Fragment>
    );
};

export default ContactLink;