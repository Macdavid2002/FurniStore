// Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`bg-${isDarkMode ? "gray-800" : "black"} p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <Link to="/">
            <h1 className="text-white  font-bold text-lg ">
              <span className="text-black bg-gray-200 border-none rounded-md p-2 pl-3 pr-3 mr-0">
                F
              </span>
              urniStore
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Your nav links go here */}
          <Link
            to="/"
            className="text-white hover:text-gray-200 hover:underline "
          >
            Home
          </Link>
          <Dropdown
            title="Products"
            items={[
              { label: "Category 1", link: "/category1" },
              { label: "Category 2", link: "/category2" },
              { label: "Category 3", link: "/category3" },
            ]}
          />
          <Dropdown
            title="Services"
            items={[
              { label: "Service 1", link: "/service1" },
              { label: "Service 2", link: "/service2" },
            ]}
          />
          <Link
            to="/"
            className="text-white  hover:text-gray-100 hover:underline"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-white hover:text-primary hover:underline"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              // Close icon when the menu is open
              <XMarkIcon className="w-5" />
            ) : (
              // Hamburger icon when the menu is closed
              <Bars3BottomLeftIcon className="w-5" />
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
              <SunIcon className="w-10" />
            ) : (
              <MoonIcon className="w-10" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-${isDarkMode ? "gray-800" : "black"} mt-2`}
        >
          {/* Your responsive nav links go here */}
          <a href="#" className="block text-white py-2 px-4">
            Home
          </a>
          <a href="#" className="block text-white py-2 px-4">
            About
          </a>
          <a href="#" className="block text-white py-2 px-4">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
