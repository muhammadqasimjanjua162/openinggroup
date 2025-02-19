import React from "react";
import cta1 from "../../assets/img/HomePage/CallToAction/cta-1.webp";

const CalltoAction = () => {
  return (
    <div className="grid grid-cols-3 gap-3 px-16 w-full h-full">
      {/* First image */}
      <div className="relative bg-green-600 group">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat filter grayscale bg-blend-overlay bg-right-top w-[100%]"
          style={{
            backgroundImage: `url(${cta1})`,
            backgroundColor: "rgba(13, 13, 13, 0.5)",
            // RGBA color for the overlay
          }}
        ></div>
        <img src={cta1} alt="" className="h-80 object-cover" />
        <p className="border-gray-100 absolute uppercase text-2xl z-20 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          List with us{" "}
        </p>
        <div className="border border-gray-100 px-24 py-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:px-36 group-hover:py-32"></div>
      </div>

      {/* Second image */}
      <div className="relative bg-green-600 group">
        <img src={cta1} alt="" className="h-80 object-cover" />
        <p className="border-gray-100 text-nowrap absolute uppercase text-2xl z-20 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          interactive map{" "}
        </p>
        <div className="border border-gray-100 px-24 py-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:px-36 group-hover:py-32"></div>
      </div>

      {/* Third image */}
      <div className="relative bg-green-600 group">
        <img src={cta1} alt="" className="h-80 object-cover" />
        <p className="border-gray-100 absolute uppercase text-2xl z-20 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          our offices{" "}
        </p>
        <div className="border border-gray-100 px-24 py-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:px-36 group-hover:py-32"></div>
      </div>

      {/* Fourth image */}
      <div className="relative bg-green-600 group">
        <img src={cta1} alt="" className="h-80 object-cover" />
        <p className="border-gray-100  text-nowrap absolute uppercase text-2xl z-20 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          neighborhood guides{" "}
        </p>
        <div className="border border-gray-100 px-24 py-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:px-36 group-hover:py-32"></div>
      </div>

      {/* Fifth image */}
      <div className="relative bg-green-600 group">
        <img src={cta1} alt="" className="h-80 object-cover" />
        <p className="border-gray-100 text-nowrap absolute uppercase text-2xl z-20 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          home valuation{" "}
        </p>
        <div className="border border-gray-100 px-24 py-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:px-36 group-hover:py-32"></div>
      </div>

      {/* Sixth image */}
      <div className="relative bg-green-600 group">
        <img src={cta1} alt="" className="h-80 object-cover" />
        <p className="border-gray-100 absolute uppercase text-2xl z-20 text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
          new development{" "}
        </p>
        <div className="border border-gray-100 px-24 py-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:px-36 group-hover:py-32"></div>
      </div>
    </div>
  );
};

export default CalltoAction;
