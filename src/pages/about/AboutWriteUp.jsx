import React from "react";

export const AboutWriteUp = () => {
  return (
    <div>
      <h1 className="text-2xl px-8">About Our Design</h1>
      <div className="grid grid-cols-1 lg:flex lg:items-center lg: justify-between">
        <p className="text-md p-8 md:[w-100%] lg:w-[50%]">
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
      <div className="grid grid-cols-1 lg:flex lg:items-center lg: justify-between">
        <img
          src="https://cdn-cms-assets.article.com/E1wp7AyJ6fHRLPSH7CJnP-2bbd85ff0917c5f054dfa1991a18d242?w=1300&q=80&fm=webp&fit=max"
          alt={"Furniture"}
          className="p-2  lg:p-4 w-[100%] lg:w-[50%] object-cover h-[300px]"
        />
        <p className="text-md p-8 md:[w-100%] lg:w-[50%]">
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
    </div>
  );
};
