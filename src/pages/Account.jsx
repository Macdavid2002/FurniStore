import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth,database } from "../config/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export const Account = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const signOutFunction = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(database, "users", auth.currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, []);
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-300">
      <div className="container my-auto px-4   ">
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
          <p>Full Name: {userData.fullName}</p>
          <h1> {user?.email} </h1>
          <p>Username: {userData.username}</p>
        </div>
      </div>
    </div>
  );
};

