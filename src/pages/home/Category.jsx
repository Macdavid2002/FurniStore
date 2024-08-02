import { Chairs } from "../Categories/Chairs";
import { Beds } from "../Categories/Beds";
import { useState } from "react";
import { Benches } from "./../Categories/Benches";
import { Lighting } from "../Categories/Lighting";
import { Dining } from "../Categories/Dining";
import { Rugs } from "./../Categories/Rugs";
export const Category = () => {
  const [showChair, setShowChair] = useState(true);
  const [showBed, setShowBed] = useState(false);
  const [showBench, setShowBench] = useState(false);
  const [showDining, setShowDining] = useState(false);
  const [showLighting, setShowLighting] = useState(false);
  const [showRug, setShowRug] = useState(false);

  function chairToggle() {
    setShowChair(true);
    setShowBed(false);
    setShowBench(false);
    setShowLighting(false);
  }
  function bedToggle() {
    setShowBed(true);
    setShowChair(false);
    setShowBench(false);
    setShowLighting(false);
  }
  function benchToggle() {
    setShowBench(true);
    setShowBed(false);
    setShowChair(false);
    setShowLighting(false);
  }
  function diningToggle() {
    setShowDining(true);
    setShowBench(false);
    setShowBed(false);
    setShowChair(false);
    setShowLighting(false);
  }
  function lightingToggle() {
    setShowLighting(true);
    setShowChair(false);
    setShowBed(false);
    setShowBench(false);
    setShowDining(false);
  }
  function rugToggle() {
    setShowRug(true);
    setShowLighting(false);
    setShowChair(false);
    setShowBed(false);
    setShowBench(false);
    setShowDining(false);
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
            className="focus:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={chairToggle}
          >
            Chairs
          </li>
          <li
            className="focus:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={bedToggle}
          >
            Beds
          </li>
          <li
            className="focus:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={benchToggle}
          >
            Benches
          </li>
          <li
            className="focus:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={diningToggle}
          >
            Dining
          </li>
          <li
            className="focus:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={lightingToggle}
          >
            Lighting
          </li>
          <li
            className="focus:bg-gray-200 rounded-full px-3 cursor-pointer"
            onClick={rugToggle}
          >
            Rugs
          </li>
          <li className="focus:bg-gray-200 rounded-full px-3 cursor-pointer">
            Sofas
          </li>
          <li className="focus:bg-gray-200 rounded-full px-3 cursor-pointer">
            Storage
          </li>
          <li className="focus:bg-gray-200 rounded-full px-3 cursor-pointer">
            Tables
          </li>
        </ul>
      </div>
      {showChair && <Chairs />}
      {showBed && <Beds />}
      {showBench && <Benches />}
      {showDining && <Dining />}
      {showLighting && <Lighting />}
      {showRug && <Rugs />}
    </div>
  );
};
