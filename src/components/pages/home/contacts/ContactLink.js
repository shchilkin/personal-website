import React, { Fragment } from "react";

const ContactLink = props => {
  return (
    <Fragment>
      <a href={props.link} target='blank'>
        <img
          src={props.image}
          style={{ width: "50px" }}
          className='mr-3'
          alt={props.alt}
        />
      </a>
    </Fragment>
  );
};

export default ContactLink;
