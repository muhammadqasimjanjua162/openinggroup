import React from "react";
import PropertyDisplay from "../PropertyDisplay";
import propertyImg from "../../assets/img/propertyImages/property1.png";

const FeaturedListing = () => {
  const propertyData = [
    {
      id: 1,
      totalprice: "123,45,666",
      perMonth: "3000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 2,
      totalprice: "15000",
      perMonth: "3200",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 3,
      totalprice: "21000",
      perMonth: "3500",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 4,
      totalprice: "18000",
      perMonth: "3100",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 5,
      totalprice: "25000",
      perMonth: "4000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 6,
      totalprice: "9000",
      perMonth: "2200",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 7,
      totalprice: "14000",
      perMonth: "2800",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 8,
      totalprice: "16000",
      perMonth: "3000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 9,
      totalprice: "19000",
      perMonth: "3300",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 10,
      totalprice: "22000",
      perMonth: "3600",
      address: "1001 1st St.",
      img: propertyImg,
    },
  ];
  return (
    <div>hello</div>
    // <div className="bg-dodgerblue p-2 items-start">
    //   <div className=" text-center p-2 text-2xl bg-green-300">
    //     <div className="flex items-center space-x-2 ml-[11%]">
    //       <span>01</span>
    //       <hr className="border-t-4 w-[30px] border-red-600" />
    //     </div>
    //     <span className="text-5xl font-bold uppercase">featured</span>
    //     <div className="flex items-center justify-between">
    //       <hr className="border-t-4 w-[70%] border-gray-300" />
    //       <span>Listings</span>
    //     </div>

    //     <button className="px-8 py-2 border border-gray-400 text-gray-800 uppercase relative">
    //       <div className="w-[40px] h-[1px] bg-gray-300 absolute top-[50%] left-[-8%]"></div>

    //       <a href="" className="uppercase text-xs font-semibold">
    //         view all properties
    //       </a>
    //     </button>
    //     <div className="absolute left-[50%] bottom-35 transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
    //   </div>

    //   <div className=" text-center p-2 text-2xl h-auto row-span-2 bg-red-500">
    //     2
    //   </div>
    //   <div className="bg-yellow-400 text-center p-2 text-2xl h-auto row-span-2">
    //     4
    //   </div>
    // </div>
  );
};

export default FeaturedListing;
