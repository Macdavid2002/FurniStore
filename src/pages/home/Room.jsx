import { RoomCard } from "./RoomCard";
import { RoomList } from "../../data/roomsData";
import { useState } from "react";
export const Rooms = () => {
  const [roomArray, setRoomArray] = useState(RoomList);
  return <RoomCard roomArray={roomArray} />;
};
