import React from "react";
import footerImg2 from "../../assets/img/footer/footer2.webp";

const FooterGallery = () => {
  return (
    <div className="relative bg-transparent mx-8">
      <div>
        <img
          src={footerImg2}
          alt="description"
          className="w-30 h-32 object-cover"
        />
        <div className="border border-gray-400 h-28 flex flex-col gap-1 justify-center items-center px-2 w-44 absolute top-2 left-24  text-white">
          <h3>West hoolywood</h3>
          <p>8606 Sunset Blvd.</p>
          <p>west hoolywwood</p>
        </div>
      </div>
    </div>
  );
};

export default FooterGallery;
