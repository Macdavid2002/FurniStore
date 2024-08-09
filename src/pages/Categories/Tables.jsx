import { useState } from "react";
import { TableData } from "./../../data/TableData";
import { TableCard } from "./../../cards/TableCard";
export const Tables = () => {
  const [tableList, setTableList] = useState(TableData);
  return <TableCard tableList={tableList} setTableList={setTableList} />;
};
