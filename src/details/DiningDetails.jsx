import data from "../api/data.json";
import { useParams } from "react-router-dom";
export const DiningDetails = () => {
  const { id } = useParams();
  const diningData = data.data[3];
  const dining = diningData.find((item) => item.id === parseInt(id));
  if (!dining) {
    return <div>Card not found</div>;
  }
  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={dining.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {dining.name}</h1>
        <h2 className="font-bold text-lg py-4">${dining.price}.00</h2>
        <p className="text-md font-extralight w-98">{dining.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
