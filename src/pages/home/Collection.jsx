export const Collection = () => {
  return (
    <div className="flex justify-center items-center ">
      <img
        src="https://cdn-cms-assets.article.com/7wvGa6xhkAjvtxnAvh3127-f8d5da377ca1a3b5ae2218a10bd73b6d?w=1300&q=80&fm=webp&fit=max"
        alt=""
        className="w-full"
      />
      <div className="absolute block text-center">
        <h1 className="text-4xl text-white font-bold">
          Your furniture says a lot about you{" "}
        </h1>
        <p className="m-2 text-2xl text-white font-semibold text-center">
          Pick from our variety of collections
        </p>
        <button className="m-2 p-3 rounded-md bg-gray-300 font-semibold ">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
};
