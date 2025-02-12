import React from "react";

const PropertyDisplay = ({ totalprice, perMonth, img, address }) => {
  console.log(img, "img");
  return (
    <div className="property-display flex flex-col md:flex-row relative overflow-hidden">
      <div className="w-full bg-amber-300 border">
        <img
          src={img}
          alt="Property"
          className="w-full h-auto  hover:scale-125 ease-in duration-500"
        />
        <div className=" flex text-white absolute bottom-0 left-[40%] gap-2 items-center">
          <p
            className="text-3xl mb-0"
            style={{ marginBottom: 0 }}
          >{`$${totalprice}`}</p>
          <p className="text-lg" style={{ marginBottom: 0 }}>
            {" "}
            {perMonth}
          </p>
          <p className="text-lg" style={{ marginBottom: 0 }}>
            {address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
