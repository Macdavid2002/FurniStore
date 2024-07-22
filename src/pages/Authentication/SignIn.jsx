import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import { EyeSlashIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);
  // React Hook Form Validation
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email address required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const handleLoginEvent = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/account");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };
  const clearPasswordFunction = () => {
    setPasswordInput("");
  };

  // Google Sign In Authentication
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/account");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  return (
    <div className="my-20 ">
      <div className="items-center flex flex-col">
        <h1 className="font-medium text-2xl p-4 text-gray-500">Sign In</h1>
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(handleLoginEvent)}
        >
          {/* Email Address Input */}
          <input
            type="email"
            placeholder="E-mail address"
            className="border-2  text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72  m-2 focus:outline-none "
            {...register("email")}
            onChange={(e) => {
              setPasswordInput(e.target.value);
              setShowClearButton(!showClearButton);
            }}
            value={passwordInput}
          />
          <p className="text-red-500 text-sm px-2">{errors.email?.message}</p>
          <span className="relative bottom-7 left-64 cursor-pointer">
            {showClearButton && (
              <XMarkIcon
                className="w-5 relative  right-2 -top-2 text-gray-500"
                onClick={clearPasswordFunction}
              />
            )}
          </span>
          {/* Error Message for Email */}

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border-2  text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72  m-2 focus:outline-none"
              {...register("password")}
            />
            {/* Error Message for Password */}
            <p className="text-red-500 text-sm px-2 ">
              {errors.password?.message}
            </p>
            
          </div>
          {/* Sign In button */}
          <button
            type="submit"
            className="w-72 h-12 bg-gray-500  text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white block m-2 text-center"
          >
            Sign In
          </button>
          <p className="text-gray-400 w-72 block text-center text-sm ">or</p>
        </form>
        {/* Google Sign In Button */}
        <button
          className="w-72 h-12 bg-gray-500  text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-2 flex items-center justify-center gap-2"
          onClick={signInWithGoogle}
        >
          <img src={googleIcon} alt="Google Icon" />
          Sign In With Google
        </button>
        <p className="text-gray-500 w-72 my-2 px-3 text-sm block text-center">
          <Link to="/signup" className=" ">
            Don't have an account? Sign Up
          </Link>
        </p>
        {/* Sign Up Link */}
      </div>
    </div>
  );
}
