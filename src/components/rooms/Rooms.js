import rooms from "../../data/rooms.json";
import { RoomsLayout } from "../../ui/rooms-layout/RoomsLayout";
export const Rooms = () => {
  return (
    <div className="grid grid-cols-3">
      {rooms.rooms.map((room) => (
        <div key={room.id} className="grid grid-cols-3s">
          <RoomsLayout
            name={room.name}
            id={room.id}
            price={room.price}
            imgUrl={room.imgUrl}
          />
        </div>
      ))}
    </div>
  );
};
