import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import {
  ChatBubbleLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const Chat = () => {
  // Form validation using yup
  const schema = yup.object().shape({
    name: yup.string().required("Your name is required"),
    email: yup.string().email().required("Your email address is required"),
    message: yup.string().required("Input a complaint message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Destructure reset function
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  const handleSendMessage = async (data) => {
    try {
      await emailjs.sendForm(
        "service_343pzya",
        "template_p18krx2",
        form.current,
        "l2Vr_N2Pc2HMB0lYn"
      );
      toast.success("Message sent");
      reset(); // Clear the form fields after sending the message
    } catch (error) {
      toast.error("Message sending failed");
      console.error("Error sending message", error);
    }
  };

  const [toggleChat, setToggleChat] = useState(false);
  const toggleChatFunction = () => {
    setToggleChat(!toggleChat);
  };

  return (
    <div>
      {toggleChat ? (
        <div>
          <form
            className="fixed bottom-[8.5rem] right-7 z-50 grid grid-cols-1 p-4 rounded-md bg-gray-200 ease-in-out duration-500"
            onSubmit={handleSubmit(handleSendMessage)}
            ref={form}
          >
            {/* Name */}
            <label className="text-sm mx-2">Your name*</label>
            <input
              type="text"
              className="p-1 m-2 outline-none"
              {...register("name")}
            />
            <p className="text-red-400 px-2 text-xs">{errors?.name?.message}</p>
            {/* Email address */}
            <label className="text-sm mx-2">Your Email*</label>
            <input
              type="email"
              className="p-1 m-2 outline-none"
              {...register("email")}
            />
            <p className="text-red-400 px-2 text-xs">
              {errors?.email?.message}
            </p>
            {/* Text message */}
            <label className="text-sm mx-2">Your Message*</label>
            <textarea
              className="m-2 p-2 outline-none"
              rows={5}
              cols={20}
              {...register("message")}
            ></textarea>
            <p className="text-red-400 px-2 text-xs">
              {errors?.message?.message}
            </p>
            <button
              type="submit"
              className="bg-gray-300 py-3 px-8 rounded-md w-[60%] m-2 mb-2"
            >
              Send
            </button>
          </form>
          <XMarkIcon
            className="fixed bottom-20 right-8 z-50 w-12 text-gray-500 bg-white rounded-tr-md p-2 shadow-md cursor-pointer"
            onClick={toggleChatFunction}
          />
        </div>
      ) : (
        <ChatBubbleLeftEllipsisIcon
          className="fixed bottom-20 right-8 z-50 w-12 text-gray-500 bg-white rounded-tr-md p-2 shadow-md cursor-pointer"
          onClick={toggleChatFunction}
        />
      )}
    </div>
  );
};
