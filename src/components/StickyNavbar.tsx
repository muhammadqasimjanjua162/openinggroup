import React from "react";
import navImg from "../assets/img/olpheian.webp";
import navbg from "../assets/img/fixednavbg.webp";
import { TfiEmail } from "react-icons/tfi";

const menuItems = [
  {
    name: "Properties",
    link: "https://la.ogroup.com/properties/our-properties/",
    subMenu: [
      {
        name: "Active Listings",
        link: "https://la.ogroup.com/properties/our-properties/",
      },
      {
        name: "Recent Sales",
        link: "https://la.ogroup.com/properties/recent-sales/",
      },
      {
        name: "New Development",
        link: "https://la.ogroup.com/new-development/",
      },
      {
        name: "Interactive Map",
        link: "https://la.ogroup.com/properties/interactive-map/",
      },
    ],
  },
  {
    name: "Buyers",
    link: "https://la.ogroup.com/buyers/",
    subMenu: [
      { name: "Buy with Us", link: "https://la.ogroup.com/buyers/" },
      {
        name: "Neighborhood Guides",
        link: "https://la.ogroup.com/buyers/neighborhood-guides/",
      },
      { name: "Search MLS", link: "https://la.ogroup.com/buyers/search-mls/" },
    ],
  },
  {
    name: "Sellers",
    link: "https://la.ogroup.com/sellers/list-with-us/",
    subMenu: [
      {
        name: "List with Us",
        link: "https://la.ogroup.com/sellers/list-with-us/",
      },
      { name: "Concierge", link: "https://la.ogroup.com/concierge/" },
      { name: "Marketing", link: "https://la.ogroup.com/marketing-2/" },
    ],
  },
  {
    name: "About Us",
    link: "https://la.ogroup.com/our-team/oppenheim-group/",
    subMenu: [
      {
        name: "The Oppenheim Group",
        link: "https://la.ogroup.com/our-team/oppenheim-group/",
      },
      {
        name: "Jason Oppenheim",
        link: "https://la.ogroup.com/our-team/jason-oppenheim/",
      },
    ],
  },

  { name: "Our Team", link: "https://la.ogroup.com/our-team/" },
  { name: "Our Office", link: "https://la.ogroup.com/office/" },
  { name: "Philanthropy", link: "https://la.ogroup.com/philanthropy/" },
  { name: "Contact Us", link: "https://la.ogroup.com/contact-us/" },
];

const StickyNavbar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 py-2.5 bg-[#1d1d1d]">
          <div className="flex items-center">
            <a href="https://la.ogroup.com/">
              <img
                className="w-[280px] h-[45px]"
                src={navImg}
                alt="Website Logo"
              />
            </a>
          </div>
          <nav className="flex items-center ml-8">
            <ul className="flex text-white" style={{ marginBottom: 0 }}>
              {menuItems.map((item, index) => (
                <li key={index} className="relative flex items-center group">
                  <a
                    href={item.link}
                    className="text-xs uppercase hover:text-gray-300 flex justify-center items-center"
                  >
                    {item.name}
                    <div className="h-6 border-r mx-2"></div>
                  </a>
                  {item.subMenu && (
                    <>
                      <ul className="absolute left-0 mt-2 bg-white text-black shadow-md hidden group-hover:block">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 text-sm uppercase"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-6">
            {/* <a href="tel:+1.323.488.3038">
              <img
                src="https://la.ogroup.com/wp-content/themes/ogroup.com/images/site-phone-a.png"
                alt="Phone"
                className="w-5 h-5"
              />
            </a> */}
            <a
              href="mailto:office@ogroup.com"
              className="text-white hover:text-gray-300 rounded-full border-1 border-gray-300 hover:bg-red-500 p-2"
            >
              <TfiEmail className="fill-current text-white" />
            </a>
            <div
              style={{ backgroundImage: `url(${navbg})` }}
              className="flex flex-col ml-auto items-center justify-end cursor-pointer p-0"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
