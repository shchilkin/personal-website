import React  from "react";
import '../../Layout/About.style.css'

const About = () => {
  return (
      <div className={'About'}>
          <div className='TextContainer h-100 align-items-center background'>
              <div className={'container'}>
                <h1 className={'MainText'}>Hi<span style={{color:'#ED2939'}}>.</span>{' '}
                    <br className={'break'}/>
                    I am
                    <br/>
                    Aleksandr
                </h1>
                <h3 className={'SecondaryText'}>I am a student with a passion for
                    <br/>
                    <span style={{color:'#ED2939'}}>Web Development</span></h3>
             </div>
          </div>
      </div>
);
};

export default About;

