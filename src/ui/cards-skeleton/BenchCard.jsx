import { Link } from "react-router-dom";
import benches from "../../data/products.json";
import { BenchCardLayout } from "../cards-layout/BenchCardLayout";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
export const BenchCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {benches.products
          .filter((bench) => bench.category === "benches")
          .slice(0, 4)
          .map((bench) => (
            <div key={bench.id}>
              <BenchCardLayout
                name={bench.name}
                id={bench.id}
                imgUrl={bench.imgUrl}
                price={bench.price}
              />
            </div>
          ))}
      </div>
      <Link to="/benches">
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
