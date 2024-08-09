import fbIcon from "../svg/icons8-facebook.svg";
import xIcon from "../svg/icons8-twitterx.svg";
import pinterestIcon from "../svg/icons8-pinterest.svg";
import instaIcon from "../svg/icons8-instagram.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <div className="flex p-4 bg-gray-400">
        <div className="text-white">
          <Link to="/">
            <h1 className="text-white font-medium text-3xl flex py-2">
              Meubles
            </h1>
            <div className="border-t-[2px] w-[9%] border-black"></div>
          </Link>
          <div className="flex p-2 gap-20 text-black ">
            {/* Help Links */}
            <div>
              <p className="text-lg  font-medium py-2">HELP</p>
              <ul className="text-xs ">
                <li className="py-1">SHIPPING</li>
                <li className="py-1">RETURN POLICY</li>
                <li className="py-1">EMAIL AND TEXT REFERENCES</li>
                <li className="py-1">PRODUCT RECALLS</li>
              </ul>
            </div>
            {/* Useful Link */}
            <div>
              <h2 className="text-lg font-medium py-2">RESOURCES</h2>
              <ul className="text-xs">
                <li className="py-1">ARTICLE</li>
                <li className="py-1">GIFT CARDS</li>
                <li className="py-1">TRADE PROGRAMS</li>
                <li className="py-1">REVIEWS</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium py-2">CONTACT US</h2>
              <ul className="text-xs">
                <li className="py-1">FAQ</li>
                <li className="py-1">PRIVACY POLICY</li>
                <li className="py-1">TERMS OF USE</li>
                <li className="py-1">DO NOT SELL MY INFORMATION</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium py-2 ">ACCOUNT</h2>
              <ul className="text-xs">
                <Link to="/login">
                  <li className="py-1">REGISTER/LOGIN</li>
                </Link>
                <Link to="/">
                  <li className="py-1">WISHLIST</li>
                </Link>
              </ul>
            </div>
            <div>
              <input
                type="text"
                placeholder="Email address..."
                className="p-2 mx-2 placeholder:text-xs"
              />
              <button className="bg-black text-white p-2 hover:bg-[rgba(0,0,0,0.8)]">
                Subscribe
              </button>
              <p className="text-xs p-2">
                Receive updates to new arrivals and sales on our exquisite
                collection
              </p>
            </div>
          </div>
          <div>
            <ul className="flex p-2 py-4 gap-3">
              <li>
                <img src={fbIcon} alt="" />
              </li>
              <li>
                <img src={xIcon} alt="" />
              </li>
              <li>
                <img src={pinterestIcon} alt="" />
              </li>
              <li>
                <img src={instaIcon} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
