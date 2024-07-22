export const BestSellerCard = ({ bestSellerList }) => {
  return (
    <div className="">
      <h1 className="p-8 text-3xl font-bold">Shop Bestsellers </h1>
      <p className="p-4 px-8 text-2xl font-light">
        These styles are our all time fan favorites{" "}
      </p>
      <div className="  p-8 grid grid-cols-3 gap-12">
        {bestSellerList.map((bestSellerItem, id) => (
          <div key={id}>
            <div className="p-10 border border-gray-400 rounded-md ">
              <img
                src={bestSellerItem.imgUrl}
                className="rounded-md "
                alt="Room pic"
              />
              <h1 className="py-4 text-xl">{bestSellerItem.name} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
