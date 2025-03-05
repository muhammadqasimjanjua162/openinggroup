import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Header from "../components/Header";
import PropertyDisplay from "../components/PropertyDisplay";
import FormLeft from "../components/FormLeft";
import Form from "../components/Form";
import FloatingSideBar from "../components/FloatingSideBar";
import Footer from "../components/Footer";
import { fetchProperties } from "../api/api";

const ITEMS_PER_LOAD = 10;

function PropertiesPage() {
  const [page, setPage] = useState(ITEMS_PER_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data: properties, error, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const visibleData = properties.slice(0, page);
  const splitIndex = Math.ceil(visibleData.length / 2);
  const firstColumn = visibleData.slice(0, splitIndex);
  const secondColumn = visibleData.slice(splitIndex);

  const handleShowMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage + ITEMS_PER_LOAD);
      setIsLoadingMore(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <Header />

      <div className="flex">
        <div className="w-[35.5%] flex justify-center items-center">
          <FormLeft />
        </div>
        <div className="w-[57.5%]">
          <Form />
        </div>
      </div>

      {/* Property Grid */}
      <div className="flex gap-1 px-24">
        {/* First Column */}
        <div className="flex flex-col gap-1 w-1/2">
          {firstColumn.map((property) => (
            <div key={property.id} className="w-full">
              <PropertyDisplay
                totalprice={property.price}
                perMonth={property.perMonth}
                img={property.img}
                address={property.address}
              />
            </div>
          ))}

          {/* Show Skeleton for New Items */}
          {isLoadingMore &&
            Array.from({ length: ITEMS_PER_LOAD / 2 }).map((_, index) => (
              <div key={`skeleton-first-${index}`} className="w-full">
                <Skeleton height={200} />
              </div>
            ))}
        </div>

        {/* Second Column */}
        <div className="w-1/2 flex flex-col gap-1 py-8">
          {secondColumn.map((property) => (
            <div key={property.id} className="w-full">
              <PropertyDisplay
                totalprice={property.price}
                address={property.address}
              />
            </div>
          ))}

          {/* Show Skeleton for New Items */}
          {isLoadingMore &&
            Array.from({ length: ITEMS_PER_LOAD / 2 }).map((_, index) => (
              <div key={`skeleton-second-${index}`} className="w-full">
                <Skeleton height={200} />
              </div>
            ))}
        </div>
      </div>

      <button onClick={handleShowMore}>View More</button>

      <div className="absolute left-[95%] top-[2%] md:left-[90%] md:top-[5%] lg:left-[95%] lg:top-[2%] xl:left-[96%] xl:top-[2.2%]">
        <FloatingSideBar />
      </div>

      <Footer />
    </div>
  );
}

export default PropertiesPage;
