import React, {useContext} from "react";
import ThemeContext from '../../../contexts/theme/ThemeContext'
import smoothScroll from 'smooth-scroll'

const About = () => {
    const themeContext = useContext(ThemeContext);
    const {darkMode} = themeContext;

    smoothScroll('a[href*="#About"]', {
        speed: 900
    });
    smoothScroll('a[href*="#StudiesAndProjects"]', {
        speed: 900
    });

    return (
        <div className={`page ${darkMode ? 'Background-Dark':'Background-Light'}`}>
            <section  id={'About'} className='TextContainer h-100 align-items-center background'>
                <div className={'container-fluid'}>
                    <div className={'center container'}>
                        <h1 className={'MainText'}>Aleksandr Shchilkin</h1>
                        <h3 className={'SecondaryText'}>I am a student with a passion for
                            <br className={'break'}/>
                            <span style={{color:'#ED2939'}}> Web Development</span>
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;