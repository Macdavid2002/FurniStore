import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const RoomDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown toggle functions
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.onscroll = () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <div className="relative inline-block text-white" ref={dropdownRef}>
      {/* Toggle Dropdown Button */}
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <button className="hover:text-black text-lg font-medium focus:text-black">
          {title}
        </button>
        <ChevronDownIcon className="w-6 h-8 text-white hover:text-black" />
      </div>
      {isOpen && (
        <div className="absolute left-1 mt-1 w-[22rem] bg-white shadow-md shadow-gray-600 rounded-md">
          <ul className="grid grid-cols-2 py-6 px-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex px-4 py-3 text-black hover:text-white hover:bg-gray-500 rounded-md"
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
