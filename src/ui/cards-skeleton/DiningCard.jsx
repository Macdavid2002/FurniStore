import dining from "../../data/products.json";
import { Link } from "react-router-dom";
import { DiningCardLayout } from "../cards-layout/DiningCardLayout";

export const DiningCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {dining.products
          .filter((dining) => dining.category === "dining")
          .slice(1, 5)
          .map((dining) => (
            <div key={dining.id}>
              <DiningCardLayout
                name={dining.name}
                id={dining.id}
                price={dining.price}
                imgUrl={dining.imgUrl}
              />
            </div>
          ))}
      </div>
      <Link to="/dining">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
