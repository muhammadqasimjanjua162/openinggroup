// /src/pages/HomePage.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/HomePage/Hero";
import Footer from "../components/Footer";
import FeaturedListing from "../components/HomePage/FeaturedListing";
import PropertyDisplay from "../components/PropertyDisplay";
// import SomeHomeSection from "../components/SomeHomeSection";
import propertyImg from "./../assets/img/HomePage/Hero/slide-3.webp";
import Media from "../components/HomePage/Media";
import Reviews from "../components/HomePage/Reviews";
import Concierge from "../components/HomePage/Concierge";
import CalltoAction from "../components/HomePage/CalltoAction";
import Achivement from "../components/HomePage/Achievements";
import Popularity from "../components/HomePage/Popularity";
import Clientreview from "../components/HomePage/ClientsReview";
import Philanthropy from "../components/HomePage/Philanthropy";

function HomePage() {
  const propertyData = [
    {
      id: 1,
      totalprice: "123,45,666",
      perMonth: "3000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 2,
      totalprice: "15000",
      perMonth: "3200",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 3,
      totalprice: "21000",
      perMonth: "3500",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 4,
      totalprice: "18000",
      perMonth: "3100",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 5,
      totalprice: "25000",
      perMonth: "4000",
      address: "1001 1st St.",
      img: propertyImg,
    },
    {
      id: 6,
      totalprice: "9000",
      perMonth: "2200",
      address: "1001 1st St.",
      img: propertyImg,
    },

    {
      id: 10,
      totalprice: "22000",
      perMonth: "3600",
      address: "1001 1st St.",
      img: propertyImg,
    },
  ];


  

  return (
    // <div className="bg-red-400 grid grid-cols-1 grid-rows-[250px_auto]">
    //   <div className="bg-green-200"></div>
    //   <div className="grid grid-cols-3">
    //     <div className="bg-blue-400 h-[300px]">hello</div>
    //     <div className="bg-green-400 h-[300px]">div2</div>
    //     <div className="bg-pink-300 h-[363px] -translate-y-16">div2</div>
    //   </div>
    // </div>
    <div className="grid grid-cols-12 gap-2">
      {/* Hero Section */}
      <div className="bg-gray-200 col-span-12 row-span-4 relative">
        <Hero />
      </div>

      {/* Featured Listing Section */}
      <div className="text-center p-2 text-2xl bg-green-300 col-span-4 row-span-2">
        <div className="flex items-center space-x-2 ml-[11%]">
          <span>01</span>
          <hr className="border-t-4 w-[30px] border-red-600" />
        </div>
        <span className="text-5xl font-bold uppercase">featured</span>
        <div className="flex items-center justify-between">
          <hr className="border-t-4 w-[70%] border-gray-300" />
          <span>Listings</span>
        </div>

        <button className="px-8 py-2 border border-gray-400 text-gray-800 uppercase relative">
          <div className="w-[40px] h-[1px] bg-gray-300 absolute top-[50%] left-[-8%]"></div>

          <a href="" className="uppercase text-xs font-semibold">
            view all properties
          </a>
        </button>
        <div className="absolute left-[50%] bottom-35 transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
      </div>

      {/* Another Section */}
      {propertyData.map((property, index) => (
        <div
          key={`${index}_property`}
          className={`text-center relative p-2 text-2xl  bg-red-500 col-span-4 row-span-2 h-[60vh]
           ${
             index === 1
               ? "bg-yellow-400 text-center p-2 text-2xl top-[-20%]  absolute  col-span-4 row-span-2 h-[80vh]  z-10"
               : "text-2xl"
           }
           ${index === 2 ? "shadow-lg" : "shadow-none"}
          `}
        >
          <PropertyDisplay
            totalprice={property.totalprice}
            perMonth={property.perMonth}
            img={property.img}
            address={property.address}
          />
        </div>
      ))}
      <div className="text-center p-2 text-2xl bg-green-300 col-span-4 row-span-2">
        <div className="flex items-center space-x-2 ml-[11%]">
          <span>01</span>
          <hr className="border-t-4 w-[30px] border-red-600" />
        </div>
        <span className="text-5xl font-bold uppercase">featured</span>
        <div className="flex items-center justify-between">
          <hr className="border-t-4 w-[70%] border-gray-300" />
          <span>Listings</span>
        </div>

        <button className="px-8 py-2 border border-gray-400 text-gray-800 uppercase relative">
          <div className="w-[40px] h-[1px] bg-gray-300 absolute top-[50%] left-[-8%]"></div>

          <a href="" className="uppercase text-xs font-semibold">
            view all properties
          </a>
        </button>
        <div className="absolute left-[50%] bottom-35 transform -translate-y-1/2 w-[40px] h-[1px] bg-gray-100"></div>
      </div>

      {/* Lorem Ipsum Section */}
      {/* <div className="bg-yellow-400 text-center p-2 text-2xl  left-[67%] top-[60%] row-start-5 absolute  col-span-4 row-span-2  z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        accusamus aperiam eos ea nemo natus quidem voluptate praesentium nobis,
        qui vero a aliquid facere incidunt expedita adipisci aut vel,
        consequuntur dignissimos neque possimus velit quasi dolorum assumenda?
        Deserunt adipisci fugit corrupti minima inventore quibusdam iste est
      </div> */}

      {/* Footer */}
      <div className="col-span-12">
        <Media />
      </div>
      <div className="col-span-12">
        <Reviews />
      </div>
      <div className="bg-gray-200 col-span-12">
        <Concierge />
      </div>
      <div className="bg-gray-200 col-span-12 row-span-8">
        <CalltoAction />
      </div>
      <div className="col-span-12 row-span-8 bg-green-400">
        <Achivement />
      </div>
      <div className="col-span-12 row-span-8">
        <Popularity />
      </div>
      <div className="col-span-12 row-span-8 mb-100">
        <Clientreview />
      </div>
      <div className="col-span-12 ">
        <Philanthropy />
      </div>
      <div className="bg-gray-200 col-span-12">
        <Footer />
      </div>
    </div>

    /* <div className="grid grid-rows-[150px_1fr] grid-cols-[250px_1fr] bg-cyan-400 w-[80vw] mx-[10vw] my-[8vw] h-[200px]">
      <h1 className="text-black font-bold">Element 1</h1>

      <div className="opacity-80 h-[150px] w-[190px] bg-yellow-400 row-start-1 col-start-1 col-end-2 row-end-2 z-10">
        <h2 className="text-gray-700 font-bold py-[25px] px-[15px] mb-[15px]">Element 1.1</h2>
        <p className="px-[10px] py-[5px]">Stacked using CSS Grid</p>
      </div>

      <div className="opacity-80 h-[150px] w-[190px] bg-yellow-400 row-start-1 col-start-1 col-end-2 row-end-2 z-0">
        <h2 className="text-gray-700 font-bold py-[25px] px-[15px] mb-[15px]">Element 1.2</h2>
        <p className="px-[10px] py-[5px]">Stacked using CSS Grid</p>
      </div>
    </div> */
  );
}

export default HomePage;
