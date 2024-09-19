import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import ProductDropdown from "../dropdown/ProductDropdown";
import { RoomDropdown } from "../dropdown/RoomDropdown";
import AccountDropdown from "../dropdown/AccountDropdown";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-400 p-8  flex items-center justify-between h-14 sticky top-0 z-50 shadow-md md:shadow-none">
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
          {/* Dropdown Menus */}
          <ProductDropdown
            title="Products"
            items={[
              { label: "Beds", link: "/beds" },
              { label: "Benches", link: "/benches" },
              { label: "Storage", link: "storage" },
              { label: "Sofas", link: "/sofa" },
              { label: "Chairs", link: "/chair" },
              { label: "Tables", link: "/table" },
              { label: "Rugs", link: "/rug" },
              { label: "Dining", link: "/dining" },
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
        <li className="text-lg hover:text-white">
          <Link to="/layout">Layout</Link>
        </li>
      </ul>

      {/* Account, Cart, Wishlist  and Search Icons */}
      <div className="hidden lg:flex space-x-4">
        <span className="text-black hover:text-white text-lg font-medium">
          <Link to="/search">
            <MagnifyingGlassIcon className="hidden lg:block w-6 text-black text-xl cursor-pointer" />
          </Link>
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
          <ShoppingCartIcon
            className="w-6 text-black hover:text-white text-xl relative"
            title="Cart"
          />
          <p className="bg-white text-xs rounded-full text-center px-1 absolute top-3 right-6">
            0
          </p>
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
      {/* <div className="fixed bg-gray-300 h-full w-[20%] top-16 -right-0.5">
        <h1 className="font-bold text-2xl text-center p-4 ">Cart</h1>
      </div> */}
      {/* Responsive Navbar */}
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[60%] bg-gray-400 h-full ease-in-out duration-500"
            : "fixed left-[-100%]  h-full"
        }
      >
        <h1 className="font-medium uppercase text-2xl m-4">
          <Link to="/">Meubles</Link>
        </h1>

        <span className="lg:hidden text-black fixed right-20 top-5 z-50  text-lg font-medium">
          <Link to="/search">
            <MagnifyingGlassIcon className="lg:hidden w-8 text-black text-xl cursor-pointer" />
          </Link>
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
