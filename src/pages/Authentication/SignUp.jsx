// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { auth, provider } from "../../config/firebase";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// export default function Signup() {
//   const navigate = useNavigate();
//   const [togglePassword, setTogglePassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(false);

//   const schema = yup.object().shape({
//     fullName: yup.string().required("Full Name is required"),
//     username: yup
//       .string()
//       .max(10, "Username can't exceed 10 characters")
//       .required("Username is required"),
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email address required"),
//     password: yup
//       .string()
//       .min(8, "Password must be at least 8 characters")
//       .max(20, "Password can't be longer than 20 characters")
//       .required("Password is required"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Passwords don't match")
//       .required("Confirm Password is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const handleRegisterEvent = async (data) => {
//     try {
//       await createUserWithEmailAndPassword(auth, data.email, data.password);

//       navigate("/account");
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         setErrorMessage("Email already in use please use a different email");
//       } else {
//         setErrorMessage("Error signing up: " + error.message);
//       }
//     }
//   };
//   const googleSignup = async (data) => {
//     try {
//       const res = await signInWithPopup(auth, provider);
//       console.log(res);
//     } catch (err) {
//       console.error("Error Signing Up", err.message);
//     }
//     navigate("/");
//   };
//   const handleTogglePassword = () => {
//     setTogglePassword(!togglePassword);
//   };
//   return (
//     <div className="my-14 ">
//       <div className="items-center flex flex-col">
//         <h1 className="font-medium text-2xl p-4 text-gray-500">Sign Up</h1>
//         <form
//           className="flex flex-col justify-center"
//           onSubmit={handleSubmit(handleRegisterEvent)}
//         >
//           <input
//             type="text"
//             placeholder="Username"
//             className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//             {...register("username")}
//           />
//           <p className="text-red-500 px-3 text-sm">
//             {errors.username?.message}
//           </p>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//             {...register("fullName")}
//           />
//           <p className="text-red-500 px-3 text-sm">
//             {errors.fullName?.message}
//           </p>

//           <input
//             type="email"
//             placeholder="example@gmail.com"
//             className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//             {...register("email")}
//           />
//           <p className="text-red-500 px-3 text-sm">{errors.email?.message}</p>

//           <div className="relative">
//             <input
//               type={togglePassword ? "text" : "password"}
//               placeholder="Password"
//               className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//               {...register("password")}
//             />
//           </div>
//           <p className="text-red-500 px-3 text-sm">
//             {errors.password?.message}
//           </p>

//           <div className="relative">
//             <input
//               type={togglePassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
//               {...register("confirmPassword")}
//             />
//           </div>
//           <p className="text-red-500 px-3 text-sm">
//             {errors.confirmPassword?.message}
//           </p>
//           <div className="flex gap-1 p-2">
//             <input
//               type="checkbox"
//               className="text-left"
//               onClick={() => {
//                 handleTogglePassword();
//               }}
//             />{" "}
//             <p className="text-gray-500">Show Password</p>{" "}
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 px-3 text-[12.5px]">{errorMessage}</p>
//           )}
//           <button className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-2 flex items-center justify-center gap-2">
//             Sign Up
//           </button>
//           <p className="text-gray-500 w-72 my-2 px-3 text-sm block text-center">
//             <Link to="/login">Already have an account? Sign In</Link>
//           </p>
//         </form>
//         <button
//           className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-2 flex items-center justify-center gap-2"
//           onClick={googleSignup}
//         >
//           Sign Up With Google
//         </button>
//       </div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, provider, database } from "../../config/firebase"; // Import db from firebase config
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // Import Firestore functions
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    username: yup.string().required("Username is required"),
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // Save additional user info in Firestore
      await setDoc(doc(database, "users", user.uid), {
        fullName: data.fullName,
        username: data.username,
        email: data.email,
      });

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already in use please use a different email");
      } else {
        setErrorMessage("Error signing up: " + error.message);
      }
    }
  };

  const googleSignup = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (err) {
      console.error("Error Signing Up", err.message);
    }
    navigate("/");
  };

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <div className="my-14 ">
      <div className="items-center flex flex-col">
        <h1 className="font-medium text-2xl p-4 text-gray-500">Sign Up</h1>
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(handleRegisterEvent)}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
            {...register("fullName")}
          />
          <p className="text-red-500 px-3 text-sm">
            {errors.fullName?.message}
          </p>
          <input
            type="text"
            placeholder="Username"
            className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
            {...register("username")}
          />
          <p className="text-red-500 px-3 text-sm">
            {errors.username?.message}
          </p>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
            {...register("email")}
          />
          <p className="text-red-500 px-3 text-sm">{errors.email?.message}</p>

          <div className="relative">
            <input
              type={togglePassword ? "text" : "password"}
              placeholder="Password"
              className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
              {...register("password")}
            />
          </div>
          <p className="text-red-500 px-3 text-sm">
            {errors.password?.message}
          </p>

          <div className="relative">
            <input
              type={togglePassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border-2 text-sm placeholder:text-sm p-2 border-gray-400 h-12 w-72 m-2 focus:outline-none"
              {...register("confirmPassword")}
            />
          </div>
          <p className="text-red-500 px-3 text-sm">
            {errors.confirmPassword?.message}
          </p>
          <div className="flex gap-1 p-2">
            <input
              type="checkbox"
              className="text-left"
              onClick={() => {
                handleTogglePassword();
              }}
            />  
            <p className="text-gray-500">Show Password</p>{" "}
          </div>
          {errorMessage && (
            <p className="text-red-500 px-3 text-[12.5px]">{errorMessage}</p>
          )}
          <button className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-2 flex items-center justify-center gap-2">
            Sign Up
          </button>
          <p className="text-gray-500 w-72 my-2 px-3 text-sm block text-center">
            <Link to="/login">Already have an account? Sign In</Link>
          </p>
        </form>
        <button
          className="w-72 h-12 bg-gray-500 text-white text-sm font-normal uppercase hover:bg-gray-400 hover:text-white m-2 flex items-center justify-center gap-2"
          onClick={googleSignup}
        >
          Sign Up With Google
        </button>
      </div>
    </div>
  );
}
