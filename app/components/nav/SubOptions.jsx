"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const SubOptions = ({ data }) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleHover = (optionName) => {
    setHoveredOption(optionName);
  };
  return (
    <div className="border-t-2 border-green-700 bg-neutral-800 text-xs w-56">
      {data.map((subOption) => (
        <div
          className="hover:bg-[#39393C] flex flex-row items-center justify-between relative"
          onMouseEnter={() => handleHover(subOption.name)}
          //onMouseLeave={() => handleHover(null)}
        >
          <div className="pl-5 py-3 font-medium text-gray-200">
            {subOption.name}
          </div>
          {subOption.data && (
            <div
              className={`p-2 ${
                hoveredOption === subOption.name && "rotate-180 duration-300"
              }`}
            >
              <MdKeyboardArrowRight size={18} />
            </div>
          )}
          {hoveredOption === subOption.name && subOption.data && (
            <div className="absolute ml-56 self-start">
              <SubOptions data={subOption.data} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubOptions;
