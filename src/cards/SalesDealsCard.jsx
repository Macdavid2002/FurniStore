import {
  ShoppingBagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const SalesDealsCard = ({ salesDealsList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Card Carousel
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= salesDealsList.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? salesDealsList.length - 1 : prevIndex - 1
    );
  };

  // Generate the items to be displayed in the current view
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(salesDealsList[(currentIndex + i) % salesDealsList.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<SolidStarIcon key={i} className="h-6 w-6 text-gray-400" />);
      } else {
        stars.push(<StarIcon key={i} className="h-6 w-6 text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div>
      <div className="flex justify-between items-center z-10">
        <h1 className="p-8 text-3xl font-bold">Sales Deals</h1>
        <p className="flex items-center justify-center text-md px-4 cursor-pointer">
          Show More <ArrowRightIcon className="w-6 h-3" />
        </p>
      </div>
      <div className="p-1 md:p-8">
        <div className="relative grid grid-cols-4 gap-8">
          {visibleItems.map((salesItem, index) => (
            <ul
              key={index}
              className="border border-gray-400 rounded-md p-4 relative"
            >
              <div className="relative">
                <img
                  src={salesItem.img}
                  className="relative rounded-md"
                  alt={salesItem.alt}
                />
                <span className="absolute top-2 left-0 bg-gray-400 w-24 h-9 text-white font-bold p-2 clip-ribbon">
                  {salesItem.off} off
                </span>
                <span className="absolute top-1 right-0 m-2">
                  <HeartIcon className="w-9 h-9 text-white cursor-pointer bg-gray-400 p-2 rounded-full" />
                </span>
              </div>
              <span className="flex gap-1 py-2">
                {renderStars(salesItem.rating)}
              </span>
              <li className="text-[16px] font-bold">{salesItem.name}</li>
              <li>
                <ul className="flex justify-between py-2">
                  <li className="">{salesItem.price}</li>
                  <li className="line-through text-gray-400">
                    {salesItem.formerPrice}
                  </li>
                </ul>
                {/* Add to cart button */}
                <button className="w-[100%] p-2 bg-gray-400 rounded-md flex justify-center gap-4 font-bold">
                  <ShoppingBagIcon className="w-6 text-black text-xl" />
                  Add to cart
                </button>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <ChevronLeftIcon
            className="p-2 bg-gray-400 text-white rounded-full w-10 cursor-pointer"
            onClick={handlePrev}
          />
          <ChevronRightIcon
            className="p-2 bg-gray-400 text-white rounded-full w-10 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};
