import React, { Fragment } from "react";
import { Gradient } from "react-gradient";
import ContactLink from "./ContactLink";
import EmailLogo from "./logos/email.svg";
import Instagram from "./logos/instagram.svg";
import Twitter from "./logos/Twitter.svg";
import Youtube from "./logos/Youtube.svg";
import Github from "./logos/Github.svg";
import LinkedIn from "./logos/linkedin.svg";
import VK from "./logos/vk.svg";
import Facebook from "./logos/fb.svg";
import Snapchat from "./logos/Snapchat.svg";

// inline-block!important

const gradients = [
  ["#59c2ff", "#1270e3"],
  ["#8739e5", "#ff63de"]
];

const Contacts = () => {
  return (
    <Gradient
      gradients={gradients}
      property='background'
      duration={8000}
      angle='45deg'
    >
      <Fragment>
        <div className='d-flex justify-content-center text-white pt-5 pb-1'>
          <h4>Contact me</h4>
        </div>
        <div className='d-flex justify-content-center pb-5'>
          <ul>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={Github}
                link={"https://github.com/CrazyRedKitten"}
                alt='Github'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={Instagram}
                link={"https://www.instagram.com/crazyredkitten/"}
                alt='Instagram'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={Snapchat}
                link={"https://www.snapchat.com/add/crazyredkitten"}
                alt='Snapchat'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={Youtube}
                link={
                  "https://www.youtube.com/channel/UCJYmru-hgW4CYYuoyMmWOnw"
                }
                alt='YouTube'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={Twitter}
                link={"https://twitter.com/crazyredkitten"}
                alt='Twitter'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={VK}
                link={"https://vk.com/crazyredkitten"}
                alt='VK'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={Facebook}
                link={"https://www.facebook.com/crazyredkitten"}
                alt='Facebook'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink
                image={LinkedIn}
                link={"https://www.linkedin.com/in/crazyredkitten/"}
                alt='LinkedIn'
              />
            </li>
            <li style={{ display: "inline-block" }}>
              <ContactLink image={EmailLogo} link={"#"} alt='Email' />
            </li>
          </ul>
        </div>
      </Fragment>
    </Gradient>
  );
};

export default Contacts;
