import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ReviewSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const sliderData = [
    {
      description:
        "Jason’s aggressive advertising and diplomatic communication skills make him the perfect agent. Most of all, we are grateful for his guidance and patience as we navigated such a personal decision. He ...",
      name: "Gil Pelesrttttttttttttt Attorney,\n Proskauer Rose LLP",
    },
    {
      description:
        "Jason’s aggressive advertising and diplomatic communication skills make him the perfect agent. Most of all, we are grateful for his guidance and patience as we navigated such a personal decision. He ...",
      name: "Gil Pelerrrrrrrrrrrrrrs Attorney,\n Proskauer Rose LLP",
    },
    {
      description:
        "Jason’s aggressive advertising and diplomatic communication skills make him the perfect agent. Most of all, we are grateful for his guidance and patience as we navigated such a personal decision. He ...",
      name: "Gil Pelesddddddddddd Attorney,\n Proskauer Rose LLP",
    },
  ];

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="relative"
      >
        {sliderData.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row p-4">
              <div className="flex space-x-4">
                <div className="flex-1 mb-20">
                  <h3 className="text-white leading-6 mb-20">
                    {item.description}
                  </h3>
                  <p className="text-white">{item.name}</p>
                </div>
                <div className="border-l border-l-gray-600 w-[20px] h-[150px]"></div>

                <div className="flex-1 mb-20">
                  <h3 className="text-white mb-10 leading-6">
                    {item.description}
                  </h3>
                  <p className="text-white">{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-[30%]  mx-auto justify-between">
        <button className="button" onClick={previous}>
          <div className="flex justify-center items-center">
            <GrPrevious className="text-white" />
            <span className="text-white">prev</span>
          </div>
        </button>
        <div>
          {" "}
          <a
            href="https://la.ogroup.com/our-team/what-our-clients-are-saying/"
            className="text-white bg-transparent-500 px-10 py-4  border border-gray-600  text-white hover:bg-gray-300 hover:text-black transition-colors"
          >
            Read More +
          </a>
        </div>

        <button className="button" onClick={next}>
            
          <div className="flex items-center justify-center">
            {" "}
            <span className="text-white">next</span>
            <GrFormNext className="text-white size-6" />
          </div>
        </button>
      </div>

      {/* Centered Button */}
    </div>
  );
};

export default ReviewSlider;
