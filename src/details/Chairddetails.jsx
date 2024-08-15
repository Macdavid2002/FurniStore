import data from "../api/data.json";
import { useParams } from "react-router-dom";
export const ChairDetails = () => {
  const { id } = useParams();
  const chairData = data.data[0];
  const chair = chairData.find((item) => item.id === parseInt(id));
  if (!chair) {
    return <div>Card not found</div>;
  }
  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={chair.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {chair.name}</h1>
        <h2 className="font-bold text-lg py-4">${chair.price}.00</h2>
        <p className="text-md font-extralight w-98">{chair.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
