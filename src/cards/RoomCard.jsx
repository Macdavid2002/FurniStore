export const RoomCard = ({ roomArray }) => {
  return (
    <div className="mt-14">
      <div className="px-4 md:px-8 block text-center">
        <h1 className="text-xl md:text-3xl font-medium  text-gray-500">
          Shop By Room
          <div className="border border-black rounded-full border-t-1  w-32 md:w-50 my-4 mx-auto"></div>
        </h1>
      </div>
      <div className="p-4 md:p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
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
