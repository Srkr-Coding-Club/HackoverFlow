import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false); // State for docs popup

  const handleDocsOpen = () => {
    setIsDocsOpen(true);
  };

  const handleDocsClose = () => {
    setIsDocsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full min-h-20 z-20 border-gray-200 bg-gray-900 px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Logo and Text (S.R.K.R Engineering College and SRKR Coding Club) */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/logo1.png"
                width={60}
                height={60}
                className="rounded bg-slate-50 opacity-90 shadow-white shadow-inner"
                alt="Logo"
              />
            </a>
            {/* Text next to the logo */}
            <div className="ml-4 text-white hidden sm:block">
              <p className="font-bold text-lg">S.R.K.R Engineering College</p>
              <p className="text-sm">SRKR Coding Club</p>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen ? "true" : "false"}
          >
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
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            {/* Centered Text for mobile view (inside the dropdown) */}
            <div className="text-center sm:hidden mt-2">
              <p className="font-bold text-[0.8rem] text-white">
                S.R.K.R Engineering College
              </p>
              <p className="text-xs text-white">SRKR Coding Club</p>
            </div>

            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  ABOUT
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="themes"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  THEMES
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="schedule"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  SCHEDULE
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="prizes"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  PRIZES
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  GALLERY
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="faq"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  FAQ
                </ScrollLink>
              </li>
              {/* Docs Button */}
              <li>
                <button
                  onClick={handleDocsOpen}
                  className="block py-2 pl-3 pr-4 text-white transition-colors duration-300 border-b-2 border-transparent cursor-pointer hover:text-gray-300 hover:border-blue-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  DOCS
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Docs Popup Modal */}
      {isDocsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Docs</h2>
              <button
                className="text-red-500 font-bold text-lg"
                onClick={handleDocsClose}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <iframe
                src="/HACKOVERFLOW-2K24-PROBLEM-STATEMENTS.pdf"
                className="w-full h-96"
                title="Docs PDF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
