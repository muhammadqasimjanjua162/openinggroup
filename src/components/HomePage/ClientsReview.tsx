import React from "react";
import clientBg from "../../assets/img/HomePage/Media/testi-photo-d.webp";
import img2 from "../../assets/img/HomePage/Media/clientssya.webp";
import ReviewSlider from "./ReviewSlider";
import sliderBackground from "../../assets/img/HomePage/Media/sliderbackground.webp";

const ClientsReview = () => {
  return (
    <div className="w-full relative">
      <div className="flex flex-col relative h-full">
        {/* Background Image */}
        <div className="flex flex-row  w-full h-[664px]">
          <div className="w-[50%] relative">
            <img
              src={clientBg}
              alt="Client Background"
              className="object-cover w-full h-full absolute inset-0 z-0" // Ensure this has a lower z-index
            />
          </div>

          {/* Overlay Image */}
          <div className="w-[52%] absolute left-[48%] top-[10%] z-9 h-full">
            {" "}
            {/* Set z-10 to bring this in front */}
            <div className="h-[100%] relative">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat filter grayscale bg-blend-overlay bg-right-top z-10"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundColor: "rgba(240, 240, 240, 0.85)",
                }}
              ></div>

              <div className="text-center p-2 text-2xl mb-20 absolute top-[12%] w-full z-10">
                <div className="flex items-center space-x-2 ml-20">
                  <span>01</span>
                  <hr className="border-t-4 w-[30px] border-red-600" />
                </div>
                <div className="flex items-center ml-25">
                  <span className="text-7xl font-bold uppercase">JASON</span>
                  <hr className="border-t-4 w-[40%] border-gray-300" />
                </div>
                <div className="flex ml-40">
                  <span className="uppercase text-5xl font-medium text-red-600">
                    Oppenheim
                  </span>
                </div>
              </div>

              {/* The image at the bottom */}
              <img
                src={img2}
                alt="Image 2"
                className="h-80 w-full object-cover z-20"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-30 mb-40 mx-auto w-[90%] p-12 absolute top-[70%] z-10"
        style={{
          backgroundImage: `url(${sliderBackground})`,
          left: "50%", // Position the element at 50% from the left
          transform: "translateX(-50%)", // Offset it by 50% of its own width to center it
        }}
      >
        <ReviewSlider />
      </div>
    </div>
  );
};

export default ClientsReview;
