import React from "react";
import netflix from "../../assets/img/HomePage/Media/netflix2.webp";
import netflix2 from "../../assets/img/HomePage/Media/netflixImg.webp";

const Media = () => {
  return (
    <div className="bg-black flex p-30 gap-10 justify-center items-center m-auto">
      <div className="left">
        <img src={netflix2} alt="" className="object-cover " />
      </div>
      <div className="right flex items-center justify-end">
        <img
          src={netflix}
          alt=""
          className="object-cover"
          style={{ width: "90%" }}
        />
      </div>
    </div>
  );
};

export default Media;
