// /src/pages/HomePage.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/HomePage/Hero";
import Footer from "../components/Footer";
import FeaturedListing from "../components/HomePage/FeaturedListing";
// import SomeHomeSection from "../components/SomeHomeSection";

function HomePage() {
  return (
    <div className="relative">
      {/* <Header /> */}
      <Hero />
      <FeaturedListing />

      {/* <SomeHomeSection /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
