// import {} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import chairIcon from "../../assets/chair.svg"
export const Services = () => {
  return (
    <div className="mt-48 text-center">
      <h1 className="text-3xl text-gray-500">Our Services</h1>
      <div className="mt-3 border-t-[4px] border-black w-[180px] mx-auto rounded-full"></div>
      <h2 className="pt-8 font-bold text-3xl text-gray-500">WHAT WE OFFER</h2>
      <div className="grid gap-12 p-4 lg:grid-cols-3 lg:p-8 ">
        <div className="flex flex-col items-center border border-gray-400 rounded-md  lg:p-8 md:p-4 ">
          <HomeIcon className="h-14 w-14 md:w-24 md:h-24 lg:w-28 lg:h-28  text-gray-500 bg-gray-100 rounded-full p-4 cursor-pointer" />
          <h1 className="font-bold text-xl text-gray-500 p-4">
            Interior Design
          </h1>
          <p className="text-md lg:w-[80%] w-[300px] px-4 text-left text-gray-500">
            At Meubles we offer exquisite interior designs from experts to
            best suit our clients' interest.
          </p>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-md md:p-8 p-4">
            <img src={chairIcon} className="h-28 bg-gray-100 rounded-full p-4 cursor-pointer" alt="" />
          <h1 className="font-bold text-xl text-gray-500 p-4">
            Furniture Setup
          </h1>
          <p className="text-md w-[80%] text-left px-2 text-gray-500">
            At Meubles we offer installment and arrangement for our clients
            based on their preference.
          </p>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-md p-8">
          <HomeModernIcon className="md:w-24 md:h-24 h-14 w-14 text-gray-500 bg-gray-100 rounded-full p-4 cursor-pointer" />
          <h1 className="font-bold text-xl text-gray-500 p-4">
            Outdoor Design
          </h1>
          <p className="text-md w-[86%] text-left text-gray-500">
            At Meubles we offer elegant exterior designs according to our
            clients' taste and preference.
          </p>
        </div>
      </div>
    </div>
  );
};
