import React from "react";

const FeaturedListing = () => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-dodgerblue p-2">
      {/* <div className="col-span-2 bg-gray-200 text-center p-2 text-2xl">1</div> */}
      <div className="bg-gray-200 text-center p-2 text-2xl">
        <div className="flex  items-center space-x-2 ml-[11%]">
          <span>01</span>
          <hr className="border-t-4 w-[30px] border-red-600" />
        </div>
        <span className="text-5xl font-bold uppercase">featured</span>
        <div className="flex  items-center justify-between">
          <hr className="border-t-4 w-[70%] border-gray-300" />
          <span>Listings</span>
        </div>
      </div>
      <div className="bg-gray-200 text-center p-2 text-2xl">3</div>
      <div className="bg-gray-200 text-center p-2 text-2xl">4</div>
      <div className="bg-gray-200 text-center p-2 text-2xl">5</div>
      <div className="bg-gray-200 text-center p-2 text-2xl">6</div>
      <div className="bg-gray-200 text-center p-2 text-2xl">7</div>
      <div className="bg-gray-200 text-center p-2 text-2xl">8</div>
    </div>
  );
};

export default FeaturedListing;
