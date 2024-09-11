// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 border-gray-200 bg-gray-900 px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src="/logo.png" width={50} height={50} className="mr-3" alt="Logo" />
        </a>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 15a1 1 0 100-2h12a1 1 0 100 2H4z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="schedule" 
                smooth={true} 
                duration={500} 
                className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                SCHEDULE
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="prizes" 
                smooth={true} 
                duration={500} 
                className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                PRIZES
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="sponsors" 
                smooth={true} 
                duration={500} 
                className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                SPONSORS
              </ScrollLink>
            </li>
            
            {/* <li>
              <ScrollLink 
                to="team" 
                smooth={true} 
                duration={500} 
                className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                TEAM
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink 
                to="faq" 
                smooth={true} 
                duration={500} 
                className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700 transition-colors duration-300 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
              >
                FAQ
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
