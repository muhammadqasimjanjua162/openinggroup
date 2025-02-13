import React from "react";

const NonStickyNavbar = ({ toggleSideNav }) => {
  return (
    <div>
      <nav className="flex justify-between items-center text-white text-xs font-medium mx-auto w-full md:px-15.5 py-6.5 z-30 relative">
        <div className="lg:flex flex-wrap justify-center lg:bg-transparent lg:justify-start uppercase text-sm bg-green-400">
          <a
            href="https://la.ogroup.com/properties/our-properties/"
            className="hover:text-blue-400 transition-all duration-300 py-2 pr-11.5 relative text-[12px]"
          >
            Properties
            <span className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[14px] w-[1px] mr-4 bg-gray-300"></span>
          </a>

          <a
            href="https://la.ogroup.com/properties/our-properties/"
            className="hover:text-blue-400 transition-all duration-300 py-2 pr-11.5 ml-4 relative text-[12px]"
          >
            Buyers
            <span className="absolute top-1/2  transform -translate-y-1/2 h-[14px] w-[1px] ml-7 bg-red-600"></span>
          </a>

          <a
            href="https://la.ogroup.com/sellers/list-with-us/"
            className="hover:text-blue-400 transition-all duration-300 pr-11.5 ml-4 py-2 border-r border-gray-300 last:border-0 text-[12px]"
          >
            Sellers
          </a>

          <a
            href="https://la.ogroup.com/our-team/"
            className="hover:text-blue-400 transition-all duration-300 px-8 py-2 border-r border-gray-300 last:border-0"
          >
            Our Office
          </a>

          <a
            href="https://la.ogroup.com/our-team/"
            className="hover:text-blue-400 transition-all duration-300 px-8 py-2 border-r border-gray-300 last:border-0"
          >
            About Us
          </a>

          <a
            href="https://la.ogroup.com/our-team/"
            className="hover:text-blue-400 transition-all duration-300 px-8 py-2 border-r border-gray-300 last:border-0"
          >
            Philanthropy
          </a>

          <a
            href="https://la.ogroup.com/contact-us/"
            className="hover:text-blue-400 transition-all duration-300 px-8 py-2 last:border-0"
          >
            Contact Us
          </a>
        </div>

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
      </nav>
    </div>
  );
};

export default NonStickyNavbar;
