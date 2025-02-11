import { useState, useEffect, useRef } from "react";
import headerBg from "../assets/img/active-listing-banner.webp";
import olpheian from "../assets/img/olpheian.webp";
// import { Sidebar } from "lucide-react";
import Sidebar from "../components/Sidebar";
import NonStickyNavbar from "./NonStickyNavbar";
import StickyNavbar from "./StickyNavbar";

const Header: React.FC = () => {
  // console.log(props, "myprops");
  const [navBarshow, setNavbar] = useState(false);

  const sidebarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true); // Show sticky navbar after scrolling 100px
    } else {
      setIsSticky(false); // Hide sticky navbar when scrolling back up
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setNavbar(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleSideNav = () => {
    setNavbar(!navBarshow);
    console.log(navBarshow, "show");
  };

  return (
    <div>
      <header className="header relative w-full" style={{ height: "280px" }}>
        {/* Background Image Wrapper */}
        <div
          className="absolute inset-0 z-0" // Absolute positioning for the background image container
          style={{
            backgroundImage: `url(${headerBg})`, // Background image URL
            backgroundSize: "cover", // Ensures the background covers the entire header
            backgroundPosition: "center", // Centers the background image
            backgroundRepeat: "no-repeat", // Prevents background image repetition
            filter: "grayscale(100%)", // Applies grayscale only to the background image
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark overlay (adjust opacity as needed)
          }}
        ></div>

        {/* Navbar Section */}
        {isSticky ? (
          <StickyNavbar />
        ) : (
          <NonStickyNavbar toggleSideNav={toggleSideNav} />
        )}

        {/* Image Section (olpheian image, without grayscale) */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <img
            className="w-full sm:w-80 md:w-96 lg:w-116 object-cover rounded-lg mt-16"
            src={olpheian}
            alt="Responsive Image"
            style={{ filter: "none" }} // This ensures the grayscale is not applied to this image
          />
        </div>

        {/* Sidebar */}
        {navBarshow ? (
          <Sidebar
            navBarshow={navBarshow}
            setNavbar={setNavbar}
            ref={sidebarRef}
          />
        ) : null}
      </header>
    </div>
  );
};

export default Header;
