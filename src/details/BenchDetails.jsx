import data from "../api/data.json";
import { useParams } from "react-router-dom";
export const BenchDetails = () => {
  const { id } = useParams();
  const benchData = data.data[2];
  const bench = benchData.find((item) => item.id === parseInt(id));
  if (!bench) {
    return <div>Card not found</div>;
  }
  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={bench.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {bench.name}</h1>
        <h2 className="font-bold text-lg py-4">${bench.price}.00</h2>
        <p className="text-md font-extralight w-98">{bench.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
