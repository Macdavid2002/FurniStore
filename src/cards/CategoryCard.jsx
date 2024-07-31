import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
export const CategoryCard = ({ categoryList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Card Carousel
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= categoryList.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categoryList.length - 1 : prevIndex - 1
    );
  };

  // Generate the items to be displayed in the current view
  const getVisibleCategoryItem = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(categoryList[(currentIndex + i) % categoryList.length]);
    }
    return items;
  };

  const visibleCategoryItem = getVisibleCategoryItem();
  return (
    <div className="mt-20">
      <div className="px-8 flex justify-between items-center">
        <ChevronLeftIcon
          className="p-2 bg-gray-400 text-white rounded-full w-10 cursor-pointer"
          onClick={handlePrev}
        />
        <div className="border border-gray-400 rounded-full border-t-2 border-b-2 w-80"></div>
        <h1 className="p-8 text-3xl font-bold text-gray-500">
          Shop By Category{" "}
        </h1>
        <div className="border border-gray-400 rounded-full border-t-2 border-b-2 w-80"></div>
        <div className="flex justify-center gap-4 mt-4">
          <ChevronRightIcon
            className="p-2 bg-gray-400 text-white rounded-full w-10 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>

      <div className="  p-8 grid grid-cols-4 gap-12">
        {visibleCategoryItem.map((visibleCategoryItem, id) => (
          <div key={id}>
            <div className="p-10 border border-gray-400 rounded-md ">
              <img
                src={visibleCategoryItem.imgUrl}
                className="rounded-md "
                alt="Room pic"
              />
              <h1 className="py-4 text-xl">{visibleCategoryItem.name} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
