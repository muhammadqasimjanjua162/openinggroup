import React from "react";

const PropertyDisplay = ({ totalprice, perMonth, img, address }) => {
  console.log(img, "img");
  return (
    <div className="property-display flex flex-col md:flex-row relative overflow-hidden group">
      <div className="w-full bg-amber-300 border">
        <img
          src={img}
          alt="Property"
          className="w-full h-auto  hover:scale-125 ease-in duration-500"
        />
        <div className=" flex text-white absolute bottom-0 left-[40%] gap-2 items-center group-hover:hidden">
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
      <div className="w-full  absolute bg-amber-950 bottom-0 left-0 hidden group-hover:flex">
        <div className="w-3/4 bg-amber-50 flex">
          <p className="text-3xl">{totalprice}</p>
          <p className="text-2xl">{address}</p>
        </div>
        <div className="w-1/4 bg-amber-300">Heloo2</div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
