import React from "react";
import TitleLine from "./TitleLine";

const FormLeft = () => {
  return (
    <div className="flex">
      <TitleLine color={"light-grey"} />
      <div>
        <span className="text-5xl uppercase font-bold"> Active</span>

        <br />

        <span className="text-3xl uppercase text-red-600 space-x-0 ml-3">
          Listings
        </span>
      </div>
    </div>
  );
};

export default FormLeft;
