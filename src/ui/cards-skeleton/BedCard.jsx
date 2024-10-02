import bed from "../../data/products.json";
import { Link } from "react-router-dom";
import { BedCardLayout } from "../cards-layout/BedCardLayout";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
export const BedCard = () => {
  return (
    <div className="md:mt-8">
      <div className="relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {bed.products
          .filter((bed) => bed.category === "beds")
          .slice(3, 7)
          .map((beds) => (
            <BedCardLayout
              name={beds.name}
              imgUrl={beds.imgUrl}
              id={beds.id}
              price={beds.price}
            />
          ))}
      </div>
      <Link to="/beds">
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
