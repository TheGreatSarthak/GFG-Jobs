"use client";

import React from "react";
import Options from "./Options";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { useState } from "react";

const Navbar = () => {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((preMode) => (preMode === "dark" ? "light" : "dark"));
  };
  return (
    <div className="flex flex-row w-full justify-between px-4 bg-gradient-to-b from-zinc-800 to-zinc-900 fixed">
      {/* OPTIONS */}
      <div className="flex">
        <Options />
      </div>
      {/* LOGO */}
      <div className="flex ml-[-15%] w-12">
        <img
          src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
          alt="gfg logo"
        />
      </div>
      {/* END BUTTONS */}
      <div className="flex ">
        <div className="flex justify-center items-center mx-2 cursor-pointer">
          <IoSearchOutline size={20} />
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`flex justify-center items-center rounded-full w-7 h-7 mx-2 cursor-pointer relative ${
              mode === "light"
                ? "dark-mode bg-zinc-300"
                : "light-mode bg-zinc-600"
            }`}
            onClick={toggleMode}
            title={
              mode === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {mode === "light" ? (
              <MdOutlineDarkMode size={18} />
            ) : (
              <MdOutlineLightMode size={14} />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mx-2 cursor-pointer">
          <LiaLanguageSolid size={20} />
        </div>
        <div className="flex rounded-md text-[11px] cursor-pointer my-2 px-7 py-1 bg-zinc-600 hover:bg-green-700">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
