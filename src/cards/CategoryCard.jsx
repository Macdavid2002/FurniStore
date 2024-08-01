export const CategoryCard = ({ categoryList }) => {
  return (
    <div className="mt-20">
      <div className="px-8 flex justify-between items-center">
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-80"></span>
        <h1 className="p-8 text-3xl font-bold text-gray-500">
          Shop By Category
        </h1>
        <span className="border border-gray-400 rounded-full border-t-2 border-b-2 w-80"></span>
      </div>

      <div className="  p-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {categoryList.map((categoryList, id) => (
          <div key={id}>
            <div className="p-10 border border-gray-400 rounded-md ">
              <img
                src={categoryList.imgUrl}
                className="rounded-md "
                alt="Room pic"
              />
              <h1 className="py-4 text-xl">{categoryList.name} </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
