import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
const AccountDropdown = ({ isMobile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    window.onscroll = () => setDropdownOpen(false);
  }, []);
  const [user] = useAuthState(auth);

  // SignOut Function
  const navigate = useNavigate();
  const signOutFunction = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div
      className={`relative inline-block text-black ${isMobile ? "w-full" : ""}`}
      ref={accountDropdownRef}
      onClick={isMobile ? () => setDropdownOpen(true) : undefined}
      onMouseOver={!isMobile ? () => setDropdownOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setDropdownOpen(false) : undefined}
    >
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        {isMobile ? (
          <p className="text-md font-medium p-4 text-black">Account</p>
        ) : (
          <UserCircleIcon className="w-6 text-black hover:text-white text-xl font-medium focus:text-black" />
        )}
      </button>
      {dropdownOpen && (
        <div
          className={`${
            isMobile
              ? "w-full mt-2"
              : "absolute -left-28 w-56 bg-white shadow-md  p-2 z-50"
          }`}
        >
          {user ? (
            <div>
              <Link
                to="/account"
                className="border-b border-b-gray-400 block p-2 text-gray-800  hover:border-l-4 hover:border-l-gray-400"
              >
                Account Information
              </Link>
              <Link
                to="/account"
                className="border-b border-b-gray-400 block p-2 text-gray-800  hover:border-l-4 hover:border-l-gray-400"
              >
                Wishlist
              </Link>
              <Link
                to="/account"
                className="border-b border-b-gray-400 block p-2 text-gray-800  hover:border-l-4 hover:border-l-gray-400"
              >
                Orders
              </Link>
              <button
                className="flex gap-2 items-center p-2 border-b border-b-gray-400  text-gray-800  hover:border-l-4 hover:border-l-gray-400 w-full"
                onClick={signOutFunction}
              >
                Logout
                <ArrowRightOnRectangleIcon className="w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex gap-2 items-center p-2 border-b border-b-gray-400  text-gray-800  hover:border-l-4 hover:border-l-gray-400 w-full"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
