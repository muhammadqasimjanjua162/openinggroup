import React from "react";

const NonStickyNavbar = ({ toggleSideNav }) => {
  return (
    <div>
      <nav className=" text-white text-xs font-medium mx-auto w-full  py-9 z-30 relative px-14">
        <div className="mx- flex justify-between items-center">
          <ul className="font-xs flex uppercase">
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Properties</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Buyers</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Sellers</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Our Office</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Our Team</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">About Us</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Philanthropy</a>
              <div className="ml-8 h-3 border-l-1 border-white"></div>
            </li>
            <li className="mr-8 flex items-center justify-center">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div>
            <div
              className="flex flex-col ml-auto items-center justify-end cursor-pointer"
              onClick={() => toggleSideNav()}
            >
              <svg
                className="w-5 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 5h15M1 9h15"
                />
              </svg>

              <span className="text-xs font-medium">Menu</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NonStickyNavbar;
