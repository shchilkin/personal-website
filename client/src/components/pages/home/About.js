import React, {useContext} from "react";
import '../../Layout/About.style.css'
import Page from "../../Layout/Page/Page.component";
import ThemeContext from '../../../contexts/theme/ThemeContext'
import Moon from "../../../icons/Moon.svg";
import Sun from "../../../icons/Sun.svg";
import smoothScroll from 'smooth-scroll'
import Icons from "../../Icons";

const About = () => {
    const themeContext = useContext(ThemeContext);
    const {darkMode, changeTheme} = themeContext;

    smoothScroll('a[href*="#StudiesAndProjects"]', {
        speed: 900
    });

    return (
        <Page>
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
                <div className={'readMore-button pulse'}>
                    <a href={'#StudiesAndProjects'}>
                        <svg
                            height={'64px'}
                            width={'64px'}
                            className={darkMode ? 'ContactLink-Dark-Image' : 'ContactLink-Light-Image'}
                            viewBox={Icons['ArrowBottom'].viewBox}
                        >
                            <path d={Icons['ArrowBottom'].path}/>
                        </svg>
                    </a>
                </div>
            </section>
        </Page>
    );
};

export default About;