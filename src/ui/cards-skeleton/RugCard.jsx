import { Link } from "react-router-dom";
import rug from "../../data/products.json";
import { RugCardLayout } from "../cards-layout/RugCardLayout";
export const RugCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {rug.products
          .filter((rug) => rug.category === "rugs")
          .slice(0, 4)
          .map((rug) => (
            <div key={rug.id}>
              <RugCardLayout
                name={rug.name}
                id={rug.id}
                price={rug.price}
                imgUrl={rug.imgUrl}
              />
            </div>
          ))}
      </div>
      <Link to="/rug">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
