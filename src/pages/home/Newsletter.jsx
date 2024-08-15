export const Newsletter = () => {
  return (
    <div className="w-[98%] rounded-md mx-auto mb-4 md:p-24 bg-gray-500 p-4">
      <h1 className="text-xl p-4 md:text-4xl text-white md:text-center">
        Subscribe To Our Newsletter
      </h1>
      <p className="text-md md:text-xl text-white md:text-center p-2">
        For updates on new arrivals and many more
      </p>
      <div className="flex gap-4 items-center justify-center mt-3">
        <input
          type="text"
          className="p-3  rounded-full border border-white bg-transparent placeholder:text-white placeholder:text-sm md:placeholder:text-[16px]  w-full  md:w-[50%] outline-none"
          placeholder="Email Address"
        />
        <button className="text-sm md:text-[16px] p-3 rounded-full border border-white text-white lg:w-[18%]">
          Subscribe
        </button>
      </div>
    </div>
  );
};
