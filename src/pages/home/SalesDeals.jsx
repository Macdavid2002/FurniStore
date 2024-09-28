import { SalesData } from "../../constants/index";
import { SalesDealsCard } from "../../ui/cards-skeleton/SalesDealsCard";
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
