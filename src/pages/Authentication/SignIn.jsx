// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { auth, provider } from "../../config/firebase";
// import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// import googleIcon from "../../assets/google_logo.png";
// import { ToastContainer, toast } from "react-toastify";
// import  "react-toastify/ReactToastify.css";
// export default function SignIn() {
//   // React Hook Form Validation
//   const schema = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email address required"),
//     password: yup.string().required("Password is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const navigate = useNavigate();

//   const handleLoginEvent = async (data) => {
//     try {
//       await signInWithEmailAndPassword(auth, data.email, data.password);
//       toast.success("Login Successful");

//       navigate("/account");
//       console.log(data);
//     } catch (error) {
//       console.error("Error signing in:", error.message);
//       toast.error("Invalid email or password", {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   };

//   // Google Sign In Authentication
//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       if (!result.ok) throw new Error("Error");
//       console.log(result);
//       toast.success("Success");
//       navigate("/account");
//       // setLoading(true);
//     } catch (error) {
//       console.error("Error signing in with Google:", error.message);
//       // setLoading(false);
//       toast.error("Error Signing In");
//     }
//   };

//   return (
//     <div className="my-20">
//       <ToastContainer />
//       <div className="items-center flex flex-col">
//         <h1 className="font-medium text-2xl p-4 text-gray-500">Sign In</h1>
//         <form
//           className="flex flex-col justify-center"
//           onSubmit={handleSubmit(handleLoginEvent)}
//         >
//           {/* Email Address Input */}
//           <div className="relative z-10">
//             <input
//               type="email"
//               placeholder="E-mail address"
//               className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//               {...register("email")}
//             />
//             <p className="text-red-500 text-sm px-2">{errors.email?.message}</p>
//           </div>
//           {/* Password Input */}
//           <div className="relative">
//             <input
//               type="password"
//               placeholder="Password"
//               className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//               {...register("password")}
//             />
//             <p className="text-red-500 text-sm px-2">
//               {errors.password?.message}
//             </p>
//           </div>
//           {/* Sign In button */}
//           <button
//             type="submit"
//             className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 block m-2 text-center"
//           >
//             Sign In
//           </button>
//           <p className="text-gray-400 w-72 block text-center text-sm">or</p>
//         </form>
//         {/* Google Sign In Button */}
//         <button
//           className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 m-2 flex items-center justify-center gap-2"
//           onClick={signInWithGoogle}
//         >
//           <img src={googleIcon} alt="Google Icon" />
//           Sign In With Google
//         </button>
//         <p className="text-gray-500 w-72 my-2 px-3 text-sm block text-center">
//           <Link to="/signup" className="underline">
//             Don't have an account? Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleIcon from "../../assets/google_logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Corrected import for toast styles

export default function SignIn() {
  // React Hook Form Validation Schema
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

  // Handle Email and Password Sign In
  const handleLoginEvent = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Login Successful");
      navigate("/account");
    } catch (error) {
      console.error("Error signing in:", error.message);
      toast.error("Invalid email or password");
    } finally {
    }
  };

  // Handle Google Sign In
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Sign-In Successful");
      navigate("/account");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      toast.error("Error Signing In with Google");
    } finally {
    }
  };

  return (
    <div className="my-20">
      <div className="items-center flex flex-col">
        <h1 className="font-medium text-2xl p-4 text-gray-500">Sign In</h1>
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(handleLoginEvent)}
        >
          {/* Email Address Input */}
          <div className="relative z-10">
            <input
              type="email"
              placeholder="E-mail address"
              className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
              {...register("email")}
            />
            <p className="text-red-500 text-sm px-2">{errors.email?.message}</p>
          </div>
          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
              {...register("password")}
            />
            <p className="text-red-500 text-sm px-2">
              {errors.password?.message}
            </p>
          </div>
          {/* Sign In button */}
          <button
            type="submit"
            className={`w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 block m-2 text-center`}
          >
            Sign In
          </button>
          <p className="text-gray-400 w-72 block text-center text-sm">or</p>
        </form>
        {/* Google Sign In Button */}
        <button
          className={`w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 m-2 flex items-center justify-center gap-2 
 
          `}
          onClick={signInWithGoogle}
        >
          <img src={googleIcon} alt="Google Icon" />
          Sign In With Google
        </button>
        <p className="text-gray-500 w-72 my-2 px-3 text-sm block text-center">
          <Link to="/signup" className="underline">
            Don't have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
