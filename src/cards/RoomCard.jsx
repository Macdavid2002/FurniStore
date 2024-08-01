export const RoomCard = ({ roomArray }) => {
  return (
    <div className="mt-14">
      <div className="px-4 md:px-8 flex justify-between items-center">
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
        <h1 className="text-xl md:text-3xl font-bold text-gray-500">
          Shop By Room
        </h1>
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-14 md:w-80"></span>
      </div>
      <div className="p-4 md:p-8  grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {roomArray.map((roomItem, index) => (
          <div key={index}>
            <div className="p-8 md:p-10 border border-gray-400 rounded-md">
              <img
                src={roomItem.imgUrl}
                className="rounded-md"
                alt="Room pic"
              />
              <h1 className="py-4 text-xl">{roomItem.name} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
