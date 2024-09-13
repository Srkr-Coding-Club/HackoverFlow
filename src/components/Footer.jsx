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
            <h3 className="text-lg font-semibold sm:text-base">Contact Us</h3>
            <p className="mt-2 text-sm sm:text-xs">
              <span className="font-bold">John Doe</span> <br />
              Phone: +91 98765 43210 <br />
              Email: johndoe@srkrcodingclub.com
            </p>
            <p className="mt-2 text-sm sm:text-xs">
              <span className="font-bold">Jane Smith</span> <br />
              Phone: +91 91234 56789 <br />
              Email: janesmith@srkrcodingclub.com
            </p>
          </div>

          {/* Right Side Contacts */}
          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold sm:text-base">Get in Touch</h3>
            <p className="mt-2 text-sm sm:text-xs">
              <span className="font-bold">Alex Johnson</span> <br />
              Phone: +91 99876 54321 <br />
              Email: alexjohnson@srkrcodingclub.com
            </p>
            <p className="mt-2 text-sm sm:text-xs">
              <span className="font-bold">Emily Davis</span> <br />
              Phone: +91 98765 12345 <br />
              Email: emilydavis@srkrcodingclub.com
            </p>
          </div>
        </div>

        {/* Footer Logo (Placed below contact details in mobile view) */}
        <div className="mt-6 md:order-none order-1">
          <img
            src="/footerpic.png"
            className="w-32 mx-auto sm:w-52"
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
