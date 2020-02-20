import React  from "react";
import '../../Layout/About.style.css'
import HomepageNavbar from "./Homepage-Navbar/HomepageNavbar.component";

const About = () => {
  return (
      <div className={'About'}>
          {/*<HomepageNavbar/>*/}
          <div className='TextContainer h-100 align-items-center' style={{backgroundColor:'#303030', color:'#F0F0F0'}}>
              <div className={'container'}>
                <h1 className={'MainText'}>Hi<span style={{color:'#ED2939'}}>,</span> I am Aleksandr<span style={{color:'#ED2939'}}>.</span></h1>
                <h3 className={'SecondaryText'}>I am a student with a passion for Web Development</h3>
             </div>
          </div>
      </div>
);
};

export default About;

