import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="block text-center p-32">
      <h1 className="text-gray-500 text-4xl p-3">Page Not Found</h1>
      <p className="text-xl text-gray-500 p-2 font-light">The page you are looking for does not exist.</p>
      <Link to="/" >
        <button className="w-64 h-12 bg-gray-500 rounded-md text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-4 ">
          Back to homepage
        </button>
      </Link>
    </div>
  );
};
