import React from "react";

const NonStickyNavbar = ({ toggleSideNav }) => {
  return (
    <div>
      <nav className="flex justify-between items-center text-white text-lg font-medium mx-auto w-full px-6 md:px-16 py-6 z-30 relative">
        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex flex-wrap justify-center lg:bg-transparent lg:justify-start uppercase text-sm">
          <a
            href="https://la.ogroup.com/properties/our-properties/"
            className="hover:text-blue-400 transition-all duration-300 pr-8 py-2 border-r border-gray-300 last:border-0"
          >
            Properties
          </a>
          <a
            href="https://la.ogroup.com/buyers/"
            className="hover:text-blue-400 transition-all duration-300 px-8 py-2 border-r border-gray-300 last:border-0"
          >
            Buyers
          </a>
          <a
            href="https://la.ogroup.com/sellers/list-with-us/"
            className="hover:text-blue-400 transition-all duration-300 px-8 py-2 border-r border-gray-300 last:border-0"
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

        {/* Menu Icon for Mobile and Medium Screens */}
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
