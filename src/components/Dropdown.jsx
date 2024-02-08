// Navbar.js
import React, { useState } from "react";

// Dropdown component
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-white">
      <button
        onClick={toggleDropdown}
        className="hover:text-blue-400 focus:underline text-xl font-bold focus:text-blue-400 "
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-blue-500 rounded-md shadow-lg w-32 ">
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

// Main Navbar component
// const Navbar = () => {
// return (
// <nav className="bg-black p-4">
//   <div className="container mx-auto flex items-center justify-between">
//     <div className="text-white">
//       {/* Your logo goes here */}
//       <span>Logo</span>
//     </div>

//     <div className="hidden md:flex items-center space-x-4">
//       {/* Your nav links go here */}
//       <a href="#" className="text-white">Home</a>
//       <Dropdown
//         title="Products"
//         items={[
//           { label: 'Category 1', link: '/category1' },
//           { label: 'Category 2', link: '/category2' },
//           { label: 'Category 3', link: '/category3' },
//         ]}
//       />
//       <Dropdown
//         title="Services"
//         items={[
//           { label: 'Service 1', link: '/service1' },
//           { label: 'Service 2', link: '/service2' },
//         ]}
//       />
//       <a href="#" className="text-white">Contact</a>
//     </div>

//     <div className="md:hidden">
//       {/* Hamburger icon */}
//       {/* ... (unchanged) */}
//     </div>
//   </div>
// </nav>
//   );
// };

export default Dropdown;
