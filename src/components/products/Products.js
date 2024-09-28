import React, { useState, useEffect } from "react";
import product from "../../data/products.json";
import filter from "../../assets/filter.svg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProductLayout } from "./../../ui/product-layout/ProductLayout";
export const Products = () => {
  const [randomItems, setRandomItems] = useState([]);
  const randomArray = (array) => {
    const random = [...array];
    for (let i = random.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [random[i], random[j]] = [random[j], random[i]];
    }
    return random;
  };
  useEffect(() => {
    // Shuffle the array when the component loads
    setRandomItems(randomArray(product.products));
  }, []);
  return (
    <div className="mt-8">
      <div className="px-8 text-sm flex items-center gap-1 font-cinzel">
        <Link to="/">Home</Link>
        <span>
          <ChevronRightIcon className="w-3" />
        </span>
        Products
      </div>
      <h1 className="px-8 pt-12 py-4 text-3xl font-semibold font-cinzel">
        Products
      </h1>

      <div className="p-8 flex justify-between">
        <h3 className="text-xl items-center flex gap-3 font-cinzel">
          Filters <img src={filter} className="h-4" alt="" />
        </h3>
        <select className="border border-black p-2  text-gray-500 w-36 rounded-md">
          <option value="pricing">Pricing</option>
          <option value="0-100">$0 -100</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className="relative px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-12  ">
        {randomItems.map((product) => (
          <div>
            <ProductLayout
              name={product.name}
              id={product.id}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
