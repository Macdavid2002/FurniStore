import { RoomCard } from "../../cards/RoomCard";
import { roomList } from "../../data/rooms-data";
export const Rooms = () => {
  return (
    <div>
      <div className="px-4 md:px-8 block text-center mt-14">
        <h1 className="text-xl md:text-3xl text-gray-500">
          Shop By Room
          <div className="border border-black rounded-full border-t-2  w-32 md:w-50 my-4 mx-auto"></div>
        </h1>
      </div>
      <div className="p-4 md:p-8  grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
        {roomList.map((rooms, index) => (
          <div key={index}>
            <RoomCard name={rooms.name} id={rooms.id} imgUrl={rooms.imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};
