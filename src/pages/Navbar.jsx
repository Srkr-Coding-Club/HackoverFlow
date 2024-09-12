import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full min-h-20 z-20 border-gray-200 bg-gray-900 px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo and Text (S.R.K.R Engineering College and SRKR Coding Club) */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo1.png"
              width={70}
              height={70}
              className="rounded bg-white"
              alt="Logo"
            />
          </a>
          {/* Text next to the logo */}
          <div className="ml-4 text-white">
            <p className="font-bold text-lg">S.R.K.R Engineering College</p>
            <p className="text-sm">SRKR Coding Club</p>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 15a1 1 0 100-2h12a1 1 0 100 2H4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-700 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="themes"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-700 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                THEMES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="schedule"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-700 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                SCHEDULE
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="prizes"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-700 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                PRIZES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="sponsors"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-700 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                SPONSORS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="faq"
                smooth={true}
                duration={500}
                className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:border-blue-700 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                FAQ
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered Text for mobile view */}
      <div className="text-center md:hidden mt-2">
        <p className="font-bold text-xs text-white">SRKREC(A)</p>
        <p className="text-sm text-white">SRKR Coding Club</p>
      </div>
    </nav>
  );
};

export default Navbar;
