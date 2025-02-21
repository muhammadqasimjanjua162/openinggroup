import React from "react";
import bg from "../../assets/img/HomePage/Media/popularitybg.webp";
import blogbg from "../../assets/img/HomePage/Media/blog-bg-a.webp";

const Popularity = () => {
  return (
    <div className="flex flex-col">
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
          className="absolute inset-0 z-0 bg-cover bg-no-repeat filter grayscale bg-blend-overlay bg-right-top w-[100%] h-[200px]"
          style={{
            // backgroundImage: `url(${bg})`,
            backgroundColor: "rgba(42, 42, 42, 0.7)",
            // RGBA color for the overlay
          }}
        ></div>
      </div>
      <div
        className="newDiv grid grid-cols-12 gap-4"
        style={{
          backgroundImage: `url(${blogbg})`,
          backgroundPosition: "center", // Center the background image
          backgroundAttachment: "fixed", // Make the background fixed during scrolling
          backgroundSize: "cover", // Ensure the image covers the entire div
          position: "relative", // Set the position of the div
          width: "100%", // Full width
          height: "100%", // Full height
        }}
      >
        {/* Left Column (Yellow) - Spans 5 Columns */}
        <div className="left col-span-4 bg-yellow-400">
          <div className="p-2 text-2xl mb-20 col-span-4 row-span-2">
            <div className="flex items-center space-x-2 ml-24">
              <span>01</span>
              <hr className="border-t-4 w-[30px] border-red-600" />
            </div>
            <div className="flex items-center">
              <span className="text-7xl font-bold uppercase tracking-tighter ml-20">
                in the
              </span>
            </div>
            <div className="flex items-center">
              <hr className="border-t-4 w-[62%] border-gray-300" />
              <span className="uppercase text-3xl font-medium text-red-600">
                media
              </span>
            </div>
            <p className="flex pl-20">
              The Oppenheim Group receives significant attention within the real
              estate community and beyond; the brokerage is the focus of the hit
              Netflix original series, Selling Sunset and Selling the OC, as
              Jason and his elite agents sell luxury homes to their affluent and
              celebrity clients. With more than $400 million in active listings,
              the brokerage boasts some of the most impressive properties in Los
              Angeles, Orange County, San Diego, and Cabo, including the largest
              home in the Hollywood Hills and one of the largest listings in Los
              Angeles at $100 million.
            </p>
          </div>
        </div>

        {/* Right Column (Green) - Spans 7 Columns */}
        <div className="right col-span-8 bg-green-400 p-6  ml-30">
          <div className="flex">
            <div className="flex flex-col">
              <h3 className="uppercase text-xl font-semibold mb-2">
                Architectural Digest
              </h3>
              <p className="text-lg mb-4">
                See Inside the Oppenheim Group’s Newport Beach Office Before
                Selling Sunset Returns. Jason Oppenheim gives AD an exclusive
                look at his real estate firm’s industrial, street art–inspired
                workspace.
              </p>
              <div className="relative bg-red-600 z-20">
                <button className="absolute px-16 py-4 border border-gray-100 transform -translate-x-1/2 bottom-[-35px] left-1/2">
                  Read More
                </button>
                <div className="absolute left-[50%] bottom-[-35px] transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="uppercase text-xl font-semibold mb-2">
                Architectural Digest
              </h3>
              <p className="text-lg mb-4">
                See Inside the Oppenheim Group’s Newport Beach Office Before
                Selling Sunset Returns. Jason Oppenheim gives AD an exclusive
                look at his real estate firm’s industrial, street art–inspired
                workspace.
              </p>
              <div className="relative bg-red-600 z-20">
                <button className="absolute px-16 py-4 border border-gray-100 transform -translate-x-1/2 bottom-[-35px] left-1/2">
                  Read More
                </button>
                <div className="absolute left-[50%] bottom-[-35px] transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularity;
