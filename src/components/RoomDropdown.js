import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const RoomDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown toggle functions

  const handleMouseOver = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="relative inline-block text-white"
      ref={dropdownRef}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Dropdown Button */}
      <div className="flex items-center cursor-pointer">
        <button className="hover:text-black text-lg font-medium focus:text-black">
          {title}
        </button>
        <ChevronDownIcon className="w-6 h-8 text-white hover:text-black" />
      </div>
      {isOpen && (
        <div className="absolute left-1  w-[200px] bg-white shadow-md z-50">
          <ul className="p-6">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex p-2 text-black border-b border-b-gray-400 hover:border-l-4 hover:border-l-gray-400 "
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
