import React from "react";
import { Gradient } from "react-gradient";
import ContactLink from "./ContactLink";
import EmailLogo from "./logos/email.svg";
import Instagram from "./logos/instagram.svg";
import Twitter from "./logos/TwitterD.svg";
import Youtube from "./logos/YTL.svg";
import Github from "./logos/Githubwhite.svg";

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
      <div className='container-fluid'>
        <div className='d-flex justify-content-center text-white pt-5 pb-1'>
          <h4>Contact me</h4>
        </div>
        <div className='d-flex justify-content-center pb-5'>
          <ContactLink
            image={Github}
            link={"https://github.com/CrazyRedKitten"}
          />
          <ContactLink
            image={Instagram}
            link={"https://www.instagram.com/crazyredkitten/"}
          />
          <ContactLink
            image={Youtube}
            link={"https://www.youtube.com/channel/UCJYmru-hgW4CYYuoyMmWOnw"}
          />
          <ContactLink
            image={Twitter}
            link={"https://twitter.com/crazyredkitten"}
          />
          <ContactLink image={EmailLogo} link={"#"} />
        </div>
      </div>
    </Gradient>
  );
};

export default Contacts;
