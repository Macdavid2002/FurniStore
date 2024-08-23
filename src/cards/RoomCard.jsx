import { Link } from "react-router-dom";
export const RoomCard = ({ roomArray }) => {
  return (
    <div className="mt-14">
      <div className="px-4 md:px-8 block text-center">
        <h1 className="text-xl md:text-3xl   text-gray-500">
          Shop By Room
          <div className="border border-black rounded-full border-t-2  w-32 md:w-50 my-4 mx-auto"></div>
        </h1>
      </div>
      <div className="p-4 md:p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {roomArray.map((roomItem) => (
          <div key={roomItem.id}>
            <div className="">
              <img src={roomItem.imgUrl} className="" alt="" />
              <div className="bg-gray-300 bg-opacity-45 ">
                <h1
                  className="py-4 text-xl text-center
                "
                >
                  {roomItem.name}
                </h1>
                <Link to="/">
                  <button className="text-center w-full py-2">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
