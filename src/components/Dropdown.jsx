import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown Toggle Function
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleLinkHover = () => {
    if (!isOpen) {
      toggleDropdown();
    }
  };
  useEffect(() => {
    // Close the dropdown when another link is clicked
    const handleOtherLinkHover = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("mouseover", handleOtherLinkHover);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mouseover", handleOtherLinkHover);
    };
  }, [isOpen]);
  return (
    <div className="relative inline-block text-white" ref={dropdownRef}>
      {/* Toggle Dropdown Button */}
      <button
        onMouseEnter={toggleDropdown}
        onFocus={toggleDropdown}
        onBlur={closeDropdown}
        onClick={toggleDropdown}
        className="hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400 "
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="absolute mt-2 bg-blue-500 rounded-md shadow-lg w-32 z-50"
          onMouseLeave={closeDropdown}
        >
          <ul className="py-2 px-4">
            {items.map((item, index) => (
              <li key={index} className="text-white">
                <a
                  href={item.link}
                  onClick={closeDropdown}
                  onMouseEnter={handleLinkHover}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
