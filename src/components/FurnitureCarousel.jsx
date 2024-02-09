// FurnitureCarousel.js
import React, { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
const images = [
  "https://cdn-cms-assets.article.com/7mgZ9Lj0rGVFQ4srAhNwpk-a9c13b52f62ff56dcc69a43788ec63d6?w=640&q=40&fit=max",
  "https://cdn-cms-assets.article.com/11RyX4qSVHbPEUqGILbp6v-deadc4d481cf9f8b659faeb2e912b740?w=320&q=80&fit=max",
  "https://cdn-cms-assets.article.com/6NyqebH0efywAER9lYFTFj-ec29944d0718c6911c364329a3765346?w=320&q=80&fit=max",
  // "https://cdn-cms-assets.article.com/4zcf9xLmBXLifzHgXP6MMc-47d48f354b26d05ff618eb14a0f4a546?w=1300&q=80&fm=webp&fit=max",
];

const FurnitureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    // Automatic slider effect every 3 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts or when the currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="">
      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
      >
        <ArrowLeftIcon className="w-5" />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
      >
        <ArrowRightIcon className="w-5" />
      </button>

      {/* Image carousel */}
      <div className=" ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-64 md:h-96 lg:h-120 ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <div className=" absolute top-60 left-1/3   ">
              <h1 className="text-white font-bold text-5xl pb-5 ">
                Nothing but the best
              </h1>
              <h1 className="text-white font-light text-3xl pb-5 ml-5 ">
                Keep things simple but exquisite{" "}
              </h1>
              <button
                className="p-3  bg-blue-500 rounded-md text-white text-lg font-bold uppercase  \
              hover:bg-blue-400 hover:text-white flex gap-2 items-center text-center ml-32  "
              >
                Shop Here Now
                <ShoppingCartIcon className="w-5  font-extra-bold" />
              </button>
            </div>
            <img
              src={image}
              alt={`Furniture ${index + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCarousel;
