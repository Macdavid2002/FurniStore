export const Newsletter = () => {
  return (
    <div className="bg-black h-60">
      <div className="block text-center">
        <h1 className="pt-8 p-4 text-3xl font-bold text-white">
          Get new product arrival and sales in your inbox
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-2/6 p-3 m-2 rounded-full outline-none placeholder:p-2"
            placeholder="Your email address..."
          />
          <button className="bg-gray-400 text-white w-2/6 p-3 m-2 rounded-full text-lg font-medium">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};
