import {
  BanknotesIcon,
  TruckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import truckImg from "../../assets/icons8-discount-shipping-64.png";
export const Why = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center font-cinzel">
        Why Shop From Us
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 xl:flex justify-between gap-4 p-8">
        <span className="shadow-sm shadow-gray-300 w-full py-10 rounded-md text-center">
          <BanknotesIcon className="w-20 mx-auto p-2" />
          <h1 className="text-md font-medium">Money Back</h1>
          <p className="text-md">30 Day Guarantee</p>
        </span>
        <span className="shadow-sm shadow-gray-300 w-full py-10 rounded-md text-center">
          <TruckIcon className="w-20 mx-auto p-2" />
          <h1 className="text-md font-medium">Express Delivery</h1>
          <p className="text-md">Super Fast Delivery</p>
        </span>
        <span className="shadow-sm shadow-gray-300 w-full py-10 rounded-md text-center">
          <CurrencyDollarIcon className="w-20  mx-auto p-2" />
          <h1 className="text-md font-medium">Fair Prices</h1>
          <p className="text-md">High Quality At Low Price </p>
        </span>
        <span className="shadow-sm shadow-gray-300 w-full py-10 rounded-md text-center">
          <img
            src={truckImg}
            className="w-20  mx-auto p-2"
            alt="truck discount"
          />
          <h1 className="text-md font-medium">Shipping Discount</h1>
          <p className="text-md">34% Shipping discount </p>
        </span>
      </div>
    </div>
  );
};
