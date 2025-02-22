import React from "react";
import clientBg from "../../assets/img/HomePage/Media/testi-photo-d.webp";
import img2 from "../../assets/img/HomePage/Media/clientssya.webp";

const ClientsReview = () => {
  return (
    <div className="flex w-full h-[664px] relative ">
      {/* Background Image */}
      <div className="w-1/2 relative">
        <img
          src={clientBg}
          alt="Client Background"
          className="object-cover w-full h-full absolute inset-0 z-0" // Ensure this has a lower z-index
        />
      </div>

      {/* Overlay Image */}
      <div className="w-1/2 absolute left-[45%] top-[10%] z-9 h-full">
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
  );
};

export default ClientsReview;
