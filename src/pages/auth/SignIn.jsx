import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, googleProvider, twitterProvider } from "../../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import twitterIcon from "../../svg/icons8-twitter.svg";
import fbIcon from "../../svg/icons8-facebook.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useNavigate, Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
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
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Login successful", {
        autoClose: 1000,
      });
      navigate("/account");
    } catch (error) {
      console.error("Error logging in", error);
      toast.error("Error logging in", {
        autoClose: 1000,
      });
    }
  };

  // Handle Google Sign In
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google Login Successful", {
        autoClose: 1000,
      });
      navigate("/account");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      toast.error("Error Signing In with Google", {
        autoClose: 1000,
      });
    }
  };

  // Handle Twitter sign in
  const signInWithTwitter = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
      toast.success("Twitter Login Successful", {
        autoClose: 1000,
      });
      navigate("/account");
    } catch (err) {
      console.error("Error signing in with Twitter:", err.message);
      toast.error("Error signing in with Twitter", {
        autoClose: 1000,
      });
    }
  };

  // Toggle Password visibility
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="shadow-lg rounded-md 320:w-[85%] xs:w-[60%] sm:w-[45%] md:w-[45%] lg:w-[35%] xl:w-[28%] 912:w-[40%] 320:p-6 mx-auto ">
        <h1 className="font-medium text-3xl text-center text-black">Sign In</h1>
        {/* Email sign in form */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-1 py-4"
        >
          <input
            type="email"
            className="border-b border-black 320:w-56 375:w-64 md:w-72 py-4 mx-auto outline-none"
            placeholder="example@gmail.com"
            {...register("email")}
          />
          <p className="pt-2 px-3 md:px-5 text-xs text-red-500">
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
          <p className="pt-2 px-3 md:px-5 text-xs capitalize text-red-500">
            {errors?.password?.message}
          </p>

          <button
            type="submit"
            className="320:w-56 375:w-64 md:w-72 p-2 shadow-md text-black text-md font-normal mt-4 mx-auto flex items-center justify-center gap-2"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center gap-10 items-center my-2">
          <div className="border-t-2 border-gray-300 w-24"></div>
          <p className="text-center text-sm">or</p>
          <div className="border-t-2 border-gray-300 w-24"></div>
        </div>

        <span className="flex items-center justify-center gap-8 pb-4">
          {/* Google Sign In Button */}
          <button
            className="p-2 px-6 rounded-md bg-white shadow-md"
            onClick={signInWithGoogle}
          >
            <img src={googleIcon} className="h-5" alt="Google Icon" />
          </button>
          {/* Twitter Sign In Button */}
          <button
            className="p-2 px-6 rounded-md shadow-md"
            onClick={signInWithTwitter}
          >
            <img src={twitterIcon} className="h-5" alt="Twitter Icon" />
          </button>
          <button
            className="p-2 px-6 rounded-md shadow-md"
            onClick={signInWithTwitter}
          >
            <img src={fbIcon} className="h-6" alt="Twitter Icon" />
          </button>
        </span>
        <hr />
        <p className="text-sm text-center pt-4">
          Don't have an account?{" "}
          <Link to="/sign-up" className="font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
