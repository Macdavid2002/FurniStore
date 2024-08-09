import { useState } from "react";
import { RugsCard } from "../../cards/RugsCard";
import { RugsData } from "./../../data/RugsData";
export const Rugs = () => {
  const [rugList, setRugList] = useState(RugsData);
  return (
    <div>
      <RugsCard rugList={rugList} setRugList={setRugList} />
    </div>
  );
};
