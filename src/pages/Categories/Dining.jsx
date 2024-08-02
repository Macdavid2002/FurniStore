import { useState } from "react";
import { DiningData } from "./../../data/DiningData";
import { DiningCard } from "../../cards/DiningCard";
export const Dining = () => {
  const [diningList, setDiningList] = useState(DiningData);
  return (
    <div>
      <DiningCard diningList={diningList} setDiningList={setDiningList} />
    </div>
  );
};
