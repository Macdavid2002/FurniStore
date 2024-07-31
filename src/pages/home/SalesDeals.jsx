import { SalesDealsCard } from "../../cards/SalesDealsCard";
import { useState } from "react";
export const SalesDeals = () => {
  const [salesDealsList, setDealsList] = useState(SalesDealsCard);
  return <SalesDealsCard newArrivalList={salesDealsList} />;
};
