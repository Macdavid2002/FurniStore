import { Link } from "react-router-dom";
import table from "../../data/products.json";

import { TableCardLayout } from "../cards-layout/TableCardLayout";
export const TableCard = () => {
  return (
    <div className="mt-8">
      <div className=" relative p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {table.products
          .filter((table) => table.category === "table")
          .slice(0, 4)
          .map((table) => (
            <div key={table.id}>
              <TableCardLayout
                name={table.name}
                id={table.id}
                price={table.price}
                imgUrl={table.imgUrl}
              />
            </div>
          ))}
      </div>
      <Link to="/table">
        <span className="flex justify-center">
          <button className="py-4 px-8 bg-gray-300 rounded-md text-black text-center">
            Show More
          </button>
        </span>
      </Link>
    </div>
  );
};
