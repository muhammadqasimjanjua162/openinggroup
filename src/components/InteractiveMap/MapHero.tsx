import React from "react";

const MapHero = () => {
  return (
    <div className="flex flex-col items-center justify-center uppercase font-bold text-7xl">
      <div className="flex  w-2/4 justify-center items-center m-0 mb-0">
        Interactive
      </div>
      <div className="flex  w-2/4 !justify-center !items-center">
        <div className="border-t border-gray-500 w-85"></div>
        <div className="px-4 text-red-500 text-5xl m-0 mb-0">Map</div>
      </div>
    </div>
  );
};

export default MapHero;
