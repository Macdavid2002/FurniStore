import { SalesData } from "../../data/SalesDealsData";
import { SalesDealsCard } from "../../cards/SalesDealsCard";
import { useState } from "react";

export const SalesDeals = () => {
  const [salesDealsList, setDealsList] = useState(SalesData);
  return (
    <SalesDealsCard
      salesDealsList={salesDealsList}
      setDealsList={setDealsList}
    />
  );
};
