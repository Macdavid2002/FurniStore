import { useState } from "react";
import { ChairData } from "../../data/ChairData";
import { ChairCard } from "./../../cards/ChairCard";
export const Chairs = () => {
  const [chairList, setChairList] = useState(ChairData);
  return <ChairCard chairList={chairList} setChairList={setChairList} />;
};
