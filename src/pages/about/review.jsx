import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import quote from "../../assets/quote-left.svg";
import guy from "../../assets/guy.jpg";
import man from "../../assets/man.jpg";
import lady from "../../assets/lady.jpg";
import chair from "../../assets/Chair1.png";
import chaise from "../../assets/chaise.png";
import sofa from "../../assets/sofa.png";
export const Review = () => {
  const ReviewData = [
    {
      id: 1,
      name: "Nicholas Smith",
      review:
        "Meubles has truly transformed my home! I recently bought a sofa, and I’m incredibly impressed with the craftsmanship and attention to detail. The design strikes a perfect balance between modern and timeless, fitting seamlessly into my decor. The quality is evident in every aspect, from the materials to the finish, and I know these pieces will last for years. I'm so glad I chose Meubles for my new home—they’ve exceeded my expectations in both style and durability..",
      image: guy,
      furniturePic: sofa,
    },
    {
      id: 2,
      name: "Melanie Jones",
      review:
        "I absolutely love the new chair I got from Meubles! It's the perfect blend of elegance and sturdiness, and the design truly elevates the entire look of my bedroom. The craftsmanship is top-notch, and you can tell it's built to last. The customer service was fantastic—helpful, friendly, and attentive throughout the entire process. Plus, the delivery was quick and completely hassle-free. I highly recommend Meubles to anyone looking for stylish, high-quality furniture. I couldn’t be happier with my purchase!",
      image: lady,
      furniturePic: chair,
    },
    {
      id: 3,
      name: "Matthew Allen",
      review:
        "I couldn't be happier with my chaise lounge from Meubles! It's not only incredibly stylish but also exceptionally comfortable. It fits perfectly in my living room and has quickly become the favorite spot for my whole family. The craftsmanship and attention to detail are outstanding, and the quality is far beyond what I expected—worth every penny! Meubles truly delivers on both style and comfort.",
      image: man,
      furniturePic: chaise,
    },
  ];

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
