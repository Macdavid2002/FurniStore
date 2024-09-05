import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import ProductDropdown from "./ProductDropdown";
import { RoomDropdown } from "./RoomDropdown";
import AccountDropdown from "../components/AccountDropdown";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearchBar = () => {
    if (window.scrollY > 400) {
      setSearchBar(false);
    }
  };
  window.addEventListener("scroll", toggleSearchBar);

  return (
    <div className="bg-gray-400 p-4 flex items-center justify-between h-14 sticky top-0 z-50 shadow-md md:shadow-none">
      <h1 className=" uppercase text-2xl">
        <Link to="/">Meubles</Link>
      </h1>

      <ul className="hidden lg:flex items-center justify-center gap-4">
        <li className="text-lg hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg hover:text-white">
          <Link to="/about">About</Link>
        </li>
        <li>
          <ProductDropdown
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
            isMobile={isOpen}
          />
        </li>
        <li className="text-lg hover:text-white">
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
            isMobile={isOpen}
          />
        </li>
        <li className="text-lg hover:text-white">
          <Link to="/">Bulletin</Link>
        </li>
        <li className="text-lg hover:text-white">
          <Link to="/">Contact</Link>
        </li>
      </ul>

      {/* Account, Cart, Wishlist  and Search Icons */}
      <div className="hidden lg:flex space-x-4">
        <span className="text-black hover:text-white text-lg font-medium">
          <MagnifyingGlassIcon
            className="hidden lg:block w-6 text-black hover:text-white text-xl cursor-pointer"
            onClick={() => {
              setSearchBar(!searchBar);
            }}
          />
        </span>
        <AccountDropdown user={user} />
        <Link
          to="/wishlist"
          className="text-black hover:text-white text-lg font-medium"
        >
          <HeartIcon
            className="w-6 text-black hover:text-white text-xl"
            title="Wishlist"
          />
        </Link>
        <Link to="/cart">
          <ShoppingBagIcon
            className="w-6 text-black hover:text-white text-xl"
            title="Cart"
          />
        </Link>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <div
        className="lg:hidden fixed right-4 top-4 z-50"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <XMarkIcon className="w-10" />
        ) : (
          <Bars3Icon className="w-10" />
        )}
      </div>
      {/* <div> */}
      {searchBar && (
        <input
          type="text "
          className="absolute top-16 p-3 rounded-md bg-transparent border border-black outline-none right-1 placeholder:text-black 
  "
          placeholder="search items"
        />
      )}
      {/* </div> */}
      {/* Responsive Navbar */}
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[60%] bg-gray-400 h-full ease-in-out duration-500"
            : "fixed left-[-100%]  h-full ease-in-out duration-500"
        }
      >
        <h1 className="font-medium uppercase text-2xl m-4">
          <Link to="/">Meubles</Link>
        </h1>
        <span className="relative">
          <input
            type="text"
            className="mx-2 p-4 w-[90%] rounded-md mt-4 placeholder:p-6 placeholder:text-black z-10"
            placeholder="Search Items"
          />
          <MagnifyingGlassIcon className="w-6 absolute top-0 left-4" />
        </span>
        <ul className="pt-4 text-md">
          <li className="p-4 border-b border-b-white font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-b-white font-medium">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 border-b border-b-white">
            <ProductDropdown
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
              isMobile={isOpen}
            />
          </li>
          <li className="p-4 border-b border-b-white font-medium">
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
              isMobile={isOpen}
            />
          </li>
          <li className="p-4 border-b border-b-white font-medium">About</li>
          <li className="p-4 border-b border-b-white font-medium">
            <Link to="/">Bulletin</Link>
          </li>
          <li className="p-4 border-b border-b-white font-medium">
            <Link to="/">Contact</Link>
          </li>
          <li className="p-4 border-b border-b-white font-medium">Cart</li>
          <li className="p-4 border-b border-b-white font-medium">Wishlist</li>
          <li className="p-4-border-b border-b-white font-medium">
            <AccountDropdown user={user} isMobile={isOpen} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
