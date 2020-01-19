import React from "react";
import { Gradient } from "react-gradient";
import GithubLogo from "./logos/github-Logo.svg";
import EmailLogo from "./logos/email-Logo.svg";
import InstagramLogo from "./logos/instagram-Logo.svg";
import TwitterLogo from "./logos/twitter-Logo.svg";
import YoutubeLogo from "./logos/youtube-Logo.svg";

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
          <a href='https://github.com/CrazyRedKitten' target='blank'>
            <img src={GithubLogo} style={{ width: "50px" }} className='mr-3' />
          </a>
          <a href='https://www.instagram.com/crazyredkitten/' target='blank'>
            <img
              src={InstagramLogo}
              style={{ width: "50px" }}
              className='mr-3'
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCJYmru-hgW4CYYuoyMmWOnw'
            target='blank'
          >
            <img src={YoutubeLogo} style={{ width: "50px" }} className='mr-3' />
          </a>
          <a href='https://twitter.com/crazyredkitten' target='blank'>
            <img src={TwitterLogo} style={{ width: "50px" }} className='mr-3' />
          </a>
          <a href='#' target='blank'>
            <img src={EmailLogo} style={{ width: "50px" }} className='mr-3' />
          </a>
        </div>
      </div>
    </Gradient>
  );
};

export default Contacts;
