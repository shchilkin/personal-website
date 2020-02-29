import React, {Fragment, useContext} from "react";
import ThemeContext from '../../../../contexts/theme/ThemeContext'
import './ContactLink.style.css'
import Icons from "./Icons";

const ContactLink = ({icon, link, width = '2rem', height = '2rem'}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;
  return (
      <Fragment>
        <button className={ darkMode ? 'ContactLink-Dark' : 'ContactLink-Light'}>
          <a  href={link} target='blank'>
            <div style={{width:width, height:height}}>
              <svg  height={'100%'} width={'100%'}  className={darkMode ? 'ContactLink-Dark-Image' : 'ContactLink-Light-Image'} viewBox={Icons[icon].viewBox}>
                <path d={Icons[icon].path}/>
              </svg>
            </div>
          </a>
        </button>
      </Fragment>
  );
};

export default ContactLink;