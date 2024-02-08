// Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  HeartIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={"bg-gray-800 p-4"}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <Link to="/">
            <h1 className="text-white  font-bold text-2xl ">
              <span className="text-black bg-blue-400  border-none rounded-md p-1 pl-3 pr-3 mr-0 text-3xl ">
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
            className="text-white hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400"
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
            className="text-white hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-white hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400"
          >
            Contact
          </Link>
          <Link to="/">
            <UserCircleIcon className="w-6 text-white hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400" />
          </Link>
          <Link to="/">
            <HeartIcon className="w-6 text-white hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400" />
          </Link>
          <Link to="/">
            <ShoppingCartIcon className="w-6 text-white hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400" />
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
      </div>

      {/* Responsive menu */}
      {isOpen && (
        <div className={"md:hidden bg-gray-800 mt-2"}>
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
