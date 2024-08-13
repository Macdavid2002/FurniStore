// import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
// import { ChairData } from "../data/ChairData";
// export const ChairCard = () => {
//   const [chairList, setChairList] = useState(ChairData);
//   const [changeColor, setChangeColor] = useState(false);
//   return (
//     <div className="md:mt-8">
//       <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
//         {chairList.map((chairList, id) => (
//           <div key={id}>
//             <div className="relative p-10 border border-gray-400 ">
//               <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />

//               {changeColor ? (
//                 <img
//                   src={chairList.secondImgUrl}
//                   className="z-10"
//                   alt="Chair pic"
//                 />
//               ) : (
//                 <img src={chairList.imgUrl} className="z-10" alt="Chair pic" />
//               )}

//               <span className="flex justify-between items-center">
//                 {changeColor ? (
//                   <h1 className="py-4 text-md font-medium md:text-xl ">
//                     {chairList.names}
//                   </h1>
//                 ) : (
//                   <h1 className="py-4 text-md font-medium md:text-xl ">
//                     {chairList.name}
//                   </h1>
//                 )}
//                 <ShoppingBagIcon className="w-6 h-6 cursor-pointer hover:animate-bounce" />
//               </span>
//               <h2 className="font-medium text-md text-gray-500">
//                 $ {chairList.price}
//               </h2>
//             </div>
//             <div className="flex gap-4 justify-center mt-8">
//               {chairList.green && (
//                 <button
//                   className="h-4 w-4 bg-green-600 rounded-full"
//                   onClick={() => {
//                     setChangeColor(!changeColor);
//                   }}
//                 ></button>
//               )}
//               {chairList.blue && (
//                 <button className="h-4 w-4 bg-blue-600 rounded-full"></button>
//               )}
//               {chairList.purple && (
//                 <button className="h-4 w-4 bg-purple-600 rounded-full"></button>
//               )}
//               {chairList.gray && (
//                 <button className="h-4 w-4 bg-gray-400 rounded-full"></button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <span className="flex justify-center">
//         <button className="py-4 px-8 bg-gray-400 font-bold rounded-md text-white text-center">
//           Show More
//         </button>
//       </span>
//     </div>
//   );
// };

import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { ChairData } from "../data/ChairData";

export const ChairCard = () => {
  const [chairList, setChairList] = useState(ChairData);

  const handleColorChange = (id, color) => {
    setChairList((prevChairList) =>
      prevChairList.map((chair, index) =>
        index === id
          ? {
              ...chair,
              currentImgUrl:
                color === "second" ? chair.secondImgUrl : chair.imgUrl,
              currentName: color === "second" ? chair.secondName : chair.name,
            }
          : chair
      )
    );
  };

  return (
    <div className="md:mt-8">
      <div className="relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {chairList.map((chair, id) => (
          <div key={id}>
            <div className="relative p-10 border border-gray-400 ">
              <HeartIcon className="absolute w-8 h-8 right-7 cursor-pointer hover:bg-gray-200 rounded-full p-1" />

              <img
                src={chair.currentImgUrl || chair.imgUrl}
                className="z-10"
                alt="Chair pic"
              />

              <span className="flex justify-between items-center">
                <h1 className="py-4 text-md font-medium md:text-xl ">
                  {chair.currentName || chair.name}
                </h1>
                <ShoppingBagIcon className="w-6 h-6 cursor-pointer hover:animate-bounce" />
              </span>
              <h2 className="font-medium text-md text-gray-500">
                $ {chair.price}
              </h2>
            </div>
            <div className="flex gap-4 justify-center mt-8">
              {chair.green && (
                <button
                  className="h-4 w-4 bg-green-600 rounded-full"
                  onClick={() => handleColorChange(id, "second")}
                ></button>
              )}
              {chair.blue && (
                <button
                  className="h-4 w-4 bg-blue-600 rounded-full"
                  onClick={() => handleColorChange(id, "second")}
                ></button>
              )}
              {chair.purple && (
                <button
                  className="h-4 w-4 bg-purple-600 rounded-full"
                  onClick={() => handleColorChange(id, "first")}
                ></button>
              )}
              {chair.gray && (
                <button
                  className="h-4 w-4 bg-gray-400 rounded-full"
                  onClick={() => handleColorChange(id, "first")}
                ></button>
              )}
              {chair.black && (
                <button
                  className="h-4 w-4 bg-black rounded-full"
                  onClick={() => handleColorChange(id, "first")}
                ></button>
              )}
            </div>
          </div>
        ))}
      </div>
      <span className="flex justify-center">
        <button className="py-4 px-8 bg-gray-400 font-bold rounded-md text-white text-center">
          Show More
        </button>
      </span>
    </div>
  );
};
