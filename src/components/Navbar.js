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
import AccountDropdown from "../components/AccountDropdown";
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
              { label: "Storage", link: "storage" },
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
              { label: "Living Room", link: "/living-room" },
              { label: "Bedroom", link: "/bedroom" },
              { label: "Dining Room", link: "/dining-room" },
              { label: "Office", link: "/office" },
              { label: "Outdoor", link: "/outdoor" },
              { label: "Entryway", link: "/entryway" },
            ]}
          />

          <Link
            to="/Articles"
            className="text-white hover:text-black text-lg font-medium focus:text-black"
          >
            Articles
          </Link>
          <Link
            to="/contact"
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
        <div className="relative">
          <div className="w-96 bg-white shadow-lg p-2">
            <div className="flex">
              <input
                className=" outline-none  w-full placeholder:p-2 text-sm"
                placeholder="Search Products..."
              />
              <MagnifyingGlassIcon className="w-6 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <AccountDropdown user={user} />

          <div className="relative">
            <Link
              to="/wishlist"
              className="text-white hover:text-black text-lg font-medium focus:text-black"
            >
              <HeartIcon
                className="w-7 text-white hover:text-black text-xl font-medium focus:text-black"
                title="Wishlist"
              />
            </Link>
            <span className="absolute text-white -top-1 left-4 ">
              <p className="px-2 rounded-full bg-black">0</p>
            </span>
          </div>
          <Link to="/cart">
            <ShoppingBagIcon
              className="w-7 text-white hover:text-black text-xl font-medium focus:text-black"
              title="Cart"
            />
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
              { label: "Living Room", link: "/living-room" },
              { label: "Bedroom", link: "/bedroom" },
              { label: "Dining Room", link: "/dining-room" },
              { label: "Office", link: "/office" },
              { label: "Outdoor", link: "/outdoor" },
              { label: "Entryway", link: "/entryway" },
            ]}
          />
          <Link
            to="/contact"
            className="block text-white hover:text-black text-xl font-medium focus:text-black py-2"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="flex items-center text-white hover:text-black text-xl font-medium focus:text-black py-2 gap-2"
          >
            <ShoppingBagIcon className="w-6 text-white hover:text-black text-xl font-medium focus:text-black" />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
