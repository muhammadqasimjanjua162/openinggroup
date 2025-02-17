import React from "react";

const PropertyDisplay = ({ totalprice, perMonth, img, address }) => {
  console.log(img, "img");
  console.log(address, "dress");
  return (
    <div className="property-display w-full h-full flex flex-col md:flex-row relative overflow-hidden group">
      <div className="w-full h-full bg-amber-300 border">
        <img
          src={img}
          alt="Property"
          className="w-full h-full object-cover  hover:scale-125 ease-in duration-500"
        />
        <div className=" flex flex-wrap left-[30%] text-white absolute bottom-0 gap-2 items-center  w-full">
          <p
            className="text-2xl font-bold mb-0"
            style={{ marginBottom: 0 }}
          >{`$${totalprice}`}</p>
          <p className="text-lg" style={{ marginBottom: 0 }}>
            {" "}
            {perMonth}
          </p>
          <p className="text-lg  text-white" style={{ marginBottom: 0 }}>
            {address}
          </p>
        </div>
      </div>
      <div className="w-full  absolute  bottom-0 left-0 hidden group-hover:flex">
        <div className="w-3/4 bg-amber-50 flex justify-center items-center">
          <p className="text-3xl">{totalprice}</p>
          <p className="text-2xl">{address}</p>
        </div>
        <div className="w-1/4 bg-amber-black flex justify-center items-center bg-black">
          <a href="#" className="text-white">
            <button className="uppercase text-white">view details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
