import React from "react";
import badgeImg from "../../assets/img/footer/footer badge.webp";
import footerlogo from "../../assets/img/footer/footerlogo.webp";
import footerproperty from "../../assets/img/footer/footerpropertylogo.webp";

const FooterBadges = () => {
  return (
    <div className="flex gap-x-4 mx-12">
      <div className="flex w-8/14 gap-16">
        <img src={badgeImg} alt="Description" className="w-[25%] h-[60%]" />
        <img src={badgeImg} alt="Description" className="w-[25%] h-[60%]" />
        <img src={badgeImg} alt="Description" className="w-[25%] h-[60%]" />
      </div>
      <div className="flex gap-x-4 w-6/14">
        <img src={footerlogo} alt="Description" className="w-[25%] h-[50%]" />
        <img
          src={footerproperty}
          alt="Description"
          className="w-[20%] h-[70%]"
        />
        <img
          src={footerproperty}
          alt="Description"
          className="w-[20%] h-[70%]"
        />
        <img
          src={footerproperty}
          alt="Description"
          className="w-[20%] h-[70%]"
        />
      </div>
    </div>
  );
};

export default FooterBadges;
