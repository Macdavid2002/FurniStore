import data from "../api/data.json";
import { useParams } from "react-router-dom";

export const RugDetails = () => {
  const { id } = useParams();
  const rugData = data.data[5];
  const rug = rugData.find((rugItem) => rugItem.id === parseInt(id));
  if (!id) {
    return <h1 className="text-xl my-14">Card Not Found </h1>;
  }

  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={rug.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {rug.name}</h1>
        <h2 className="font-bold text-lg py-4">${rug.price}.00</h2>
        <p className="text-md font-extralight w-98">{rug.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
