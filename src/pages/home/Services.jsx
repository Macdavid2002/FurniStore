// import {} from "@heroicons/react/24/outline";
import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import chairIcon from "../../assets/chair.svg";
export const Services = () => {
  return (
    <div className="mt-48 text-center">
      <h1 className="text-3xl text-gray-500 uppercase">Our Services</h1>
      <div className="mt-3 border-t-2 border-black w-[130px] mx-auto rounded-full"></div>
      <div className="grid grid-cols-1 gap-12 p-4 mt-5 md:grid-cols-3 ">
        <div className="flex flex-col items-center md:justify-center border border-gray-400 rounded-md  p-4 ">
          <HomeIcon className="w-14 md:w-20 text-gray-500 bg-gray-100 rounded-full p-4 cursor-pointer" />
          <h1 className=" text-2xl md:text-xl text-gray-500 py-4 mr-8">
            Interior Design
          </h1>
          <p className="text-md md:w-[100%] w-[300px] px-4 text-left text-gray-500">
            At Meubles we offer exquisite interior designs from experts to best
            suit our clients' interest.
          </p>
        </div>
        <div className="flex flex-col items-center md:justify-center border border-gray-400 rounded-md  p-4 ">
          <img
            src={chairIcon}
            className="md:h-20 bg-gray-100 rounded-full p-4 cursor-pointer"
            alt=""
          />
          <h1 className=" text-2xl md:text-xl text-gray-500 py-4 mr-8">
            Furniture Setup
          </h1>
          <p className="text-md w-[100%] text-left px-2 text-gray-500">
            At Meubles we offer installment and arrangement for our clients
            based on their preference.
          </p>
        </div>
        <div className="flex flex-col items-center md:justify-center border border-gray-400 rounded-md  p-4 ">
          <HomeModernIcon className="md:w-20 w-14 text-gray-500 bg-gray-100 rounded-full p-4 cursor-pointer" />
          <h1 className=" text-2xl md:text-xl text-gray-500 py-4 mr-8">
            Outdoor Design
          </h1>
          <p className="text-md w-[100%] text-left text-gray-500">
            At Meubles we offer elegant exterior designs according to our
            clients' taste and preference.
          </p>
        </div>
      </div>
    </div>
  );
};
