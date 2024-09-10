import React from "react";
import Discord from "../assets/discord-icon-svgrepo-com.svg";
import YouTube from "../assets/icons8-youtube.svg";
import Twitter from "../assets/icons8-twitterx.svg";
import Instagram from "../assets/icons8-instagram.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center w-screen h-56  bg-gradient-to-r from-gray-800 to-gray-900 justify-between ">
        <div className="flex items-center gap-3 m-8">
          <img className="h-4" src={Discord} />
          <span className="font-semibold text-white">/</span>
          <img className="h-4" src={YouTube} />
          <span className="font-semibold text-white">/</span>
          <img className="h-4" src={Twitter} />
          <span className="font-semibold text-white">/</span>
          <img className="h-4" src={Instagram} />
          <span className="font-semibold text-white">/</span>
          <img className="h-4" src={LinkedIn} />
        </div>
        <div className="flex flex-col items-center gap-6 ">
          <div className="flex w-44">
            <img src={"https://www.duhacks.tech/assets/images/dsc.png"}></img>
          </div>
          <p className="m-2 text-xs text-white ">
            Copyrights © 2023. All rights reserved by DUHacks 3.0
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
