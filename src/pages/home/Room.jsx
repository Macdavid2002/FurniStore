import { RoomCard } from "../../cards/RoomCard";
import { RoomList } from "../../data/RoomsData";
import { useState } from "react";
export const Rooms = () => {
  const [roomArray, setRoomArray] = useState(RoomList);
  return <RoomCard roomArray={roomArray} />;
};
