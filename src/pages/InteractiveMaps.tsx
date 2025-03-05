import React, { useRef, useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MapHero from "../components/InteractiveMap/MapHero";
import MapHeader from "../components/InteractiveMap/MapHeader";
import { RiArrowDropDownLine } from "react-icons/ri";
import bg from "../assets/img/HomePage/Media/map-bg-img.webp";

// Map container styling
const containerStyle = {
  width: "100%",
  height: "100vh",
};

// Default map center
const center = {
  lat: 41.3851,
  lng: 2.1734,
};

const InteractiveMaps = () => {
  // State to keep track of which marker types are checked
  const [checkedTypes, setCheckedTypes] = useState({
    active: true,
    leased: true,
    commercial: true,
    sold: true,
  });

  // All locations data
  const allLocations = [
    {
      name: "Location 1",
      location: { lat: 41.3954, lng: 2.162 },
      type: "active",
    },
    {
      name: "Location 2",
      location: { lat: 41.3917, lng: 2.1649 },
      type: "active",
    },
    {
      name: "Location 3",
      location: { lat: 41.3773, lng: 2.1585 },
      type: "sold",
    },
    {
      name: "Location 4",
      location: { lat: 41.3797, lng: 2.1682 },
      type: "leased",
    },
    {
      name: "Location 5",
      location: { lat: 41.4055, lng: 2.1915 },
      type: "commercial",
    },
    {
      name: "Location 6",
      location: { lat: 41.3955, lng: 2.1915 },
      type: "leased",
    },
    {
      name: "Location 7",
      location: { lat: 41.3855, lng: 2.1915 },
      type: "leased",
    },
    {
      name: "Location 8",
      location: { lat: 41.3755, lng: 2.1915 },
      type: "active",
    },
    {
      name: "Location 9",
      location: { lat: 41.3655, lng: 2.1915 },
      type: "commercial",
    },
  ];

  // Function to get the color of a marker based on its type
  const getMarkerColor = (type) => {
    switch (type) {
      case "active":
        return "blue"; // Blue for active
      case "sold":
        return "red"; // Red for sold
      case "leased":
        return "green"; // Green for leased
      case "commercial":
        return "orange"; // Orange for commercial
      default:
        return "gray"; // Default color
    }
  };

  const filteredLocations = allLocations.filter(
    (location) => checkedTypes[location.type] // Only show locations whose type is checked
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  console.log(isOpen, "openn");

  return (
    <div
      className="reletive bg-cover bg-fixed bg-center z-10"
      style={{ backgroundImage: `url(${bg})` }}
      onClick={() => setIsOpen(false)}
    >
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Checkboxes to toggle marker visibility */}
      <MapHero />
      <div className="flex flex-col sm:flex-col lg:flex-row border border-amber-400 w-[90%] h-full mx-auto sm:items-center  lg:justify-between">
        <MapHeader />
        <div className="relative flex bg-green-400">
          {/* Dropdown Button - Full Height */}
          <button
            onClick={(e) => {
              setIsOpen(!isOpen);
              e.stopPropagation();
            }}
            className={`px-9  !text-sm  !text-white bg-[#555555] ${
              isOpen ? "bg-[#e51937]" : "bg-[#555555]"
            } hover:bg-[#e51937] active:bg[#e51937]  focus:outline-none h-full flex items-center py-4  sm:py-6 !uppercase`}
          >
            Listing Status
            <RiArrowDropDownLine className="size-6" />
          </button>

          {/* Second Button - Full Height */}
          <button className="px-9  bg-[#383838] text-white text-2xl  focus:outline-none h-full flex py-4 sm:py-6 items-center">
            Price Range
            <RiArrowDropDownLine className="size-6" />
          </button>

          {/* Dropdown Menu */}
          {/* Dropdown Menu */}
          {isOpen && (
            <div
              ref={dropdownRef}
              className="checkbox-container text-2xl flex flex-col absolute z-10 bg-white shadow-md border border-gray-300 mt-18 w-48 p-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {["active", "sold", "leased", "commercial"].map((type) => {
                const typeColors = {
                  active: "bg-green-500",
                  sold: "bg-red-500",
                  leased: "bg-blue-500",
                  commercial: "bg-yellow-500",
                };
                return (
                  <label
                    key={type}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    {/* Checkbox Input */}
                    <input
                      type="checkbox"
                      checked={checkedTypes[type]}
                      onChange={() =>
                        setCheckedTypes((prev) => ({
                          ...prev,
                          [type]: !prev[type],
                        }))
                      }
                      className="peer hidden"
                    />

                    {/* Custom Checkbox UI */}
                    <div className="w-4 h-4 border border-gray-400 rounded-sm bg-white peer-checked:bg-red-500 flex items-center justify-center">
                      {/* Checkmark Icon (only appears when checked) */}
                      <svg
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M20.28 5.22a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L9 14.44l9.72-9.72a.75.75 0 0 1 1.06 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Label with Colored Indicator */}
                    <div className="mb-6 sm:mb-0 bg-green-50 flex items-center">
                      <span
                        className={`w-4 h-4 rounded-full inline-block mr-2 ${typeColors[type]}`}
                      ></span>
                      <span className="text-sm capitalize">{type}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Load the Google Map */}
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          {/* Render filtered markers */}
          {filteredLocations.map((item) => {
            const color = getMarkerColor(item.type); // Get the color for the marker
            return (
              <Marker
                key={item.name}
                position={item.location}
                icon={{
                  path: "M 0,0 A 1,1 0 1,1 0,-0.0001 A 1,1 0 1,1 0,0 Z", // Custom marker path (round shape)
                  scale: 14, // Make the marker bigger
                  fillColor: color, // Fill color of the marker
                  fillOpacity: 1, // Full opacity
                  strokeWeight: 3, // Border thickness
                  strokeColor: "white", // Border color for better visibility
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default InteractiveMaps;
