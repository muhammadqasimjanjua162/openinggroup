import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex">
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
      <div className="w-1/7">
        <h3>our team</h3>
      </div>
      <div className="w-1/7">
        <h3>our office</h3>
      </div>
      <div className="w-1/7">
        <h3>about us</h3>
        <ul>
          <li>The oppanheium group</li>
          <li>jason oppenheium</li>
          <li>what our clients are saying</li>
        </ul>
      </div>
      <div className="w-1/7">
        <h3>advanced mls search</h3>
        <p>Download our mobile home search app</p>
      </div>
    </div>
  );
};

export default FooterLinks;
