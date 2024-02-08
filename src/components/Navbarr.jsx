// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can also save the current mode in local storage or a state management solution
  };

  return (
    <nav className={`bg-${isDarkMode ? 'gray-800' : 'black'} p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          {/* Your logo goes here */}
          <span>Logo</span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Your nav links go here */}
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close icon when the menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when the menu is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="ml-2">
          {/* Sun icon for dark/light mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white focus:outline-none"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      {isOpen && (
        <div className={`md:hidden bg-${isDarkMode ? 'gray-800' : 'black'} mt-2`}>
          {/* Your responsive nav links go here */}
          <a href="#" className="block text-white py-2 px-4">Home</a>
          <a href="#" className="block text-white py-2 px-4">About</a>
          <a href="#" className="block text-white py-2 px-4">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
