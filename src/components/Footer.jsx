import React from "react";
import Facebook from "../assets/facebook.svg";
import YouTube from "../assets/icons8-youtube.svg";
import Twitter from "../assets/icons8-twitterx.svg";
import Instagram from "../assets/icons8-instagram.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center w-screen h-48 justify-between ">
        <div className="flex items-center gap-3 mt-8">
          <a href="https://www.facebook.com/profile.php?id=61552039587620&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img className="h-4" src={Facebook} alt="Discord" />
          </a>
          <span className="font-semibold text-white">/</span>
          <a href="https://youtube.com/@SRKRCODINGCLUB?feature=shared" target="_blank" rel="noopener noreferrer">
            <img className="h-4" src={YouTube} alt="YouTube" />
          </a>
          <span className="font-semibold text-white">/</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="h-4" src={Twitter} alt="Twitter" />
          </a>
          <span className="font-semibold text-white">/</span>
          <a href="https://instagram.com/srkr_coding_club?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <img className="h-4" src={Instagram} alt="Instagram" />
          </a>
          <span className="font-semibold text-white">/</span>
          <a href="in/srkr-coding-club-549799293" target="_blank" rel="noopener noreferrer">
            <img className="h-4" src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <img
          src={"https://www.duhacks.tech/assets/images/dsc.png"}
          className="w-44"
          alt="SRKR logo"
        />
        <p className="m-2 text-xs text-white ">
          Copyrights © 2024. All rights reserved by SRKR CODING CLUB
        </p>
      </footer>
    </>
  );
};

export default Footer;
