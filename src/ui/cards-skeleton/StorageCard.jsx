import { Link } from "react-router-dom";
import storage from "../../data/products.json";
import { StorageCardLayout } from "../cards-layout/StorageCardLayout";
export const StorageCard = () => {
  return (
    <div className="mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {storage.products
          .filter((storage) => storage.category === "storage")
          .slice(0, 4)
          .map((storage) => (
            <div key={storage.id}>
              <StorageCardLayout
                name={storage.name}
                id={storage.id}
                price={storage.price}
                imgUrl={storage.imgUrl}
              />
            </div>
          ))}
      </div>
      <Link to="/storage">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
