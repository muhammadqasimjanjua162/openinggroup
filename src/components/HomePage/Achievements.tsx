import React, { useState, useEffect, useRef } from "react";
import "lazysizes"; // Import lazysizes for lazy loading
import img1 from "../../assets/img/HomePage/Media/performance-bg-a.jpg";
import img2 from "../../assets/img/HomePage/Media/concierge-before.webp";

const Achievements = () => {
  const [backgroundImage, setBackgroundImage] = useState(img1); // Default to img1
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const entryRect = entry.target.getBoundingClientRect();
          const sectionHeight = entry.target.offsetHeight;
          const sectionTop = entryRect.top;

          // If the section is in the first 70% of the viewport, show img1
          if (sectionTop < window.innerHeight * 0.7) {
            setBackgroundImage(img1);
          }

          // If the section is in the next 30% of the viewport, show img2
          else if (
            sectionTop < window.innerHeight &&
            sectionTop + sectionHeight > window.innerHeight * 0.7
          ) {
            setBackgroundImage(img2);
          }
        } else {
          // Reset the background to img1 when the section is out of view
          setBackgroundImage(img1);
        }
      });
    };

    // Ensure that the sectionRef is assigned before observing
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.7, 1], // Observe at 0%, 70%, and 100% visibility
    });

    const sectionElement = sectionRef.current; // Get the section element using ref
    if (sectionElement) {
      observer.observe(sectionElement); // Observe the section
    }

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="scrolling-background-section"
      ref={sectionRef} // Attach ref to the section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-300"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content */}
      <p className="absolute inset-0 p-6 text-white text-2xl z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        laboriosam, a repudiandae optio quaerat ab quia qui aspernatur sint
        voluptatum vero provident aperiam. Vitae voluptatem ipsa aperiam
        obcaecati nulla! Corporis inventore obcaecati doloribus non animi magni
        consectetur laboriosam accusantium, aspernatur repudiandae omnis rerum
        maxime, cumque illo quas voluptatem deserunt quia eos provident
        molestiae quidem expedita tempore ab ullam. Aliquam blanditiis porro ab,
        officia fuga voluptate, in illo veritatis, quis a debitis ipsum omnis
        dolore quaerat magni. Ipsa odio laudantium voluptatum accusantium
        quibusdam dolorem in, dolore hic labore, magni non? Sequi earum
        recusandae maiores? Rerum nobis magnam quas quos quia dolorem sit
        molestiae aliquam accusamus, voluptas omnis natus, consectetur atque
        quisquam. Numquam tempore quidem qui accusantium quasi pariatur quos
        velit nisi architecto? Ullam possimus minus exercitationem totam!
        Quaerat nisi, beatae cumque tempora saepe quisquam enim maxime alias,
        qui necessitatibus ex molestias tenetur nihil. Laboriosam nulla nisi
        mollitia culpa, placeat eveniet fugiat ab beatae nam aspernatur amet in
        illo quos at facere obcaecati, id consequatur. Assumenda facere, autem
        asperiores accusamus atque iure, accusantium omnis dolorem mollitia,
        quia sit officiis culpa nulla incidunt repellendus praesentium dolore
        cum?
      </p>

      {/* Lazy load images using lazysizes */}
      <img
        data-src={img1}
        className="lazyload hidden"
        alt="Background Image 1"
      />
      <img
        data-src={img2}
        className="lazyload hidden"
        alt="Background Image 2"
      />
    </div>
  );
};

export default Achievements;
