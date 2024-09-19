import { Review } from "./review";
import { Why } from "./why";

export const About = () => {
  return (
    <div className="bg-[#fdfdfd]">
      <div className="relative">
        <img
          src="https://cdn-cms-assets.article.com/4zIou4ravKGyqOkCCHehHe-4756b2bd81d0a540c4f452971a03dc92?w=1300&q=80&fm=webp&fit=max"
          alt=""
          className="w-full h-[400px] "
        />
        <h1 className="text-lg md:text-4xl text-white font-bold absolute top-24 left-2 md:left-8">
          We are a Company with the vision of offering exquisite and high
          standard product to our customers we combine style and quality
        </h1>
      </div>
      <div className="py-10">
        <h1 className="text-3xl px-8 text-black">MEUBLES</h1>

        <p className="text-md text-black font-light w-full px-8 py-4">
          At Meubles, quality isn't just a buzzword—it's a promise. We
          meticulously select the finest materials, combining durability with
          sustainability, to create furniture that stands the test of time. Our
          skilled artisans craft each piece with precision and care, ensuring
          that every item meets our high standards for strength and longevity.
          Whether it's a classic sofa or a modern dining set, our commitment to
          quality guarantees furniture that not only looks good but also
          performs beautifully in your home
        </p>
      </div>
      <Why />
      <h1 className="text-2xl px-8">About Our Design</h1>
      <div className="bg-[#FDFDFD] grid grid-cols-1 lg:flex lg:items-center lg: justify-between">
        <p className="text-md p-8 md:[w-100%] lg:w-[50%] ">
          Design is at the heart of what we do at Meubles. Our team of talented
          designers draws inspiration from both classic and contemporary styles
          to create pieces that are both stylish and functional. We believe that
          good design enhances the way you live, which is why we focus on
          creating furniture that seamlessly blends aesthetics with
          practicality. From sleek, modern lines to timeless, traditional
          details, our collections offer something for every taste, transforming
          your space into a reflection of your unique personality and lifestyle
        </p>

        <img
          src="https://cdn-cms-assets.article.com/4QthbXUvhZHJLjV9s5ork7-baf11e3abf9ac4e8196e5ccb3b8ec052?w=1300&q=80&fm=webp&fit=max"
          alt={"Furniture"}
          className="p-2 mt-4 lg:p-4 w-[100%] lg:w-[50%] object-cover h-[300px]"
        />
      </div>
      <h1 className="text-2xl p-8">Our Commitment to Quality and Design</h1>
      <div className="bg-[#FDFDFD] grid grid-cols-1 lg:flex lg:items-center lg: justify-between">
        <img
          src="https://cdn-cms-assets.article.com/E1wp7AyJ6fHRLPSH7CJnP-2bbd85ff0917c5f054dfa1991a18d242?w=1300&q=80&fm=webp&fit=max"
          alt={"Furniture"}
          className="p-2  lg:p-4 w-[100%] lg:w-[50%] object-cover h-[300px]"
        />
        <p className="text-md p-8 md:[w-100%] lg:w-[45%] ">
          At Meubles, we believe that great furniture starts with great design
          and quality craftsmanship. Our design philosophy revolves around
          creating beautiful, timeless pieces that elevate your living space.
          Each item in our collection is thoughtfully designed, blending form
          and function to suit modern lifestyles. We prioritize using
          high-quality materials and sustainable practices to ensure our
          furniture not only looks stunning but also stands the test of time.
          With a keen eye for detail and a passion for excellence, our team is
          dedicated to delivering furniture that exceeds your expectations in
          both style and durability.
        </p>
      </div>
      <Review />
    </div>
  );
};
