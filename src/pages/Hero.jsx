// FurnitureCarousel.js

const images = [
  "https://cdn-cms-assets.article.com/53lavDM2OqsLONcoC1r0dw-dbf079177b45c8d70d15a642e114af1c?w=1300&q=80&fm=webp&fit=max",
];

export const Hero = () => {
  return (
    <div className="">
      {/* Image carousel */}
      <div className=" ">
        {images.map((image, index) => (
          <div key={index} className=" w-full h-64 md:h-96 lg:h-120 ">
            {/* <div className="absolute top-64 left-1/4 ">
              <h1 className="relative text-white font-medium text-4xl pb-5 w-3/5 ml-16 uppercase">
                Give Your Apartment A Unique Look With Simplicity And Style
              </h1>
              <p className="text-gray-400 font-light text-2xl pb-5  mx-44  ">
                Keep things simple but exquisite
              </p>
            </div> */}
            <img
              src={image}
              alt={"Furniture"}
              className="w-full h-[500px] object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};
