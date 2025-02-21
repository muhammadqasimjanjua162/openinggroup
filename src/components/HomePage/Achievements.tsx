import React from "react";
import bg from "../../assets/img/HomePage/Media/performance-bg-a.jpg"; // Import your image

const Achievements = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Make the background fixed during scrolling
        backgroundSize: "cover", // Ensure the image covers the entire div
        position: "relative", // Set the position of the div
        width: "100%", // Full width
        height: "100%",
      }}
      className="text-white p-6"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat filter grayscale bg-blend-overlay bg-right-top w-[100%]"
        style={{
          // backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(42, 42, 42, 0.7)",
          // RGBA color for the overlay
        }}
      ></div>
      <div>
        <div className="flex justify-center flex-col items-center ">
          <div className="text-center p-2 text-2xl mb-20 col-span-4 row-span-2 ">
            <div className="flex items-center space-x-2 ml-24">
              <span>01</span>
              <hr className="border-t-4 w-[30px] border-red-600" />
            </div>
            <div className="flex  items-center ml-25">
              <span className="text-7xl font-bold uppercase tracking-tighter">
                why work with us
              </span>
            </div>
            <div className="flex justify-center  items-center ml-20">
              <hr className="border-t-4 w-[62%] border-gray-300" />
              <span className="uppercase text-3xl font-medium text-red-600">
                our numbers
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mx-10 mr-20">
          <div className="flex flex-col space-y-4 ">
            <span className="uppercase font-bold text-6xl">3.5b+</span>
            <span className="uppercase text-1xl font-extralight">
              sales volume
            </span>
          </div>
          <div className="border border-white h-20"></div>

          <div className="flex flex-col space-y-4">
            <span className="uppercase font-bold text-6xl">210k+</span>
            <span className="uppercase text-1xl font-extralight">
              email subscribers
            </span>
          </div>
          <div className="border border-white h-20"></div>
          <div className="flex flex-col space-y-4 justify-center items-center">
            <span className="uppercase font-bold text-6xl">17M+</span>
            <span className="uppercase text-1xl font-extralight">
              social media followers
            </span>
          </div>
          <div className="border border-white h-20"></div>
          <div className="flex flex-col space-y-4">
            <span className="uppercase font-bold text-6xl">90+</span>
            <span className="uppercase text-1xl font-extralight">agents</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
