import React, { useEffect, useRef, useState } from "react";
import "lazysizes";
import backgroundImage1 from "../../assets/img/HomePage/Media/performance-bg-a.jpg";
import backgroundImage2 from "../../assets/img/HomePage/Media/concierge-after.webp";
import backgroundImage3 from "../../assets/img/HomePage/Media/reviewImg.webp"; // Additional background image
import SalesAndMedia from "../../components/HomePage/SalesAndMedia";

const PartnersWithUs = () => {
  const sectionRef = useRef(null);
  const [bgImage, setBgImage] = useState(backgroundImage1); // Set initial background image
  const [bgOpacity, setBgOpacity] = useState(1); // Initial opacity for the background image

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fade in the second background image when section enters the viewport
            if (entry.target.id === "section1") {
              setBgImage(backgroundImage1);
              setBgOpacity(1);
            } else if (entry.target.id === "section2") {
              setBgImage(backgroundImage2);
              setBgOpacity(1); // Fade in the second image
            } else if (entry.target.id === "section3") {
              setBgImage(backgroundImage3);
              setBgOpacity(1); // Fade in the third image
            }
          } else {
            // Fade out the background when section exits the viewport
            setBgOpacity(0);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is in the viewport
      }
    );

    // Observing the sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <div
        id="section1"
        ref={sectionRef}
        className="section text-center p-2 text-2xl col-span-4 row-span-2 mx-auto text-white bg-cover bg-center relative lazyload"
        style={{
          backgroundImage: `url(${bgImage}), url(${backgroundImage1})`, // Set first background as fallback
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out, opacity 1s ease-in-out", // Transition for smooth fade
          opacity: bgOpacity, // Control opacity to fade in/out background images
        }}
      >
        {/* Overlay black color with opacity */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat filter grayscale bg-blend-overlay bg-right-top w-[100%]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: "rgba(13, 13, 13, 0.5)", // RGBA color for the overlay
          }}
        ></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-2 ml-[20%]">
            <span>01</span>
            <hr className="border-t-4 w-[30px] border-red-600" />
          </div>
          <span className="text-7xl font-bold uppercase">Why Work With Us</span>
          <div className="flex items-center justify-center mx-auto bg-yellow-200">
            <hr className="border-t-4 w-[40%] border-gray-300" />
            <span className="uppercase text-3xl text-red-600">Our Number</span>
          </div>

          <button className="px-8 py-2 border border-gray-400 text-gray-800 uppercase relative">
            <div className="w-[40px] h-[1px] bg-gray-300 absolute top-[50%] left-[-8%]"></div>
            <a href="#" className="uppercase text-xs font-semibold">
              View All Properties
            </a>
          </button>
          <div className="absolute left-[50%] bottom-35 transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
        </div>
      </div>

      <div
        id="section2"
        className="section text-center p-2 text-2xl col-span-4 row-span-2 mx-auto text-white bg-cover bg-center relative lazyload"
        style={{
          backgroundImage: `url(${bgImage}), url(${backgroundImage1})`, // Overlay images
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out, opacity 1s ease-in-out",
          opacity: bgOpacity,
        }}
      >
        {/* Similar Content for Section 2 */}
        <div className="relative z-10">
          <div className="flex justify-around mx-16 text-white">
            <div className="flex flex-col border-r-2 border-r-gray-300 pr-13">
              <p className="text-6xl font-bold">3.5B+</p>
              <p className="text-2xl uppercase">Sales Volume</p>
            </div>

            <div className="flex flex-col border-r-2 border-r-gray-300 pr-13">
              <p className="text-6xl font-bold">3.5B+</p>
              <p className="text-2xl uppercase">Sales Volume</p>
            </div>

            <div className="flex flex-col border-r-2 border-r-gray-300 pr-13">
              <p className="text-6xl font-bold">3.5B+</p>
              <p className="text-1xl uppercase">Sales Volume</p>
            </div>

            <div className="flex flex-col">
              <p className="text-6xl font-bold">3.5B+</p>
              <p className="text-2xl uppercase">Sales Volume</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="section3"
        className="section text-center p-2 text-2xl col-span-4 row-span-2 mx-auto text-white bg-cover bg-center relative lazyload"
        style={{
          backgroundImage: `url(${bgImage}), url(${backgroundImage1})`, // Overlay images
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out, opacity 1s ease-in-out",
          opacity: bgOpacity,
        }}
      >
        <SalesAndMedia />
      </div>
    </div>
  );
};

export default PartnersWithUs;
