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
      <ul className="space-y-2 flex">
        <li className="flex items-center px-8 border-r border-gray-400">
          <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span>{" "}
          <span className="pr-2"> Active</span>
        </li>
        <li className="flex items-center px-8 border-r border-gray-400">
          <span className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></span>{" "}
          <span className="px-2"> Sold</span>
        </li>
        <li className="flex items-center px-8 border-r border-gray-400">
          <span className="w-4 h-4 bg-amber-300 rounded-full inline-block mr-2"></span>{" "}
          <span className="px-2"> Leased</span>
        </li>
        <li className="flex items-center px-8 mb-2">
          <span className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></span>{" "}
          <span className="px-2"> Commercial</span>
        </li>
      </ul>
    </div>
  );
};

export default MapHeader;
