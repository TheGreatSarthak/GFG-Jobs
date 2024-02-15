"use client";

import { options } from "@/utils/data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const Options = () => {
  const [hover, setHover] = useState(false);
  // useEffect(()=>{
  //   if(hover===true)
  // });
  const handleHover = () => {
    setHover(true);
  };
  return (
    <div className="flex">
      {options.map((option) => (
        <div className="flex ml-3 my-3 cursor-pointer hover:text-green-600 font-semibold">
          <div className="text-[13px]">{option.name}</div>
          <div
            className="flex justify-center items-center hover:rotate-180 hover:duration-300"
            onMouseOver={handleHover}
          >
            <MdOutlineKeyboardArrowDown size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
