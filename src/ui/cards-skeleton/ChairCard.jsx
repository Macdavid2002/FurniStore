import chair from "../../data/products.json";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ChairCardLayout } from "../cards-layout/ChairCardLayout";
import { useSelector } from "react-redux";
export const ChairCard = () => {
  const trueOrFalse = useSelector((state) => state.cart.itemExist);
  console.log(trueOrFalse);
  // trueorFalse.
  return (
    <div className="md:mt-8 ">
      <div className="relative p-8 grid grid-cols-1 sm:grid-cols-2 gap-12  font-cinzel font-bold">
        {chair.products
          .filter((chair) => chair.category === "chair")
          .slice(8, 12)
          .map((chair) => (
            <div key={chair.id}>
              <ChairCardLayout
                name={chair.name}
                id={chair.id}
                price={chair.price}
                imgUrl={chair.imgUrl}
              />
            </div>
          ))}
      </div>
      <Link to="/chair">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black flex items-center gap-3">
            Show More
            <ArrowRightIcon className="w-4" />
          </button>
        </span>
      </Link>
    </div>
  );
};
