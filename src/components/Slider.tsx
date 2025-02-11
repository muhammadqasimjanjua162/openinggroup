import React, { useState } from "react";
import "../index.css";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import { Slider } from "antd";

interface IconSliderProps {
  max: number;
  min: number;
}

export const IconSlider: React.FC<IconSliderProps> = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);

  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? "" : "icon-wrapper-active";
  const nextColorCls = value >= mid ? "icon-wrapper-active" : "";

  return (
    <div className="flex items-center w-96 space-x-4">
      <p
        style={{ margin: 0 }}
        className="text-lg font-semibold w-10 text-left mb-0"
      >
        ${min}
      </p>

      <Slider
        min={min}
        max={max}
        value={value}
        onChange={setValue}
        className="w-[35%]"
        styles={{
          handle: {
            backgroundColor: "red", // Handle (thumb) color
            borderColor: "darkred", // Handle border color
            height: "20px", // Handle height
            width: "20px", // Handle width
          },
          track: {
            backgroundColor: "white", // Track (filled part) color
            height: "4px", // Track height
          },
          rail: {
            backgroundColor: "lightgrey", // Rail (unfilled part) color
            height: "4px", // Rail height
          },
        }}
      />
      <p
        style={{ marginBottom: 0 }}
        className="text-lg font-semibold w-10 text-left mb-0"
      >
        ${value}
      </p>
    </div>
  );
};
