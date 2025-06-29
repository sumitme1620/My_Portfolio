"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //     setTimeout(() => {
  //       setResult("");
  //     }, 4000);
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //     setTimeout(() => {
  //       setResult("");
  //     }, 4000);
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("sending");

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        e.target.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    }

    setTimeout(() => setResult(""), 4000);
  };

  const getMessageContent = () => {
    switch (result) {
      case "sending":
        return {
          msg: "Sending...",
          style:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200",
          icon: "spinner",
        };
      case "success":
        return {
          msg: "Form Submitted Successfully",
          style:
            "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200",
          icon: "check",
        };
      case "error":
        return {
          msg: "Submission failed. Please try again.",
          style: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200",
          icon: "cross",
        };
      default:
        return null;
    }
  };

  const alert = getMessageContent();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.button>

        {alert && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 flex items-center gap-2 justify-center rounded-md px-4 py-3 text-sm font-medium shadow-sm max-w-md mx-auto ${alert.style}`}
          >
            {alert.icon === "spinner" && (
              <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            )}
            {alert.icon === "check" && (
              <svg
                className="w-5 h-5 text-green-700 dark:text-green-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {alert.icon === "cross" && (
              <svg
                className="w-5 h-5 text-red-700 dark:text-red-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <span>{alert.msg}</span>
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
