"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Mudavath Chandar ",
    title: "Project Manager @ StartUpodero Ventures",
    testimonial:
      "Sumit is one of the most reliable frontend developers I’ve worked with. His attention to detail and commitment to delivering pixel-perfect UIs made a huge difference on our project.",
    image: "/mudavath.png", // Replace with actual image URL
  },
  {
    name: "Ariz Shahid",
    title: "Senior Developer @ StartUpodero Ventures",
    testimonial:
      "It’s always a pleasure working with Sumit. As a frontend developer, he brings exceptional design intuition and consistently delivers smooth, user-friendly, and pixel-perfect interfaces.",
    image: "/ariz.png", // Replace with actual image URL
  },
  {
    name: "Manish Jha",
    title: "Frontend Lead @ 169Pi.ai",
    testimonial:
      "Sumit’s problem-solving skills and dedication are unparalleled. He takes ownership of projects and always goes the extra mile to deliver high-quality results.",
    image: "/manish.png", // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="testimonials"
      className="w-full px-[4%] lg:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What People Say
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Testimonials
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Here’s what some of my colleagues and clients have said about my work as
        a frontend developer.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10"
      >
        {testimonialsData.map(({ name, title, testimonial, image }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                width={64}
                height={64}
              />
            </div>

            <p className="text-gray-600 mb-4 text-sm dark:text-white/80">
              "{testimonial}"
            </p>

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-white/80">{title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
