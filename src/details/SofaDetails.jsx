import data from "../api/data.json";
import { useParams } from "react-router-dom";

export const SofaDetails = () => {
  const { id } = useParams();
  const sofaData = data.data[6];
  const sofas = sofaData.find((sofaItem) => sofaItem.id === parseInt(id));
  if (!id) {
    return <h1 className="text-xl my-14">Card Not Found </h1>;
  }

  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={sofas.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {sofas.name}</h1>
        <h2 className="font-bold text-lg py-4">${sofas.price}.00</h2>
        <p className="text-md font-extralight w-98">{sofas.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
