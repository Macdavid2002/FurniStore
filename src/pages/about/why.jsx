import {
  BanknotesIcon,
  TruckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import truckImg from "../../assets/icons8-discount-shipping-64.png";
export const Why = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        Why Shop From MEUBLES
      </h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:flex justify-between gap-4 p-8">
        <span className="bg-gray-200 w-full md:w-full p-6 rounded-md text-center">
          <BanknotesIcon className="w-20 mx-auto p-2" />
          <h1 className="text-lg font-medium">Money Back</h1>
          <p className="text-lg">30 Day Guarantee</p>
        </span>
        <span className="bg-gray-200 w-full md:w-full p-6 rounded-md text-center">
          <TruckIcon className="w-20 mx-auto p-2" />
          <h1 className="text-lg font-medium">Express Delivery</h1>
          <p className="text-lg">Super Fast Delivery</p>
        </span>
        <span className="bg-gray-200 w-full md:w-full p-6 rounded-md text-center">
          <CurrencyDollarIcon className="w-20  mx-auto p-2" />
          <h1 className="text-lg font-medium">Fair Prices</h1>
          <p className="text-lg">High Quality At Low Price </p>
        </span>
        <span className="bg-gray-200 w-full md:w-full p-6 rounded-md text-center">
          <img
            src={truckImg}
            className="w-20  mx-auto p-2"
            alt="truck discount"
          />
          <h1 className="text-lg font-medium">Shipping Discount</h1>
          <p className="text-lg">Purchase Worth $3000 </p>
        </span>
      </div>
    </div>
  );
};
