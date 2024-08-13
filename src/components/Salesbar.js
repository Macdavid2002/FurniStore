import { useState } from "react";
import { ReceiptPercentIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export const Sales = () => {
  const [showSales, setShowSales] = useState(true);
  return (
    <div>
      <div
        className={`${
          showSales
            ? "flex justify-between items-center bg-white text-center p-2 ml-8 md:mx-auto md:w-4/5"
            : "hidden"
        }`}
      >
        <p className="flex items-center gap-4 md:ml-80 md:text-xl font-semibold">
          <ReceiptPercentIcon className="w-6" />
          50% off sales ongoing
          <Link to="/" className="text-red-500 p-2">
            Shop Now
            <div className="border-t-[1px] border-red-500 rounded-full"></div>
          </Link>
        </p>
        <XMarkIcon
          className="h-5 w-5 text-gray-600 cursor-pointer"
          onClick={() => setShowSales(!showSales)}
        />
      </div>
    </div>
  );
};
