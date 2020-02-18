import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './ContactLink.style.css'
import Icons from "./logos/Icons";

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


// <Fragment>
//   {props.link ? (
//       <button className={'ContactLink'} >
//         <a  href={props.link} target='blank'>
//           <img
//               src={props.image}
//               style={{ width: "2rem" }}
//               className='ContactLink-Image'
//               alt={props.alt}
//           />
//         </a>
//       </button>
//   ) : (
//       <Link to={props.Link}>
//         <button className={'ContactLink'} >
//           <a  href={props.link} target='blank'>
//             <img
//                 src={props.image}
//                 style={{ width: "2rem" }}
//                 className='ContactLink-Image'
//                 alt={props.alt}
//             />
//           </a>
//         </button>
//       </Link>
//   )}
// </Fragment>