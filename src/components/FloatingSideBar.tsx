import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiLineVerticalThin } from "react-icons/pi";

const FloatingSideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed">
      <div className="w-9 h-9 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 flex justify-center items-center">
        {" "}
        <FaFacebookF />
      </div>
      <div className="border-l border-gray-100  h-14"></div>

      <div className="w-9 h-9 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 flex justify-center items-center">
        <RiTwitterXLine />
      </div>
      <div className="border-l border-gray-100  h-6"></div>

      <div className="w-9 h-9 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 flex justify-center items-center">
        <FaYoutube />
      </div>
      <div className="border-l border-gray-100  h-6"></div>
      <div className="w-9 h-9 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 flex justify-center items-center">
        <FaLinkedinIn />
      </div>
      <div className="border-l border-gray-100  h-6"></div>
      <div className="w-9 h-9 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 flex justify-center items-center">
        <FaInstagram />
      </div>
    </div>
  );
};

export default FloatingSideBar;
