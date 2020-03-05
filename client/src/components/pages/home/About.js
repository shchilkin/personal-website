import React, {useContext} from "react";
import '../../Layout/About.style.css'
import Page from "../../Layout/Page/Page.component";
import ThemeContext from '../../../contexts/theme/ThemeContext'
import Moon from "../../../icons/Moon.svg";
import Sun from "../../../icons/Sun.svg";

const About = () => {
    const themeContext = useContext(ThemeContext);
    const {darkMode, changeTheme} = themeContext;

    return (
        <Page>
            {/*<div className={'navbar-About'}>*/}
            {/*    <button className={`mr-3 btn ${darkMode ? 'btn-outline-dark' : 'btn-outline-secondary' }`} onClick={changeTheme}>*/}
            {/*        <img src={darkMode ? Moon : Sun} style={{ width: "24px" }} alt='arrow'/>*/}
            {/*    </button>*/}
            {/*</div>*/}
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
                        <span style={{color:'#ED2939'}}>Web Development</span>
                    </h3>
                </div>
            </div>
        </Page>
    );
};

export default About;