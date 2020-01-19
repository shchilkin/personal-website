import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <div className='d-flex justify-content-center bg-light pb-3 pt-3'>
      &copy; {year.getFullYear()} Aleksandr Shchilkin
    </div>
  );
};

export default Footer;
