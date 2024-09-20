import fbIcon from "../../svg/icons8-facebook.svg";
import xIcon from "../../svg/icons8-twitter.svg";
import pinterestIcon from "../../svg/icons8-pinterest.svg";
import instaIcon from "../../svg/icons8-instagram.svg";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <div className="md:flex p-4 bg-gray-400 ">
        <div className="">
          <Link to="/">
            <h1 className="text-black text-3xl flex py-2 uppercase">Meubles</h1>
          </Link>
          <div className="mt-4 grid grid-cols-2 lg:flex md:grid-cols-3 pb-8 gap-20 text-black ">
            {/* Help Links */}
            <span>
              <p className="text-lg  font-medium py-2">HELP</p>
              <ul className="text-xs ">
                <li className="py-1">SHIPPING</li>
                <li className="py-1">RETURN POLICY</li>
                <li className="py-1">EMAIL AND TEXT REFERENCES</li>
                <li className="py-1">PRODUCT RECALLS</li>
              </ul>
            </span>
            {/* Resources */}
            <span>
              <ul className="text-xs">
                <h2 className="text-lg font-medium py-2">RESOURCES</h2>
                <li className="py-1">BULLETIN</li>
                <Link to="/about">
                  <li className="py-1">ABOUT US</li>
                </Link>
                <li className="py-1">GIFT CARDS</li>
                <li className="py-1">REVIEWS</li>
              </ul>
            </span>
            {/* Contact Us links */}
            <span>
              <h2 className="text-lg font-medium py-2">CONTACT US</h2>
              <ul className="text-xs">
                <li className="py-1">FAQ</li>
                <li className="py-1">PRIVACY POLICY</li>
                <li className="py-1">TERMS OF USE</li>
                <li className="py-1">DO NOT SELL MY INFORMATION</li>
              </ul>
            </span>
            {/* Account Links */}
            <span>
              <h2 className="text-lg font-medium py-2 ">ACCOUNT</h2>
              <ul className="text-xs">
                <Link to="/login">
                  <li className="py-1">REGISTER/LOGIN</li>
                </Link>
                <Link to="/">
                  <li className="py-1">WISHLIST</li>
                </Link>
              </ul>
            </span>
            {/* newsletter */}
            <span className="grid grid-row-1 lg:block">
              <p className="max-[320px]:text-[12px] lg:text-sm pb-4 md:p-2">
                Receive updates to new arrivals and sales on our exquisite
                collection
              </p>

              <div className="md:py-4 md:mx-2 flex items-center justify-start gap-2">
                <input
                  type="text"
                  placeholder="Email address..."
                  className="max-[320px]:p-1 p-2 placeholder:text-xs"
                />
                <button className="bg-black 320:text-xs text-md text-white p-2 hover:bg-[rgba(0,0,0,0.8)]">
                  Subscribe
                </button>
              </div>
            </span>
          </div>
          <div className="border-t-[2px] border-black py-4"></div>
          <div className="block sm:flex items-center justify-between px-1">
            <h2 className="text-md md:text-lg font-medium">
              Copyright © 2024 Meubles. All rights reserved
            </h2>
            <ul className="flex items-center justify-center py-2 gap-6">
              <li className="cursor-pointer">
                <PhoneIcon className="w-6" />
              </li>
              <li className="cursor-pointer">
                <EnvelopeIcon className="w-6" />
              </li>

              <li className="cursor-pointer">
                <img src={fbIcon} className="h-8 md:h-6" alt="" />
              </li>
              <li className="cursor-pointer">
                <img src={xIcon} className="h-8 md:h-6" alt="" />
              </li>
              <li className="cursor-pointer">
                <img src={pinterestIcon} className="h-8 md:h-6" alt="" />
              </li>
              <li className="cursor-pointer">
                <img src={instaIcon} className="h-8 md:h-6" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};