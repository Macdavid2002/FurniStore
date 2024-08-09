import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown Toggle Function
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
      <button className="flex items-center   text-lg font-medium focus:text-black ">
        {title}
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-8 text-white  cursor-pointer" />
        ) : (
          <ChevronDownIcon className="w-6 h-8 text-white  cursor-pointer" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-1 w-[200px]  bg-white shadow-md">
          <ul className="p-6 ">
            {items.map((item, index) => (
              <Link to={item.link}>
                <li
                  key={index}
                  className="p-2 text-black border-b  border-b-gray-400 hover:border-l-4 hover:border-l-gray-400 "
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
