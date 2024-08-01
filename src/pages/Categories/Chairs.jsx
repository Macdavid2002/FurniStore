import { useState } from "react";
import { ChairData } from "../../components/ChairData";
export const Chairs = () => {
  const [chairList, setChairList] = useState(ChairData);
  return <Chairs chairList={chairList} setChairList={setChairList} />;
};
