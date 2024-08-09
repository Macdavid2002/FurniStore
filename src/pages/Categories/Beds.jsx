import { useState } from "react";
import { BedCard } from "../../cards/BedsCard";
import { BedsData } from "../../data/BedsData";
export const Beds = () => {
  const [bedList, setBedList] = useState(BedsData);
  return (
    <div>
      <BedCard bedList={bedList} setBedList={setBedList} />
    </div>
  );
};
