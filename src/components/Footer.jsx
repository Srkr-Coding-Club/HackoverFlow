import React from "react";
import Discord from "../assets/discord-icon-svgrepo-com.svg";
import YouTube from "../assets/icons8-youtube.svg";
import Twitter from "../assets/icons8-twitterx.svg";
import Instagram from "../assets/icons8-instagram.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center w-screen h-48 justify-between ">
        <div className="flex items-center gap-3 mt-8">
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
        <img
          src={"https://www.duhacks.tech/assets/images/dsc.png"}
          className=" w-44"></img>
        <p className="m-2 text-xs text-white ">
          Copyrights © 2023. All rights reserved by DUHacks 3.0
        </p>
      </footer>
    </>
  );
};

export default Footer;
