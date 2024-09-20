import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export const RoomDropdown = ({ title, items, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown toggle functions
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`relative inline-block text-black ${
        isMobile ? "w-full}" : ""
      }`}
      onClick={isMobile ? toggleDropdown : undefined}
      onMouseOver={
        !isMobile
          ? () => {
              setIsOpen(true);
            }
          : undefined
      }
      onMouseLeave={
        !isMobile
          ? () => {
              setIsOpen(false);
            }
          : undefined
      }
    >
      {/* Toggle Dropdown Button */}
      <div className="flex items-center cursor-pointer">
        <button className="flex items-center text-[18px]  focus:text-black w-full">
          {title}
          {isOpen ? (
            <ChevronUpIcon className="w-6 h-8 text-black  cursor-pointer" />
          ) : (
            <ChevronDownIcon className="w-6 h-8 text-black  cursor-pointer" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className={`lg:bg-white lg:shadow-md ${
            isMobile ? "w-full mt-2" : "absolute left-0 w-[200px]"
          }`}
        >
          <ul className="lg:p-4">
            {items.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="p-2 text-[16px] text-black border-b border-b-gray-400 lg:hover:border-l-4 hover:border-l-gray-400">
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