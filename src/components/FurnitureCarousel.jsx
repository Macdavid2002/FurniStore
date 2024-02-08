// FurnitureCarousel.js
import React, { useState } from "react";
import image from "../assets/about.jpg";
import imag from "../assets/cyber-bg.png";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
const images = [image, imag];
{
  /*
[
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
]; */
}

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
      <div className="overflow-hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-64 md:h-96 lg:h-120 ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <div className=" absolute top-40 left-1/3   ">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCarousel;
