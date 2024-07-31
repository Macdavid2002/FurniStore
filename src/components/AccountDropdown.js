import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const AccountDropdown = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  useEffect(() => {
    window.onscroll = () => setDropdownOpen(false);
  }, []);
  return (
    <div className="relative" ref={accountDropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        <UserCircleIcon className="w-6 text-white hover:text-black text-xl font-medium focus:text-black" />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 px-2">
          {user ? (
            <Link
              to="/account"
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-500 hover:text-white"
            >
              My Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-500 hover:text-white"
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
