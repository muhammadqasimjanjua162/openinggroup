import React from "react";
import { GoDotFill } from "react-icons/go";

const MapHeader = () => {
  return (
    // <div className="flex">

    //   <div className="flex">
    //     <GoDotFill className="text-green-400 size-6" />
    //     <p className="uppercase">Active</p>
    //   </div>
    // </div>
    <div className="interactive-map-pin-guide lg:py-6">
      <ul className="space-y-2 flex flex-col items-center sm:flex-row">
        <li className="flex flex-col sm:flex-row justify-center items-center px-8 sm:border-r  border-gray-400">
          <div className="mb-6 sm:mb-0 bg-green-50">
            <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span>{" "}
            <span className="pr-2"> Active</span>
          </div>

          <div className=" bg-red-400 border-b-3 sm:border-b-0 border-gray-400 w-24 flex items-center sm:mb-0  sm:hidden mb-6"></div>
        </li>
        <li className="flex items-center px-8 sm:border-r  border-gray-400">
          <div className="border-b-3 sm:border-b-0 border-gray-400 w-24 flex items-center">
            <span className="w-4 h-4 bg-amber-300 rounded-full inline-block mr-2"></span>
            <span className="px-2"> Leased</span>
          </div>
        </li>
        <li className="flex items-center px-8 sm:border-r  border-gray-400">
          <div className="border-b-3 sm:border-b-0 border-gray-400 w-24 flex items-center">
            <span className="w-4 h-4 bg-amber-300 rounded-full inline-block mr-2"></span>{" "}
            <span className="px-2"> Leased</span>
          </div>
        </li>
        <li className="flex items-center px-8 sm:border-r  border-gray-400">
          <div className="border-b-3 sm:border-b-0 border-gray-400 w-24 flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></span>{" "}
            <span className="px-2"> Commercial</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MapHeader;
