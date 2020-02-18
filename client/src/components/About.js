import React  from "react";
import '../components/Layout/About.style.css'

const About = () => {
  return (
      <div className={'About'}>
          <div className='TextContainer h-100 align-items-center' style={{backgroundColor:'#303030', color:'#FFF'}}>
              <div className={'container'}>
                <h1 className={'MainText'}>Hi<span style={{color:'#ED2939'}}>,</span> I am Aleksandr<span style={{color:'#ED2939'}}>.</span></h1>
                <h3 className={'SecondaryText'}>I am a student with a passion for Web Development</h3>
             </div>
          </div>
      </div>
);
};

export default About;

