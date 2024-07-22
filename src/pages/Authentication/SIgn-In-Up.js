// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { auth, provider } from "../../config/firebase";
// import { signInWithPopup } from "firebase/auth";
// import googleIcon from "../../assets/google_logo.png";
// export default function SignIn() {
//   // React Hook Form Validation
//   const schema = yup.object().shape({
//     // email
//     email: yup.string().required("email address required"),
//     // password
//     password: yup.string().required(),
//   });
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });
//   const handleLoginEvent = (data) => {
//     console.log(data);
//   };
//   // Google Sign In Authentication
//   const navigate = useNavigate();
//   const signInWithGoogle = async () => {
//     const result = await signInWithPopup(auth, provider);
//     console.log(result);
//     navigate("/");
//   };
//   return (
//     <div className="my-100">
//       <div className=" absolute top-28 ml-32 left-96 p-10 rounded-xl  border border-gray-400  items-left flex flex-col ">
//         <h1 className="font-medium text-2xl p-4 text-center ">Sign In </h1>
//         <form
//           className="flex flex-col justify-center"
//           onSubmit={handleSubmit(handleLoginEvent)}
//         >
//           <input
//             type="email`"
//             placeholder="E-mail address"
//             className=" border border-y-2 border-x-2 rounded-lg border-gray-400 h-12 w-60 p-4 m-2 focus:outline-none"
//             {...register("email")}
//           />
//           {/* Error Message for Email */}
//           <p className="text-red-500 px-3">{errors.email?.message} </p>
//           {/* Error Message for Password */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="border border-y-2 border-x-2 rounded-lg border-gray-400 h-12 w-60 p-4 m-2 focus:outline-none"
//             {...register("password")}
//           />
//           {/* Sign In button */}
//           <button
//             className=" w-60 h-12  bg-gray-500 rounded-md text-white text-lg font-medium uppercase  \
//               hover:bg-gray-400 hover:text-white  block  m-2 text-center"
//           >
//             Sign In
//           </button>
//           <p className="text-gray-400 w-60 block text-center">or</p>
//         </form>
//         {/* Google Sign In Button */}
//         <button
//           className=" w-60 h-12  bg-gray-500 rounded-md text-white text-md font-medium uppercase  \
//               hover:bg-gray-400 hover:text-white    m-2 flex items-center justify-center gap-2"
//           onClick={signInWithGoogle}
//         >
//           <img src={googleIcon} alt="" />
//           Sign In With Google
//         </button>
//         <p className="text-gray-400 w-60 my-2 text-xs block text-center">
//           By signing in, you are agreeing to our Terms of Use and Privacy Policy
//         </p>
//         {/* Sign Up Link */}
//         <Link to="/signup" className="text-gray-400 font-medium text-lg m-2">
//           Don't Have an Account, Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// export default function Signup() {
//   const schema = yup.object().shape({
//     email: yup.string().required("email address required"),
//     password: yup.string().min(8).max(20).required("password is required"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "passwords don't match"),
//   });
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const handleRegisterEvent = (data) => {
//     console.log(data);
//   };
//   return (
//     <div className="my-100">
//       <div
//         className=" absolute top-28
//    ml-32 left-96 p-8 rounded-xl  border border-gray-400  items-left flex flex-col "
//       >
//         <h1 className="font-medium text-2xl p-4 text-center "> Sign Up </h1>
//         <form
//           className="flex flex-col  justify-center"
//           onSubmit={handleSubmit(handleRegisterEvent)}
//         >
//           <input
//             type="email"
//             placeholder="example@gmail.com"
//             className=" border border-y-2 border-x-2 rounded-lg border-gray-400 h-12 w-60 p-4 m-2 focus:outline-none"
//             {...register("email")}
//           />
//           <p className="text-red-500 px-3"> {errors.email?.message} </p>
//           <input
//             type="password"
//             placeholder="Password"
//             className="border border-y-2 border-x-2 rounded-lg border-gray-400 h-12 w-60 p-4 m-2 focus:outline-none"
//             {...register("password")}
//           />
//           <p className="text-red-500 px-3"> {errors.password?.message} </p>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="border border-y-2 border-x-2 rounded-lg border-gray-400 h-12 w-60 p-4 m-2 focus:outline-none"
//             {...register("confirmPassword")}
//           />
//           <p className="text-red-500 px-3">
//             {" "}
//             {errors.confirmPassword?.message}{" "}
//           </p>
//           <button
//             className=" w-60 h-12  bg-gray-500 rounded-md text-white text-lg font-medium uppercase  \
//               hover:bg-gray-400 hover:text-white  block  m-2 text-center "
//           >
//             Sign Up
//           </button>
//         </form>
//         <Link to="/login" className="text-gray-400 font-medium text-lg m-2">
//           Already Have an Account, Sign In
//         </Link>
//       </div>
//     </div>
//   );
// }
