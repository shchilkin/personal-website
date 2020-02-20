import React from "react";

const Footer = () => {
  const year = new Date();
  return (
      <footer style={{backgroundColor:'#272727', color:'#F0F0F0', position:'absolute', bottom:'0', width:'100%', lineHeight:'80px', height:'80px'}}>
          <div className='d-flex justify-content-center'>
              &copy; {year.getFullYear()} Aleksandr Shchilkin
          </div>
      </footer>

  );
};

export default Footer;


