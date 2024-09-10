import data from "../api/data.json";
import { useParams } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const RugDetails = () => {
  const { name } = useParams();
  const rugData = data.data[5];
  const rug = rugData.find(
    (rugItem) => rugItem.name.toLowerCase() === name.toLowerCase()
  );
  if (!name) {
    return <h1 className="text-xl my-14">Card Not Found </h1>;
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex p-4 gap-2">
        <Link to="/" className="text-sm flex items-center">
          Home <ChevronRightIcon className="w-3" />
        </Link>
        <Link to="/rug" className="text-sm flex items-center">
          Rugs <ChevronRightIcon className="w-3" />
        </Link>
        <p className="text-sm">{rug.name}</p>
      </div>

      <>
        <div className="w-96 mx-auto bg-[#d2cfd1] p-4 my-4 rounded-md">
          <div className="">
            <img src={rug.imgUrl} className="rounded-lg" alt={rug.name} />
          </div>
          <div>
            <span className="flex items-center justify-between">
              <h2 className="text-xl font-medium"> {rug.name}</h2>
              <h2 className="font-bold text-lg py-4"> ${rug.price}.00</h2>
            </span>
            <p className="text-sm font-light w-full">{rug.desc} </p>
            <button className="flex gap-4 justify-center rounded-md bg-black mt-4 p-3 text-md font-medium w-full text-white">
              <ShoppingBagIcon className="w-5 text-white" />
              Add to cart
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
