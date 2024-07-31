import { Link } from "react-router-dom";
export const Sales = () => {
  return (
    <div className="bg-white text-center p-2">
      <p>
        50% off sales ongoing
        <Link
          to="/"
          className="text-blue-400 p-2 underline text-lg
        "
        >
          Shop Now
        </Link>
      </p>
    </div>
  );
};
