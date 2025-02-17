import React from "react";
import netflix from "../../assets/img/HomePage/Media/netflix2.webp";
import netflix2 from "../../assets/img/HomePage/Media/netflixImg.webp";

const Media = () => {
  return (
    <div className="bg-black flex justify-around items-center w-full h-full">
      <div className="left">
        <img src={netflix2} alt="" className="object-cover w-[70%]" />
      </div>
      <div className="right">
        <img src={netflix} alt="" className="object-cover w-[70%]" />
      </div>
    </div>
  );
};

export default Media;
