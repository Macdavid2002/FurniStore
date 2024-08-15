import data from "../api/data.json";
import { useParams } from "react-router-dom";

export const TableDetails = () => {
  const { id } = useParams();
  const tableData = data.data[8];
  const table = tableData.find((tableItem) => tableItem.id === parseInt(id));
  if (!id) {
    return <h1 className="text-xl my-14">Card Not Found </h1>;
  }

  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={table.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {table.name}</h1>
        <h2 className="font-bold text-lg py-4">${table.price}.00</h2>
        <p className="text-md font-extralight w-98">{table.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
