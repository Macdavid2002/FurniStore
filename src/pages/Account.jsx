import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
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
    <div className="bg-gray-300 min-h-screen">
      <div className="p-4">
        <div className="flex gap-4 justify-between items-center py-2 ">
          <h1 className="text-2xl font-bold">MY ACCOUNT</h1>
          <button
            className="bg-gray-500 text-white text-lg font-small px-4 py-2 rounded-md hover:bg-gray-400 flex items-center gap-2"
            onClick={signOutFunction}
          >
            Logout
            <ArrowRightOnRectangleIcon className="w-4 h-4" />
          </button>
        </div>
        <div>
          <img src={user?.photoURL} alt="" className="h-10 w-10 rounded-full" />
          <h1>{user?.displayName} </h1>
          <p>{user?.email} </p>
        </div>
      </div>
    </div>
  );
};
