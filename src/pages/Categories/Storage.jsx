import { useState } from "react";
import { StorageCard } from "./../../cards/StorageCard";
import { StorageData } from "./../../data/StorageData";
export const Storage = () => {
  const [storageList, setStorageList] = useState(StorageData);
  return (
    <StorageCard storageList={storageList} setStorageList={setStorageList} />
  );
};
