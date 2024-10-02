import lighting from "../../data/products.json";
import { Link } from "react-router-dom";
import { LightingCardLayout } from "../cards-layout/LightingCardLayout";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const LightingCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {lighting.products
          .filter((lighting) => lighting.category === "lighting")
          .slice(0, 4)
          .map((lighting) => (
            <LightingCardLayout
              name={lighting.name}
              id={lighting.id}
              price={lighting.price}
              imgUrl={lighting.imgUrl}
            />
          ))}
      </div>
      <Link to="/lighting">
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
