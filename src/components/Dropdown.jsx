import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown Toggle Function
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-white">
      {/* Toggle Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400 "
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-blue-500 rounded-md shadow-lg w-32 z-50">
          <ul className="py-2 px-4">
            {items.map((item, index) => (
              <li key={index} className="text-white">
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
