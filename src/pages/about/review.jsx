import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ReviewData } from "../../data/review";
import quote from "../../assets/quote-left.svg";
export const Review = () => {
  return (
    <div>
      <h1 className="text-2xl block text-center uppercase my-4">Testimonial</h1>
      <h1 className="text-4xl block text-center">Our Customers Reviews</h1>

      <div className="">
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
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {ReviewData.map((reviewItem) => (
            <SwiperSlide key={reviewItem.id}>
              <div key={reviewItem.id}>
                <div className="bg-[#F3F4F6]  p-4 m-8 rounded-md">
                  <img src={quote} className="h-10 ml-4" alt="" />
                  <span className="lg:flex items-center justify-between">
                    <p className="p-4 text-sm lg:w-[50%] text-left">
                      {reviewItem.review}
                    </p>
                    <img
                      src={reviewItem.furniturePic}
                      className="h-[200px]"
                      alt=""
                    />
                  </span>
                  <span className="p-4 flex gap-4">
                    <img
                      src={reviewItem.image}
                      className="h-10 w-10 rounded-full"
                      alt=""
                    />
                    <h2 className="text-md font-medium mt-3">
                      {reviewItem.name}{" "}
                    </h2>
                  </span>
                </div>
                <div> </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
