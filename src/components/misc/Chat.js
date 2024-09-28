import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import {
  ChatBubbleLeftEllipsisIcon,
  MinusIcon,
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
    reset,
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
            className="fixed bottom-[5rem] right-7 z-50 grid grid-cols-1 p-4 bg-[#fcfcf7] rounded-lg shadow-md ease-in-out duration-500 w-72"
            onSubmit={handleSubmit(handleSendMessage)}
            ref={form}
          >
            <label className="text-sm px-2 pb-4 text-md flex items-center justify-between">
              How Can We Help Today
              <MinusIcon
                className="w-6 text-black cursor-pointer"
                onClick={toggleChatFunction}
              />
            </label>

            {/* Name */}
            <label className="text-sm mx-2">Your Name*</label>
            <input
              type="text"
              className="p-1 m-2 outline-none bg-transparent border-b border-black"
              {...register("name")}
            />
            <p className="text-red-400 px-2 py-1 text-xs">
              {errors?.name?.message}
            </p>
            {/* Email address */}
            <label className="text-sm mx-2">Your Email*</label>
            <input
              type="email"
              className="p-1 m-2 outline-none bg-transparent border-b border-black"
              {...register("email")}
            />
            <p className="text-red-400 px-2 py-1 text-xs">
              {errors?.email?.message}
            </p>
            {/* Text message */}
            <label className="text-sm mx-2">How can we help? *</label>
            <textarea
              className="p-3 m-2 outline-none bg-transparent border border-black"
              rows={4}
              cols={18}
              {...register("message")}
            ></textarea>
            <p className="text-red-400 px-2 py-1 text-xs">
              {errors?.message?.message}
            </p>
            <button
              type="submit"
              className="bg-black py-3 px-2 rounded-md m-2 mb-2 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      ) : (
        <ChatBubbleLeftEllipsisIcon
          className="fixed bottom-20 right-5 z-50 w-10 text-black bg-[#f1f4f8] rounded-tr-md p-2 shadow-md cursor-pointer "
          onClick={toggleChatFunction}
        />
      )}
    </div>
  );
};
