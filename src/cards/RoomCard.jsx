export const RoomCard = ({ roomArray }) => {
  return (
    <div className="mt-20">
      <h1 className="p-8 text-3xl font-bold">Shop Room Collection</h1>
      <div className="  p-8 grid grid-cols-3 gap-12 ">
        {roomArray.map((roomItem, index) => (
          <div key={index}>
            <div className="p-10 border border-gray-400 rounded-md">
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
