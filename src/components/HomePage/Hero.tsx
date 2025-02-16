import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import necessary styles
import Slide7 from "../../assets/img/HomePage/Hero/slide-7.webp";
import Slide5 from "../../assets/img/HomePage/Hero/slide-5.webp";
import Slide3 from "../../assets/img/HomePage/Hero/slide-3.webp";
import { IoIosArrowDropdown } from "react-icons/io";
import bgLogo from "../../assets/img/olpheian.webp";
import Header from "../Header";
import NonStickyNavbar from "../NonStickyNavbar";

const Hero = () => {
  // Images array containing the paths to the images
  const images = [{ src: Slide7 }, { src: Slide5 }, { src: Slide3 }];

  // Slider settings for autoplay and transitions
  const slideSettings = {
    duration: 3000, // Time each slide is visible (in milliseconds)
    transitionDuration: 500, // Time it takes to transition between slides (in milliseconds)
    infinite: true, // The slider will loop forever
    autoplay: true, // Enable autoplay for automatic image change
    // Show navigation dots (optional)
  };

  // Styling for each slide
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px", // Set height of the slide
  };

  return (
    <div className="slide-container relative bg-red-500">
      <Slide {...slideSettings}>
        {/* Apply the slide settings */}
        {images.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.src})`, // Set the background image dynamically
              }}
            />
          </div>
        ))}
      </Slide>
      <div className=" absolute top-0">
        <NonStickyNavbar />
      </div>

      {/* Logo image */}
      <img
        src={bgLogo}
        alt="Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-100"
      />

      <button className=" absolute bottom-30 px-16 py-4 border border-gray-100  left-[60%] transform -translate-x-1/2">
        learn more
      </button>
      <div className="absolute left-[50%] bottom-35 transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>

      {/* Arrow Icon */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <IoIosArrowDropdown
          size={40}
          className="bg-green-300 rounded-full fill-white hover:bg-red-600 p-2"
        />
      </div>
    </div>
  );
};

export default Hero;
