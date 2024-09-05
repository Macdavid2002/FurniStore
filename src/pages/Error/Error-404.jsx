import { Link } from "react-router-dom";
export const Error = () => {
  return (
    <div className="block text-center p-32">
      <h1 className="text-gray-500 text-xl p-3">404 | Page Not Found</h1>
      
      <Link to="/" >
        <button className="w-64 h-12 bg-gray-500 rounded-md text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-4 ">
          Back to homepage
        </button>
      </Link>
    </div>
  );
};
