import {} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  HomeModernIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";

export const Services = () => {
  return (
    <div className="mt-48 text-center">
      <h1 className="text-3xl text-gray-500">Our Services</h1>
      <div className="mt-3 border-t-[4px] border-black w-[180px] mx-auto rounded-full"></div>
      <h2 className="p-8 font-bold text-2xl text-gray-500">WHAT WE OFFER</h2>
      <div className="grid gap-12 p-4 lg:grid-cols-3 lg:p-8 ">
        <div className="flex flex-col items-center border border-gray-400 rounded-md  lg:p-8 md:p-4 ">
          <HomeIcon className="h-14 w-14 md:w-28 md:h-28   lg:w-28 lg:h-28  text-gray-500 bg-gray-200 rounded-full p-4 cursor-pointer hover:animate-pulse " />
          <h1 className="font-bold text-xl text-gray-500 p-4">
            Interior Design
          </h1>
          <p className="text-md lg:w-[80%] w-[300px] text-center text-gray-500">
            At FurniStor3 we offer exquisite interior designs from experts to
            best suit our clients' interest.
          </p>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-md md:p-8 p-4">
          <Square3Stack3DIcon className="md:w-28 md:h-28 h-14 w-14 text-gray-500 bg-gray-200 rounded-full p-4 cursor-pointer hover:animate-pulse" />
          <h1 className="font-bold text-xl text-gray-500 p-4">
            Furniture Setup
          </h1>
          <p className="text-md w-[80%] text-center text-gray-500">
            At FurniStor3 we offer installment and arrangement for our clients
            based on their preference.
          </p>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-md p-8">
          <HomeModernIcon className="md:w-28 md:h-28 h-14 w-14 text-gray-500 bg-gray-300 rounded-full p-4 cursor-pointer hover:animate-pulse" />
          <h1 className="font-bold text-xl text-gray-500 p-4">
            Outdoor Design
          </h1>
          <p className="text-md w-[86%] text-center text-gray-500">
            At FurniStor3 we offer elegant exterior designs according to our
            clients' taste and preference.
          </p>
        </div>
      </div>
    </div>
  );
};