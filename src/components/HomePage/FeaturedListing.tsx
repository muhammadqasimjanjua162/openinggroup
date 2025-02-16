import React from "react";
import PropertyDisplay from "../PropertyDisplay";

const FeaturedListing = () => {
  return (
    <div className="bg-dodgerblue p-2 items-start">
      <div className=" text-center p-2 text-2xl bg-green-300">
        <div className="flex items-center space-x-2 ml-[11%]">
          <span>01</span>
          <hr className="border-t-4 w-[30px] border-red-600" />
        </div>
        <span className="text-5xl font-bold uppercase">featured</span>
        <div className="flex items-center justify-between">
          <hr className="border-t-4 w-[70%] border-gray-300" />
          <span>Listings</span>
        </div>

        <button className="px-8 py-2 border border-gray-400 text-gray-800 uppercase relative">
          <div className="w-[40px] h-[1px] bg-gray-300 absolute top-[50%] left-[-8%]"></div>

          <a href="" className="uppercase text-xs font-semibold">
            view all properties
          </a>
        </button>
        <div className="absolute left-[50%] bottom-35 transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
      </div>

      <div className=" text-center p-2 text-2xl h-auto row-span-2 bg-red-500">
        2
      </div>
      <div className="bg-yellow-400 text-center p-2 text-2xl h-auto row-span-2">
        4
      </div>
     
    </div>
  );
};

export default FeaturedListing;
