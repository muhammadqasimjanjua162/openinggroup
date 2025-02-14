import React from "react";
import formBg from "../assets/img/formbg.webp";
import { IconSlider } from "./Slider";

const Form = () => {
  return (
    <div
      className="mb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)),url(${formBg})`,
      }}
    >
      <form
        className="our-properties-form py-4 bg-[rgba(27,27,27,0.9)] p-10 flex"
        method="GET"
        action="https://la.ogroup.com/properties/our-properties/"
      >
        <div className="w-7/10">
          <div className="our-properties-form-title mb-6">
            <span className="text-lg font-semibold text-white uppercase">
              Search <b>The Oppenheim Group Listings</b>
            </span>
          </div>

          <div className="our-properties-form-content flex flex-wrap justify-between gap-10">
            {/* Left Side Inputs */}
            <div className="our-properties-form-left w-full flex flex-wrap gap-5">
              {/* Price */}
              <div className="form-group  w-[45%] text-white uppercase  flex flex-col">
                <label
                  htmlFor="listings-price"
                  className="block text-xs font-medium"
                >
                  Price
                </label>
                <IconSlider min={0} max={100} />
              </div>

              <div className="form-group w-[45%] text-white uppercase">
                <select className="block w-full shadow-sm text-black border-b-1 border-gray-300 appearance-none  focus:outline-none focus:border-b-2 py-2 text-xs uppercase">
                  <option className="text-white uppercase" selected>
                    Neighborhood
                  </option>
                  <option className="uppercase text-black" value="B.H.P.O.">
                    B.H.P.O.
                  </option>
                  <option className="uppercase text-black" value="Balboa Coves">
                    Balboa Coves
                  </option>
                  <option className="uppercase text-black" value="Bel-Air">
                    Bel-Air
                  </option>
                  <option
                    className="uppercase text-black"
                    value="Beverly Hills"
                  >
                    Beverly Hills
                  </option>
                </select>
              </div>

              {/* Min Beds */}
              <div className="form-group w-[45%] text-white">
                <select className="block w-full shadow-sm text-xs text-black uppercase border-b-1 border-gray-300 appearance-none  focus:outline-none focus:border-b-2 py-2">
                  <option value="" className="text-black text-xs">
                    Min Beds
                  </option>
                  <option value="1" className="text-black">
                    1
                  </option>
                  <option value="2" className="text-black">
                    2
                  </option>
                  <option value="3" className="text-black">
                    3
                  </option>
                </select>
              </div>

              {/* Min Baths */}
              <div className="form-group w-[45%] text-white">
                <select className="block w-full shadow-sm text-black uppercase border-b-1 border-gray-300 appearance-none  focus:outline-none focus:border-b-2 py-2">
                  <option className="text-white uppercase" value="">
                    Min Baths
                  </option>
                  <option className="uppercase text-black" value="1">
                    1
                  </option>
                  <option className="uppercase text-black" value="2">
                    2
                  </option>
                  <option className="uppercase text-black" value="3">
                    3
                  </option>
                </select>
              </div>

              {/* Search by Address */}
              <div className="form-group w-[90%] text-white">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Search Listing by Address"
                  className="w-full text-white border-gray-300 shadow-sm px-4 py-2 border-0 border-b-1 focus:outline-none focus:border-b-2"
                />
              </div>

              {/* Checkbox */}

              <div className="form-group w-[80%]">
                <label className="inline-flex items-center text-sm text-gray-600 space-x-4">
                  <input
                    type="checkbox"
                    name="all-listings"
                    className="mr-2 w-6 h-6 border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-0"
                  />
                  <span className="uppercase text-white">All Listings</span>

                  <input
                    type="checkbox"
                    name="los-angeles"
                    className="mr-2 w-6 h-6 border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-0"
                  />
                  <span className="uppercase text-white">Los Angeles</span>

                  <input
                    type="checkbox"
                    name="orange-county"
                    className="mr-2 w-6 h-6 border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-0"
                  />
                  <span className="uppercase text-white">Orange County</span>
                </label>
              </div>

              <div className="form-group w-[80%]">
                <label className="inline-flex items-center text-sm text-gray-600 space-x-4">
                  <input
                    type="checkbox"
                    name="all-listings"
                    className="mr-2 w-6 h-6 border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-0"
                  />
                  <span className="uppercase text-white">All Listings</span>

                  <input
                    type="checkbox"
                    name="los-angeles"
                    className="mr-2 w-6 h-6 border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-0"
                  />
                  <span className="uppercase text-white">Los Angeles</span>

                  <input
                    type="checkbox"
                    name="orange-county"
                    className="mr-2 w-6 h-6 border-2 border-red-500 bg-transparent checked:bg-red-500 checked:border-red-500 focus:ring-0"
                  />
                  <span className="uppercase text-white">Orange County</span>
                </label>
              </div>
            </div>

            {/* Search Button on Right */}
          </div>
        </div>
        <div className="w-3/10 flex justify-center items-center">
          <div className="our-properties-form-right text-white uppercase">
            <button
              type="submit"
              className=" text-white font-semibold  border border-gray-300 hover:bg-red transition duration-300 px-10 py-4 uppercase"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
