import { useState } from "react";
import { SofasData } from "./../../data/SofasData";
import { SofasCard } from "./../../cards/SofasCard";
export const Sofas = () => {
  const [sofasList, setSofasList] = useState(SofasData);
  return <SofasCard sofasList={sofasList} setSofasList={setSofasList} />;
};
