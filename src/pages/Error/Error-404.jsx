import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="block text-center md:p-32 py-32">
        <h1 className="text-gray-500 text-md md:text-xl p-3">
          404 | Page Not Found
        </h1>
        <Link to="/">
          <button className="w-64 h-12 mx-auto bg-gray-500 rounded-md text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};
