import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";
import { RoomDropdown } from "./RoomDropdown";
import AccountDropdown from "../components/AccountDropdown"; // Import the new AccountDropdown component
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-400 p-4 w-full top-0">
      <div className="container mx-auto flex items-center justify-between gap-4 sm:flex">
        <div className="text-white">
          <Link to="/">
            <h1 className="text-white font-medium text-3xl flex">
              Furni <span className="text-black">Stor3</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {/* Nav Links */}
          <Link
            to="/"
            className="text-white hover:text-black text-lg font-medium focus:text-black"
          >
            Home
          </Link>
          <Dropdown
            title="Products"
            items={[
              { label: "Beds", link: "/beds" },
              { label: "Dressers", link: "/dressers" },
              { label: "Cupboards", link: "/cupboards" },
              { label: "Sofas", link: "/sofa" },
              { label: "Chairs", link: "/chair" },
              { label: "Tables", link: "/table" },
              { label: "Rugs", link: "/rugs" },
              { label: "Lighting", link: "/lighting" },
            ]}
          />
          <RoomDropdown
            title="Rooms"
            items={[
              { label: "Living Room", link: "/beds" },
              { label: "Bedroom", link: "/dressers" },
              { label: "Dining Room", link: "/cupboards" },
              { label: "Office", link: "/sofa" },
              { label: "Outdoor", link: "/chair" },
              { label: "Entryway", link: "/chair" },
            ]}
          />

          <Link
            to="/"
            className="text-white hover:text-black text-lg font-medium focus:text-black"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-white hover:text-black text-lg font-medium focus:text-black"
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
              // X icon to close navbar
              <XMarkIcon className="w-5" />
            ) : (
              // Hamburger icon to open navbar
              <Bars3BottomLeftIcon className="w-5" />
            )}
          </button>
        </div>
        {/* Search Bar */}
        <div className="flex w-2/5">
          <input
            className="rounded-md outline-none p-2 w-full placeholder:p-2 text-sm"
            placeholder="Search Products..."
          />
          
          <MagnifyingGlassIcon className="w-6 text-gray-500 relative -left-11 cursor-pointer" />
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-black text-lg font-medium focus:text-black"
          >
            <HeartIcon
              className="w-6 text-white hover:text-black text-xl font-medium focus:text-black"
              title="Wishlist"
            />
          </Link>
          <AccountDropdown user={user}   />
          {/* Conditionally render Account Dropdown */}
          <Link to="/cart">
            <ShoppingBagIcon className="w-6 text-white hover:text-black text-xl font-medium focus:text-black" title="Cart" />
          </Link>
        </div>
      </div>

      {/* Responsive Navbar */}
      {isOpen && (
        <div className="md:hidden bg-gray-400 mt-2">
          <Link
            to="/"
            className="block text-white hover:text-black text-xl font-medium focus:text-black py-2"
          >
            Home
          </Link>
          <Dropdown
            title="Products"
            items={[
              { label: "Dressers", link: "/dressers" },
              { label: "Cupboards", link: "/cupboards" },
              { label: "Sofas", link: "/sofa" },
              { label: "Chairs", link: "/chair" },
              { label: "Tables", link: "/table" },
            ]}
          />
          <Link
            to="/"
            className="block text-white hover:text-black text-xl font-medium focus:text-black py-2"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="flex text-white hover:text-black text-xl font-medium focus:text-black py-2 gap-2"
          >
            <ShoppingBagIcon className="w-6 text-white hover:text-black text-xl font-medium focus:text-black" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
