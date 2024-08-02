import { ChevronDownIcon } from "@heroicons/react/20/solid";
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
      <div className="flex items-center">
        <button className="hover:text-black  text-lg font-medium focus:text-black ">
          {title}
        </button>
        <ChevronDownIcon className="w-6 h-8 text-white hover:text-black cursor-pointer" />
      </div>
      {isOpen && (
        <div className="absolute left-1 w-[200px]  bg-white shadow-md">
          <ul className="p-6 ">
            {items.map((item, index) => (
              <li key={index} className=" p-2 text-black  hover:text-gray-500">
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
