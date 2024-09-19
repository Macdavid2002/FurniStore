import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, googleProvider, twitterProvider } from "../../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import twitterIcon from "../../assets/icons8-twitter.svg";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Email Form Validation
  const schema = yup.object().shape({
    email: yup.string().email().required("Email address required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission for email/password sign up
  const submitHandler = async (data) => {
    try {
     await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success("Login successful");
      navigate("/account");
    } catch (error) {
      console.error("Error signing up", error);
      toast.error("Error signing up");
    }
  };

  // Handle Google Sign In
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Login Successful");
      navigate("/account");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      toast.error("Error Signing In with Google");
    }
  };

  // Handle Twitter sign in
  const signInWithTwitter = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
      toast.success("Twitter Login Successful");
      navigate("/account");
    } catch (err) {
      console.error("Error signing in with Twitter:", err.message);
      toast.error("Error signing in with Twitter");
    }
  };

  // Toggle Password visibility
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="my-16">
      <div className="shadow-lg rounded-md 320:w-[85%] xs:w-[60%] sm:w-[45%] md:w-[45%] lg:w-[35%] xl:w-[28%] 912:w-[40%] 320:p-6 mx-auto">
        <h1 className="font-medium text-3xl text-center text-black">Sign In</h1>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 py-4"
        >
          <input
            type="text"
            className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
            placeholder="example@gmail.com"
            {...register("email")}
          />
          <p className="pt-2 px-5 text-sm text-red-500">
            {errors?.email?.message}
          </p>

          <span className="text-center relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
              placeholder="Password"
              {...register("password")}
            />
            {/* Icons For Toggling password visibility */}
            <div className="absolute top-8 md:right-4 360:right-5 390:right-4 400:right-8 320:right-2 912:right-4">
              {showPassword ? (
                <EyeSlashIcon
                  className="w-4 cursor-pointer"
                  onClick={handlePasswordToggle}
                />
              ) : (
                <EyeIcon
                  className="w-4 cursor-pointer"
                  onClick={handlePasswordToggle}
                />
              )}
            </div>
          </span>
          <p className="pt-2 px-5 text-sm capitalize text-red-500">
            {errors?.password?.message}
          </p>

          <button
            type="submit"
            className="320:w-56 375:w-64 md:w-72 p-2 shadow-md text-black text-md font-normal uppercase mt-4 mx-auto flex items-center justify-center gap-2"
          >
            Login
          </button>
        </form>

        <p className="text-center">or</p>

        <span className="grid grid-cols-1">
          {/* Google Sign In Button */}
          <button
            className="320:w-56 375:w-64 md:w-72 p-4 bg-white shadow-md text-gray-500 text-sm font-medium uppercase my-2 mx-auto flex items-center justify-center gap-2"
            onClick={signInWithGoogle}
          >
            <img src={googleIcon} alt="Google Icon" />
            Sign In With Google
          </button>
          {/* Twitter Sign In Button */}
          <button
            className="320:w-56 375:w-64 md:w-72 p-2 bg-[#03A9F4] shadow-md text-white text-sm font-normal uppercase my-2 mx-auto flex items-center justify-center gap-2"
            onClick={signInWithTwitter}
          >
            <img src={twitterIcon} className="h-10" alt="Twitter Icon" />
            Sign In With Twitter
          </button>
        </span>
      </div>
    </div>
  );
}
