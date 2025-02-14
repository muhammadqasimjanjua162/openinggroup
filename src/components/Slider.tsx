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
    <div className="flex flex-col gap-0">
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={setValue}
        className="w-[100%]"
        styles={{
          handle: {
            backgroundColor: "red", // Handle (thumb) color
            borderColor: "darkred", // Handle border color
            height: "12px", // Handle height
            width: "12px",
            margin: 0, // Handle width
          },
          track: {
            backgroundColor: "red", // Track (filled part) color
            height: "4px", // Track height
          },
          rail: {
            backgroundColor: "lightgrey", // Rail (unfilled part) color
            height: "4px", // Rail height
          },
        }}
      />
      <div className="flex justify-between">
        <p
          style={{ margin: 0 }}
          className="font-semibold w-10 text-left text-sm"
        >
          ${min}
        </p>
        <p
          style={{ marginBottom: 0 }}
          className="font-semibold w-10 text-left text-sm"
        >
          ${value}
        </p>
      </div>
    </div>
  );
};
