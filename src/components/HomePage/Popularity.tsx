import React from "react";
import bg from "../../assets/img/HomePage/Media/popularitybg.webp";
import blogbg from "../../assets/img/HomePage/Media/blog-bg-a.webp";
import bg2 from "../../assets/img/HomePage/Media/bg4.webp";

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
          className="absolute  inset-0 z-0 bg-cover bg-no-repeat filter grayscale bg-blend-overlay bg-right-top w-[100%] h-[200px]"
          style={{
            backgroundColor: "rgba(42, 42, 42, 0.7)", // Overlay color
          }}
        ></div>
      </div>

      {/* Main Content Container with Right Margin */}
      <div
        className="newDiv flex gap-12"
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
        {/* Left Column (Yellow) */}
        <div className="left w-5/11 bg-yellow-400">
          <div className="p-2 text-2xl mb-20">
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
            <p className="flex pl-12 text-base">
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

        {/* Right Column (Green) */}
        <div className="right w-5/11">
          <div className="flex mb-8">
            {/* Post Description Div */}
            <div className="post-desc flex flex-col text-white bg-black px-8 py-8 w-full">
              {/* Post Title (Link) */}
              <a
                href="https://la.ogroup.com/blog/see-inside-the-oppenheim-groups-newport-beach-office-before-selling-sunset-returns/"
                className="post-title uppercase text-xl font-extrabold mb-2"
              >
                Architectural Digest
              </a>

              {/* Post Content */}
              <div className="post-content mb-4">
                <p className="text-xs uppercase font-semibold leading-relaxed tracking-wide">
                  See Inside the Oppenheim Group’s Newport Beach Office Before
                  Selling Sunset Returns.
                </p>
                <p className="text-xs uppercase leading-relaxed tracking-wide">
                  Jason Oppenheim gives AD an exclusive look at his real estate
                  firm’s industrial, street art–inspired workspace.
                </p>
                <button>Read more</button>
              </div>
            </div>

            {/* Image Div */}
            <div className="w-full flex justify-center items-center">
              <img
                src={bg2}
                alt="Background Image"
                className="w-full h-full object-cover flex-grow"
              />
            </div>
          </div>

          <div className="flex mb-8">
            {/* Post Description Div */}
            <div className="post-desc flex flex-col text-white bg-black px-8 py-8 w-full">
              {/* Post Title (Link) */}
              <a
                href="https://la.ogroup.com/blog/see-inside-the-oppenheim-groups-newport-beach-office-before-selling-sunset-returns/"
                className="post-title uppercase text-xl font-extrabold mb-2"
              >
                Architectural Digest
              </a>

              {/* Post Content */}
              <div className="post-content mb-4">
                <p className="text-xs uppercase font-semibold leading-relaxed tracking-wide">
                  See Inside the Oppenheim Group’s Newport Beach Office Before
                  Selling Sunset Returns.
                </p>
                <p className="text-xs uppercase leading-relaxed tracking-wide">
                  Jason Oppenheim gives AD an exclusive look at his real estate
                  firm’s industrial, street art–inspired workspace.
                </p>
                <button>Read more</button>
              </div>
            </div>

            {/* Image Div */}
            <div className="w-full flex justify-center items-center">
              <img
                src={bg2}
                alt="Background Image"
                className="w-full h-full object-cover flex-grow"
              />
            </div>
          </div>
          <div className="flex mb-8">
            {/* Post Description Div */}
            <div className="post-desc flex flex-col text-white bg-black px-8 py-8 w-full">
              {/* Post Title (Link) */}
              <a
                href="https://la.ogroup.com/blog/see-inside-the-oppenheim-groups-newport-beach-office-before-selling-sunset-returns/"
                className="post-title uppercase text-xl font-extrabold mb-2"
              >
                Architectural Digest
              </a>

              {/* Post Content */}
              <div className="post-content mb-4">
                <p className="text-xs uppercase font-semibold leading-relaxed tracking-wide">
                  See Inside the Oppenheim Group’s Newport Beach Office Before
                  Selling Sunset Returns.
                </p>
                <p className="text-xs uppercase leading-relaxed tracking-wide">
                  Jason Oppenheim gives AD an exclusive look at his real estate
                  firm’s industrial, street art–inspired workspace.
                </p>
                <button>Read more</button>
              </div>
            </div>

            {/* Image Div */}
            <div className="w-full flex justify-center items-center">
              <img
                src={bg2}
                alt="Background Image"
                className="w-full h-full object-cover flex-grow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularity;
