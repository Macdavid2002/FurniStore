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
    <div className="fixed bottom-9 right-5 z-50 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" bg-[#f1f4f8]  p-2  text-black  shadow-md rounded-br-md "
        >
          <ArrowUpIcon className="w-6 text-black " />
        </button>
      )}
    </div>
  );
};

export default TopScrollButton;
