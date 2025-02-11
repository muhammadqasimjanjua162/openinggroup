import React, { useState } from "react";
import logo from "../assets/img/olpheian.webp";
import sidebarBg from "../assets/img/sidebarbg.webp";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ navBarshow, setNavbar, ref }) => {
  console.log("Hellooo");
  console.log(navBarshow, "val");
  return (
    <div>
      <>
        {navBarshow ? (
          <RxCross1
            className="text-[24px] text-white bg-amber-50  cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setNavbar(!navBarshow)}
          />
        ) : (
          <svg
            onClick={() => setNavbar(!navBarshow)}
            className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="90"
            height="90"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}

        <div
          ref={ref}
          className={`fixed top-0 right-0 w-[68vw] h-full bg-[#171717] bg-[url(${sidebarBg})] text-white p-10 pl-20 z-40
  transition-transform duration-[0000ms] cubic-bezier(0.25, 0.8, 0.25, 1)
  ${navBarshow ? "translate-x-0" : "translate-x-full"}`}
        >
          <img src={logo} alt="Logo" className="w-[55%] h-auto mb-18 mt-8" />
          <div className="mt-6">
            <div className="flex gap-x-24">
              <div className="w-1/7">
                <h3>Properties</h3>
                <ul>
                  <li>Active Listings</li>
                  <li>Recent Sales</li>
                  <li>New Developemnt</li>
                  <li>interactive map</li>
                </ul>
              </div>
              <div className="w-1/7">
                <h3>Buyers</h3>
                <ul>
                  <li>Active Listings</li>
                  <li>Recent Sales</li>
                  <li>New Developemnt</li>
                </ul>
              </div>

              <div className="w-1/7">
                <h3>sellers</h3>
                <ul>
                  <li>Active Listings</li>
                  <li>Recent Sales</li>
                  <li>New Developemnt</li>
                  <li className="border-b border-dashed border-gray-400 pb-2">
                    Item 1
                  </li>
                  <li className="border-b border-dashed border-gray-400 pb-2">
                    Item 2
                  </li>
                  <li className="border-b border-dashed border-gray-400 pb-2">
                    Item 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
