import React from "react";
import imgBefore from "../../assets/img/HomePage/Media/concierge-before.webp";
import imgAfter from "../../assets/img/HomePage/Media/concierge-after.webp";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

const Concierge = () => {
  return (
    <div className="flex pr-16 w-full h-full">
      <div className="flex w-1/2">
        <div className="text-center p-2 text-2xl mb-20 col-span-4 row-span-2">
          <div className="flex items-center space-x-2 ml-20">
            <span>01</span>
            <hr className="border-t-4 w-[30px] border-red-600" />
          </div>
          <div className="flex  items-center ml-25">
            <span className="text-7xl font-bold uppercase">JASON</span>
            <hr className="border-t-4 w-[40%] border-gray-300" />
          </div>
          <div className="flex ml-40">
            <span className="uppercase text-5xl font-medium text-red-600">
              Oppenheim
            </span>
          </div>
          <p className="text-start">
            The Oppenheim Group’s Concierge aims to prepare your home for an
            optimal launch on the market. After assessing your property’s needs
            via a walkthrough, we work together in creating opportunities to
            increase its value and profitability.
          </p>
        </div>
      </div>
      <div className="gallery flex w-1/2 relative bg-green-600">
        <div className="relative w-full">
          <img
            src={imgBefore}
            alt="Before"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full">
          <img
            src={imgAfter}
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="twentytwenty-handle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white w-10 h-10 flex items-center justify-center p-2 rounded-full ">
          <span className="twentytwenty-left-arrow text-red-500 text-xs">
            <FaLessThan />
          </span>
          <span className="twentytwenty-right-arrow text-red-500 text-xs">
            <FaGreaterThan />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Concierge;
