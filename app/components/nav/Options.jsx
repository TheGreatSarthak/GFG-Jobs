"use client";

import { options } from "@/utils/data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import SubOptions from "./SubOptions";

const Options = () => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleHover = (optionName) => {
    setHoveredOption(optionName);
  };

  return (
    <div className="flex">
      {options.map((option) => (
        <div className="flex group">
          <div
            className="flex ml-4 my-3 cursor-pointer hover:text-green-700 font-semibold"
            onMouseOver={() => handleHover(option.name)}
            //onMouseOut={() => handleHover(null)}
          >
            {option.name === "Courses" ? (
              <div className="text-white rounded-sm bg-indigo-900 px-1 text-[8px] absolute top-[2px]">
                Get 90% Refund!
              </div>
            ) : null}
            <div className="text-[13px] relative">{option.name}</div>
            <div className="flex justify-center items-center group-hover:rotate-180 group-hover:duration-300">
              <MdOutlineKeyboardArrowDown size={20} />
            </div>
          </div>
          {(hoveredOption === option.name ||
            hoveredOption === "subOptions") && (
            <div
              className="absolute z-20 top-12"
              onMouseEnter={() => handleHover(option.name)}
              onMouseLeave={() => handleHover(null)}
            >
              <SubOptions data={option.data} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Options;
