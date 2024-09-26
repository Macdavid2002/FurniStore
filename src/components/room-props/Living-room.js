import room from "../../api/rooms.json";
import { LivingRoom } from "../../rooms/LivingRoom";
export const LivingRooms = () => {
  return (
    <div className="grid grid-cols-3">
      {room.livingRoom.map((livingRoom) => (
        <div key={livingRoom.id} className="grid grid-cols-3s">
          <LivingRoom
            name={livingRoom.name}
            id={livingRoom.id}
            price={livingRoom.price}
            imgUrl={livingRoom.imgUrl}
          />
        </div>
      ))}
    </div>
  );
};
