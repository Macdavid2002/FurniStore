import { Arrival } from "../data/newArrivals";
export const NewArrivals = () => {
  return (
    <div>
      <h1 className="text-xl">New Arrivals</h1>
      <div className="grid grid-cols-4">
        {Arrival.map((arrivalArray) => (
          <ul key={arrivalArray.id}>
            <img src={arrivalArray.img} alt="" />
            <li>{arrivalArray.name} </li>
            <li>
              <div className="flex gap-4">
                <li> {arrivalArray.price} </li>
                <li className="line-through text-gray-300">
                  {arrivalArray.formerPrice}{" "}
                </li>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
