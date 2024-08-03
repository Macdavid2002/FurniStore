import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const AccountDropdown = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  useEffect(() => {
    window.onscroll = () => setDropdownOpen(false);
  }, []);
  return (
    <div
      className="relative"
      ref={accountDropdownRef}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        <UserCircleIcon className="w-6 text-white hover:text-black text-xl font-medium focus:text-black" />
      </button>
      {dropdownOpen && (
        <div className="absolute -left-4 w-36 bg-white shadow-md  ">
          {user ? (
            <Link
              to="/account"
              className="block p-4 text-gray-800   hover:text-gray-500"
            >
              My Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="block p-4 text-gray-800   hover:text-gray-500"
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
