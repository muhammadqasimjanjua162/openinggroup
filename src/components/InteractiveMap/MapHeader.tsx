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
    <div className="interactive-map-pin-guide  bg-green-400 py-4">
      <ul className="space-y-2 flex">
        <li className="flex items-center px-8 border-r border-gray-400">
          <span className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></span>{" "}
          Active
        </li>
        <li className="flex items-center px-8 border-r border-gray-400">
          <span className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></span>{" "}
          Sold
        </li>
        <li className="flex items-center px-8 border-r border-gray-400">
          <span className="w-4 h-4 bg-amber-300 rounded-full inline-block mr-2"></span>{" "}
          Leased
        </li>
        <li className="flex items-center px-8 mb-2">
          <span className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></span>{" "}
          Commercial
        </li>
      </ul>
    </div>
  );
};

export default MapHeader;
