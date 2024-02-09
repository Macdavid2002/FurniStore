import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="">
      <div className=" absolute top-28 ml-32 left-96 p-12 rounded-xl  border border-blue-400  items-left flex flex-col ">
        <h1 className="font-bold text-2xl p-4 "> Register </h1>
        <input
          type="text"
          placeholder="Username"
          className=" border border-y-2 border-x-2 rounded-lg border-blue-400 h-12 w-60 p-4 m-2 focus:outline-none"
        />
        <br />
        <input
          type="pwd"
          placeholder="Password"
          className="border border-y-2 border-x-2 rounded-lg border-blue-400 h-12 w-60 p-4 m-2 focus:outline-none"
        />
        <br />
        <button
          className=" w-36 p-3 px-8  bg-blue-500 rounded-md text-white text-lg font-bold uppercase  \
              hover:bg-blue-400 hover:text-white flex  items-center text-center m-2"
        >
          Register
        </button>
        <Link to="/login" className="text-blue-400 font-bold text-lg m-2">
          Already Have an Account, Login
        </Link>
      </div>
    </div>
  );
}
