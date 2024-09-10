import { useParams } from "react-router-dom";
import data from "../api/data.json";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const BedDetails = () => {
  const { name } = useParams();
  const bedData = data.data[1];
  const bed = bedData.find(
    (bedItem) => bedItem.name.toLowerCase() === name.toLowerCase()
  );
  if (!bed) {
    <div>Bed not found</div>;
  }
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex p-4 gap-2">
        <Link to="/" className="text-sm flex items-center">
          Home <ChevronRightIcon className="w-3" />
        </Link>
        <Link to="/beds" className="text-sm flex items-center">
          Beds <ChevronRightIcon className="w-3" />
        </Link>
        <p className="text-sm">{bed.name}</p>
      </div>

      <>
        <div className="w-96 mx-auto bg-[#d2cfd1] p-4 my-4 rounded-md">
          <div className="">
            <img src={bed.imgUrl} className="rounded-lg" alt={bed.name} />
          </div>
          <div>
            <span className="flex items-center justify-between">
              <h2 className="text-xl font-medium"> {bed.name}</h2>
              <h2 className="font-bold text-lg py-4"> ${bed.price}.00</h2>
            </span>
            <p className="text-sm font-light w-full">{bed.desc} </p>
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
