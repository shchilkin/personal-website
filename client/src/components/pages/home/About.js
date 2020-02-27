import React, {useContext} from "react";
import '../../Layout/About.style.css'
import ThemeContext from '../../../context/theme/ThemeContext'

const About = () => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;
    return (
        <div className={`About ${darkMode ? 'background-dark' : 'background-light'}`}>
            <div className='TextContainer h-100 align-items-center background' style={{zIndex:5}}>
                <div className={'container'}>
                    <h1 className={'MainText'}>Hi<span style={{color:'#ED2939'}}>.</span>{' '}
                        <br className={'break'}/>
                        I am
                        <br/>
                        Aleksandr
                    </h1>
                    <h3 className={'SecondaryText'}>I am a student with a passion for
                        <br/>
                        <span style={{color:'#ED2939'}}>Web Development</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default About;