import React from "react";
import Facebook from "../assets/facebook.svg";
import YouTube from "../assets/icons8-youtube.svg";
import Instagram from "../assets/icons8-instagram.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center w-screen h-auto justify-between py-6 bg-gray-900 text-white">
        {/* Social Media Links */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61552039587620&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={Facebook} alt="Facebook" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://youtube.com/@SRKRCODINGCLUB?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={YouTube} alt="YouTube" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://instagram.com/srkr_coding_club?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={Instagram} alt="Instagram" />
            </a>
            <span className="font-semibold">/</span>
            <a
              href="https://www.linkedin.com/in/srkr-coding-club-549799293"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-4" src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mt-6 text-center">
          {/* Left Side Contacts */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold sm:text-xl underline">Contact Us</h3>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Siva Gopal Varma</span> <br />
              Phone: <a href="tel:+919951881139">+91 9951881139</a> <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">John Sudhakar</span> <br />
              Phone: <a href="tel:+919849274007"> +91 9849274007</a> <br />
            </p>
          </div>

          {/* Right Side Contacts */}
          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold sm:text-xl underline">Get in Touch</h3>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Shaik Rafique</span> <br />
              Phone: <a href="tel:+919381327622">+91 9381327622</a>  <br />
            </p>
            <p className="mt-2 text-sm sm:text-xl">
              <span className="font-bold">Jagadeesh</span> <br />
              Phone: <a href="tel:+918919317202">+91 8919317202</a><br />
            
            </p>
          </div>
        </div>

        {/* Footer Logo (Placed below contact details in mobile view) */}
        <div className="mt-6 md:order-none order-1">
          <img
            src="/bottomlogo.png"
            className="w-36 mx-auto sm:w-52"
            alt="SRKR logo"
          />
        </div>

        {/* Copyright Section */}
        <p className="mt-4 text-xs text-balance sm:text-[10px]">
          Copyrights © 2024. All rights reserved by SRKR CODING CLUB
        </p>
      </footer>
    </>
  );
};

export default Footer;
