import { Chairs } from "../Categories/Chairs";
import { Beds } from "../Categories/Beds";
import { useState } from "react";
import { Benches } from "./../Categories/Benches";
export const Category = () => {
  const [showChair, setShowChair] = useState(true);
  const [showBed, setShowBed] = useState(false);
  const [showBench, sethowBench] = useState(false);

  function chairToggle() {
    setShowChair(true);
    setShowBed(false);
  }
  function bedToggle() {
    setShowBed(true);
    setShowChair(false);
  }
  function benchToggle() {
    sethowBench(true);
    setShowBed(false);
    setShowChair(false);
  }
  return (
    <div className="mt-24">
      <div className="px-4 md:px-8 flex justify-between items-center">
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
        <h1 className="text-xl md:text-3xl font-bold text-gray-500">
          Shop By Room
        </h1>
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <ul className="p-1 w-[52%] flex gap-1 justify-center items-center bg-gray-400 rounded-full">
          <li
            className="active:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={chairToggle}
          >
            Chairs
          </li>
          <li
            className="active:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={bedToggle}
          >
            Beds
          </li>
          <li
            className="active:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={benchToggle}
          >
            Benches
          </li>
          <li className="active:bg-gray-200 rounded-full px-3 cursor-pointer">
            Dining
          </li>
          <li className="active:bg-gray-200 rounded-full px-3 cursor-pointer">
            Lighting
          </li>
          <li className="active:bg-gray-200 rounded-full px-3 cursor-pointer">
            Rugs
          </li>
          <li className="active:bg-gray-200 rounded-full px-3 cursor-pointer">
            Sofas
          </li>
          <li className="active:bg-gray-200 rounded-full px-3 cursor-pointer">
            Storage
          </li>
          <li className="active:bg-gray-200 rounded-full px-3 cursor-pointer">
            Tables
          </li>
        </ul>
      </div>
      {showChair && <Chairs />}
      {showBed && <Beds />}
      {showBench && <Benches />}
    </div>
  );
};
