import "swiper/swiper-bundle.css";
import guy from "../../assets/guy.jpg";
import man from "../../assets/man.jpg";
import lady from "../../assets/lady.jpg";
import female from "../../assets/female.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

export const ReviewCard = () => {
  const ReviewData = [
    {
      id: 1,
      name: "Nicholas Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? Sunt dolorem pariatur reprehenderit laboriosam voluptatibus, provident vel harum fugit optio. Quidem dolores inventore explicabo ea!",
      image: guy,
      rating: 4,
    },
    {
      id: 2,
      name: "Melanie Jones",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? Sunt dolorem pariatur reprehenderit laboriosam voluptatibus, provident vel harum fugit optio. Quidem dolores inventore explicabo ea!",
      image: lady,
      rating: 5,
    },
    {
      id: 3,
      name: "Matthew Allen",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? Sunt dolorem pariatur reprehenderit laboriosam voluptatibus, provident vel harum fugit optio. Quidem dolores inventore explicabo ea!",
      image: man,
      rating: 3,
    },
    {
      id: 4,
      name: "Ella Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? Sunt dolorem pariatur reprehenderit laboriosam voluptatibus, provident vel harum fugit optio. Quidem dolores inventore explicabo ea!",
      image: female,
      rating: 4,
    },
  ];
  // Function to display star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<SolidStarIcon key={i} className="w-4 text-black" />);
      } else {
        stars.push(<StarIcon key={i} className="w-4 text-black" />);
      }
    }
    return stars;
  };
  return (
    <div>
      <h1 className="text-xl md:text-2xl block text-center uppercase my-8 font-semibold">
        Testimonial
      </h1>
      <h1 className="text-2xl md:text-3xl block text-center font-bold">
        Our Customers Reviews
      </h1>

      <div className="relative flex p-4 gap-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={-60} // Adjust spacing to overlap slides
          slidesPerView={1.5} // Show half of the next slide on both sides
          centeredSlides={true}
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
            320: { slidesPerView: 1 },
            // 420: { slidesPerView: 1 },
            640: { slidesPerView: 2 }, // Adjust for responsive
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {ReviewData.map((reviewItem) => (
            <SwiperSlide key={reviewItem.id}>
              <div className="bg-[#F3F4F6] p-4 my-10 rounded-md shadow-lg w-[85%] mx-auto">
                <img
                  src={reviewItem.image}
                  className="h-16 w-16 mx-auto rounded-full object-cover"
                  alt={reviewItem.name}
                />
                <p className="p-4 text-sm md:text-md w-full text-center">
                  {reviewItem.review}
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium mt-3 text-center">
                    {reviewItem.name}
                  </h2>
                  <p className="flex items-center gap-2">
                    {renderStars(reviewItem.rating)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div></div>
        <div></div>

        {/* Pagination */}
        <div className="swiper-pagination mb-4 flex justify-center"></div>
      </div>
    </div>
  );
};
