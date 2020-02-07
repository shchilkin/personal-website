import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ContactLink = props => {
  /*TODO rewrite this part  if link provided use <a> with href, if Link to other part of the app use <Link> */
  return (
    <Fragment>
      {props.link ? (
        <a href={props.link} target='blank'>
          <img
            src={props.image}
            style={{ width: "3.125rem" }}
            className='mr-3'
            alt={props.alt}
          />
        </a>
      ) : (
        <Link to={props.Link}>
          <img
            src={props.image}
            style={{ width: "3.125rem" }}
            className='mr-3'
            alt={props.alt}
          />
        </Link>
      )}
    </Fragment>
  );
};

export default ContactLink;

// <a href={props.link} target='blank'>
// <img
//   src={props.image}
//   style={{ width: "3.125rem" }}
//   className='mr-3'
//   alt={props.alt}
// />
// </a>
