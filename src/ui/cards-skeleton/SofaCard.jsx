import { Link } from "react-router-dom";
import sofa from "../../data/products.json";
import { SofaCardLayout } from "../cards-layout/SofaCardLayout";
export const SofaCard = () => {
  return (
    <div className="md:mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {sofa.products
          .filter((sofa) => sofa.category === "sofa")
          .slice(0, 4)
          .map((sofa, id) => (
            <div key={id}>
              <SofaCardLayout
                name={sofa.name}
                id={sofa.id}
                imgUrl={sofa.imgUrl}
                price={sofa.price}
              />
            </div>
          ))}
      </div>
      <Link to="/sofa">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
