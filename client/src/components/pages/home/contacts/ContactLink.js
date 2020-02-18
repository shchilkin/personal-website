import React, { Fragment } from "react";
import './ContactLink.style.css'
import Icons from "./Icons";

const ContactLink = ({icon, link, width = '2rem', height = '2rem'}) => {
  return (
      <Fragment>
        <button className={'ContactLink'}>
          <a  href={link} target='blank'>
            <div style={{width:width, height:height}}>
              <svg  height={'100%'} width={'100%'}  className={'ContactLink-Image'} viewBox={Icons[icon].viewBox}>
                <path d={Icons[icon].path}/>
              </svg>
            </div>
          </a>
        </button>
      </Fragment>
  );
};

export default ContactLink;