import React, {useContext} from "react";
import ContactLink from "./ContactLink";
import ThemeContext from '../../../../contexts/theme/ThemeContext'
import '../StudiesAndProjects.style.css';
import './Contacts.style.css'

const Contacts = () => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
        <div>
            <div className='d-flex justify-content-center text-white pt-5 pb-1'>
                <h4
                    className={'text-center header mb-3'}
                    style={darkMode ? {color:"#F0F0F0"} : {color:"#303030"}}
                >
                    Contact me{/*{<span className={'blink'}>_</span>}*/}
                </h4>
            </div>
            <div className='d-flex justify-content-center pb-5'>
                <div className='container text-center'>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='Github' link={"https://github.com/CrazyRedKitten"} />
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='Instagram' link={"https://www.instagram.com/crazyredkitten"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='Snapchat' link={"https://www.snapchat.com/add/crazyredkitten"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='Twitter' link={"https://twitter.com/crazyredkitten"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='YouTube' link={"https://www.youtube.com/channel/UCJYmru-hgW4CYYuoyMmWOnw"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='VK' link={"https://vk.com/crazyredkitten"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='Facebook' link={"https://www.facebook.com/crazyredkitten"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='LinkedIn' link={"https://www.linkedin.com/in/crazyredkitten/"}/>
                    </li>
                    <li className='mb-2' style={{ display: "inline-block" }}>
                        <ContactLink icon='Email' link={"/Contact"} internalLink={true}/>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
