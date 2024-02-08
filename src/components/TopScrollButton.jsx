import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when user scrolls down 400px
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 right-10 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" bg-gray-500 p-3 rounded-md hover:bg-black hover:text-white "
        >
          <ArrowUpIcon className="w-5 " />
        </button>
      )}
    </div>
  );
};

export default TopScrollButton;
