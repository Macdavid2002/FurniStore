import { useState } from "react";
import { BenchesData } from "../../data/BenchesData";
import { BenchesCard } from "../../cards/BenchesCard";
export const Benches = () => {
  const [benchList, setBenchList] = useState( BenchesData );
  return (
    <div>
      <BenchesCard benchList={benchList} setBenchList={setBenchList} />
    </div>
  );
};
