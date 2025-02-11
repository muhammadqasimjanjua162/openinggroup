import React from "react";

const TitleLine = ({ color }) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );
};

export default TitleLine;
