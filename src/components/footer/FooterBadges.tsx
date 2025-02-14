import React from "react";
import badgeImg from "../../assets/img/footer/footer badge.webp";
import footerlogo from "../../assets/img/footer/footerlogo.webp";
import footerproperty from "../../assets/img/footer/footerpropertylogo.webp";

const FooterBadges = () => {
  return (
    <div className="flex gap-x-28 mx-12">
      <div className="flex w-9/16 gap-x-6 ">
        <img
          src={badgeImg}
          alt="Description"
          className="w-[33%] object-contain"
        />
        <img
          src={badgeImg}
          alt="Description"
          className="w-[33%] object-contain"
        />
        <img
          src={badgeImg}
          alt="Description"
          className="w-[33%] object-contain "
        />
      </div>
      <div className="flex gap-x-4 w-7/16 ">
        <img
          src={footerlogo}
          alt="Description"
          className="w-[40%] h-[50%] object-contain"
        />
        <img src={footerproperty} alt="Description" className="w-[20%]" />
        <img src={footerproperty} alt="Description" className="w-[20%]" />
        <img src={footerproperty} alt="Description" className="w-[20%]" />
      </div>
    </div>
  );
};

export default FooterBadges;
