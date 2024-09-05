import {
  BanknotesIcon,
  TruckIcon,
  PhoneIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export const Why = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-center">
        Why Shop From MEUBLES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-2 p-8">
        <span className="bg-gray-200 w-[20rem] lg:w-80 p-8 rounded-md text-center">
          <BanknotesIcon className="w-16 mx-auto p-2" />
          <h1 className="text-md font-medium">Money Back</h1>
          <p className="text-md">30 Day guarantee</p>
        </span>
        <span className="bg-gray-200 w-[20rem] lg:w-80 p-8 rounded-md text-center">
          <TruckIcon className="w-16 mx-auto p-2" />
          <h1 className="text-md font-medium">Express Delivery</h1>
          <p className="text-md">Super fast delivery</p>
        </span>
        <span className="bg-gray-200 w-[20rem] lg:w-80 p-8 rounded-md text-center">
          <PhoneIcon className="w-16  mx-auto p-2" />
          <h1 className="text-md font-medium">24/7 Support</h1>
          <p className="text-md">Phone and email support </p>
        </span>
        <span className="bg-gray-200 w-[20rem] lg:w-80 p-8 rounded-md text-center">
          <CurrencyDollarIcon className="w-16  mx-auto p-2" />
          <h1 className="text-md font-medium">Fair Prices</h1>
          <p className="text-md">High quality at low price </p>
        </span>
      </div>
    </div>
  );
};
