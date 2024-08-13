import { useNavigate } from "react-router-dom";

import { auth, googleProvider, twitterProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import twitterIcon from "../../assets/icons8-twitter.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Corrected import for toast styles

export default function SignIn() {
  const navigate = useNavigate();

  // Handle Google Sign In
  const signInWithGoogle = async (data) => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Sign-In Successful");
      navigate("/account");
      console.log(data);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      toast.error("Error Signing In with Google");
    } finally {
    }
  };
  const signInWithTwitter = async (data) => {
    try {
      await signInWithPopup(auth, twitterProvider);
      toast.success("Twitter Sign-In Successful");
      navigate("/");
      console.log(data);
    } catch (err) {
      console.error("Error Signing ing", err.message);
      toast.error("Error");
    }
  };
  return (
    <div className="my-20">
      <div className="items-center flex flex-col">
        <h1 className="font-medium text-2xl p-4 text-gray-500">Sign In</h1>

        {/* Google Sign In Button */}
        <button
          className={`w-72 h-12 bg-white border border-gray-400 text-gray-500 text-sm font-medium uppercase m-2 flex items-center justify-center gap-2 
 
          `}
          onClick={signInWithGoogle}
        >
          <img src={googleIcon} alt="Google Icon" />
          Sign In With Google
        </button>
        <button
          className={`w-72 h-12 bg-[#03A9F4] text-white text-sm font-normal uppercase  m-2 flex items-center justify-center gap-2 
 
          `}
          onClick={signInWithTwitter}
        >
          <img src={twitterIcon} className="h-10" alt="Twitter Icon" />
          Sign In With Twitter
        </button>
      </div>
    </div>
  );
}
