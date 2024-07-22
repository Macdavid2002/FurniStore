import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, mail } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup
      .string()
      .max(10, "Username can't exceed 10 characters")
      .required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email address required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password can't be longer than 20 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegisterEvent = async (data) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        mail,
        data.email,
        data.password
      );
      navigate("/account");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="my-20 ">
      <div className="items-center flex flex-col">
        <h1 className="font-medium text-2xl p-4 text-gray-500">Sign Up</h1>
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(handleRegisterEvent)}
        >
          <input
            type="text"
            placeholder="Username"
            className="border-2  text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
            {...register("username")}
          />
          <p className="text-red-500 px-3 text-sm">
            {errors.username?.message}
          </p>
          {/* Email Address Input */}
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border-2  text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72  m-2 focus:outline-none"
            {...register("email")}
          />
          {/* Email Error Message */}
          <p className="text-red-500 px-3 text-sm">{errors.email?.message}</p>
          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border-2  text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
              {...register("password")}
            />
            {/* Toggle Password visibility */}

          </div>
          {/* Password Error Message */}
          <p className="text-red-500 px-3 text-sm">
            {errors.password?.message}
          </p>

          <div className="relative">
            {/* Confirm Password Input */}
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border-2  text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72  m-2 focus:outline-none"
              {...register("confirmPassword")}
            />
            {/* Toggle Confirm Password visibility */}

          </div>
          {/* Confirm Password Error Message */}
          <p className="text-red-500 px-3 text-sm">
            {errors.confirmPassword?.message}
          </p>
          <button className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-2 flex items-center justify-center gap-2">
            Sign Up
          </button>
          <p className="text-gray-500 w-72 my-2 px-3 text-sm block text-center">
            <Link to="/login">Already have an account ? Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
