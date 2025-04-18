"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-52 mx-auto rounded-full"
        />

        <a
          href="mailto:sumitme1620@gmail.com"
          className="w-max flex items-center gap-2 -mt-4 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email Icon"
            className="w-6"
          />
          sumitme1620@gmail.com
        </a>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Sumit Singh. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/sumitme1620">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/sumitme1620/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/home">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
