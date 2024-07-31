import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export const Account = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const signOutFunction = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="bg-gray-300">
      <div className="container my-auto px-4   ">
        <div className="flex gap-4 justify-between items-center py-2 ">
          <h1 className="text-2xl font-bold">MY ACCOUNT</h1>
          <button
            className="bg-gray-500 text-white text-lg font-small px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={signOutFunction}
          >
            Logout
            <ArrowRightOnRectangleIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex">
        <ul className="p-4">
          <li className="p-4">Account Information</li>
          <li className="p-4">Orders </li>
          <li className="p-4">Wishlist</li>
          <li className="p-4"> Cart </li>
        </ul>
      </div>
    </div>
  );
};
