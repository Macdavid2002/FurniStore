import quote from "../../assets/quote-left.svg";
import guy from "../../assets/guy.jpg";
import man from "../../assets/man.jpg";
import lady from "../../assets/lady.jpg";
import female from "../../assets/female.jpeg";

export const ReviewCard = () => {
  const ReviewData = [
    {
      id: 1,
      name: "Nicholas Smith",
      review:
        "Meubles has truly transformed my home! I recently bought a sofa, and I’m incredibly impressed with the craftsmanship and attention to detail. The design strikes a perfect balance between modern and timeless, fitting seamlessly into my decor. The quality is evident in every aspect, from the materials to the finish, and I know these pieces will last for years. I'm so glad I chose Meubles for my new home—they’ve exceeded my expectations in both style and durability.",
      image: guy,
    },
    {
      id: 2,
      name: "Melanie Jones",
      review:
        "I absolutely love the new chair I got from Meubles! It's the perfect blend of elegance and sturdiness, and the design truly elevates the entire look of my bedroom. The craftsmanship is top-notch, and you can tell it's built to last. The customer service was fantastic—helpful, friendly, and attentive throughout the entire process. Plus, the delivery was quick and completely hassle-free. I highly recommend Meubles to anyone looking for stylish, high-quality furniture. I couldn’t be happier with my purchase!",
      image: lady,
    },
    {
      id: 3,
      name: "Matthew Allen",
      review:
        "I couldn't be happier with my chaise lounge from Meubles! It's not only incredibly stylish but also exceptionally comfortable. It fits perfectly in my living room and has quickly become the favorite spot for my whole family. The craftsmanship and attention to detail are outstanding, and the quality is far beyond what I expected—worth every penny! Meubles truly delivers on both style and comfort.",
      image: man,
    },
    {
      id: 4,
      name: "Ella Smith",
      review:
        "I feel ecstatic buying my living room set from Meubles! Apart from being comfortable and sturdy it has an exquisite look of class and style . It's quality is exceptional far beyond what I expected and it is extremely cost effective! Meubles is the true epitome of both elegance and comfort.",
      image: female,
    },
  ];

  return (
    <div>
      <h1 className="text-xl md:text-2xl block text-center uppercase my-8 font-cinzel font-semibold">
        Testimonial
      </h1>
      <h1 className="text-2xl md:text-3xl block text-center font-cinzel font-bold">
        Our Customers Reviews
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  p-4 gap-4 ">
        {ReviewData.map((reviewItem) => (
          <div className="bg-[#F3F4F6] p-2 my-2 rounded-md" key={reviewItem.id}>
            <img src={quote} className="h-10 ml-4" alt="" />
            <p className="p-4 text-xs md:text-xs font-cinzel w-full text-left">
              {reviewItem.review}
            </p>

            <span className="p-4 flex gap-4">
              <img
                src={reviewItem.image}
                className="h-10 w-10 rounded-full"
                alt=""
              />
              <h2 className="text-md font-medium mt-3 font-cinzel">
                {reviewItem.name}
              </h2>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
