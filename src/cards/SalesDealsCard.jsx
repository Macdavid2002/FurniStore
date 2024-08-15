import {
  ShoppingBagIcon,
  ArrowRightIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const SalesDealsCard = ({ salesDealsList }) => {
  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<SolidStarIcon key={i} className="h-6 w-6 text-gray-400" />);
      } else {
        stars.push(<StarIcon key={i} className="h-6 w-6 text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div>
      <div className="flex justify-between items-center z-10">
        <h1 className="p-8 text-3xl ">Sales Deals</h1>
        <p className="flex items-center justify-center text-md px-4 cursor-pointer">
          Show More <ArrowRightIcon className="w-6 h-3" />
        </p>
      </div>
      <div className="p-1 md:p-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {salesDealsList.map((salesItem, index) => (
            <SwiperSlide key={salesItem.id}>
              <ul className="border border-gray-400 rounded-md p-4 relative">
                <div className="relative">
                  <img
                    src={salesItem.img}
                    className="relative rounded-md w-full"
                    alt={salesItem.alt}
                  />
                  <span className="absolute top-2 left-0 bg-gray-400 w-24 h-9 text-white  p-2 clip-ribbon">
                    {salesItem.off} off
                  </span>
                  <span className="absolute top-1 right-0 m-2">
                    <HeartIcon className="w-9 h-9 text-white cursor-pointer bg-gray-400 p-2 rounded-full" />
                  </span>
                </div>
                <span className="flex gap-1 py-2">
                  {renderStars(salesItem.rating)}
                </span>
                <li className="text-[16px] ">{salesItem.name}</li>
                <li>
                  <ul className="flex justify-between py-2">
                    <li>${salesItem.price}</li>
                    <li className="line-through text-gray-400">
                      ${salesItem.formerPrice}
                    </li>
                  </ul>
                  {/* Add to cart button */}
                  <button className="w-[100%] p-2 bg-gray-400 rounded-md flex justify-center gap-4 ">
                    <ShoppingBagIcon className="w-6 text-black text-xl" />
                    Add to cart
                  </button>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
