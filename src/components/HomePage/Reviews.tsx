import React from "react";
import ReviewImg from "../../assets/img/HomePage/Media/reviewImg.webp";

const Reviews = () => {
  return (
    <div>
      <div className="text-center p-2 text-2xl mb-20 col-span-4 row-span-2">
        <div className="flex items-center space-x-2 ml-20">
          <span>01</span>
          <hr className="border-t-4 w-[30px] border-red-600" />
        </div>
        <div className="flex  items-center ml-25">
          <span className="text-7xl font-bold uppercase">JASON</span>
          <hr className="border-t-4 w-[40%] border-gray-300" />
        </div>
        <div className="flex ml-40">
          <span className="uppercase text-5xl font-medium text-red-600">
            Oppenheim
          </span>
        </div>
      </div>
      <div>
        <div className="flex space-x-2 mx-16 bg-gray-900">
          <div className="flex w-1/3">
            <img src={ReviewImg} alt="" />
          </div>
          <div className="flex w-2/3 text-white p-16 tracking-wider font-light leading-8">
            <p>
              As President and Founder of The Oppenheim Group, Jason leads a
              team responsible for representing buyers and sellers of
              distinguished properties throughout Southern California. He was
              recognized as the Best Real Estate Agent in the United States by
              the International Property Awards and as the #1 real estate agent
              in the Hollywood Hills/West Hollywood by the Wall Street Journal.
              He is also identified as a Top Real Estate Agent in Los Angeles by
              The Hollywood Reporter and Variety in their annual lists, through
              2024. Jason receives significant attention within the real estate
              community and beyond as a star of the three time Emmy nominated
              Netflix show Selling Sunset and Selling the OC, featuring his
              brokerage and agents as they sell luxury homes to their affluent
              and celebrity clients. With more than $3.5 billion in closed
              sales, he currently has more than $500 million in active listings
              and has achieved numerous record-breaking results for his clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
