import data from "../../api/data.json";
import { useParams } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const DiningDetails = () => {
  const { name } = useParams();
  const diningData = data.dining;
  const dining = diningData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (!dining) {
    return <div>Card not found</div>;
  }
  return (
    <div className="bg-[#F5F5F5] overflow-hidden">
      <div className="flex p-4 gap-2">
        <Link to="/" className="text-sm flex items-center">
          Home <ChevronRightIcon className="w-3" />
        </Link>
        <Link to="/dining" className="text-sm flex items-center">
          Dining <ChevronRightIcon className="w-3" />
        </Link>
        <p className="text-sm">{dining.name}</p>
      </div>

      <>
        <div className="w-96 mx-auto shadow-sm shadow-black p-4 my-4 rounded-md">
          <div className="">
            <img src={dining.imgUrl} className="rounded-lg" alt={dining.name} />
          </div>
          <div>
            <span className="flex items-center justify-between">
              <h2 className="text-xl font-medium"> {dining.name}</h2>
              <h2 className="font-bold text-lg py-4"> ${dining.price}.00</h2>
            </span>
            <p className="text-sm font-light w-full">{dining.desc} </p>
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
