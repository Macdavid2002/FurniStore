import { useState } from "react";
import { LightingCard } from "../../cards/LightingCard";
import { LightingData } from "../../data/LightingData";
export const Lighting = () => {
  const [lightingList, setLightingList] = useState(LightingData);
  return (
    <div>
      <LightingCard lightingList={lightingList} setLighting={setLightingList} />
    </div>
  );
};
