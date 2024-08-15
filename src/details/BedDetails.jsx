import { useParams } from "react-router-dom";
import data from "../api/data.json";

export const BedDetails = () => {
  const { id } = useParams();
  const bedData = data.data[1];
  const bed = bedData.find((bedItem) => parseInt(bedItem.id));
  if (!id) {
    <div>Bed not found</div>;
  }
  return (
    <div className="p-24 flex  justify-between bg-[#F5F5F5]">
      <div className="">
        <img src={bed.imgUrl} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-medium"> {bed.name}</h1>
        <h2 className="font-bold text-lg py-4">${bed.price}.00</h2>
        <p className="text-md font-extralight w-98">{bed.desc} </p>
        <button className="rounded-full bg-gray-400 w-full my-5 p-4 text-md font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};
