import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
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
    <div className="fixed bottom-10 right-10 z-50 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" bg-white p-2  text-black shadow-black shadow-sm rounded-full "
        >
          <ChevronUpIcon className="w-5 " />
        </button>
      )}
    </div>
  );
};

export default TopScrollButton;
