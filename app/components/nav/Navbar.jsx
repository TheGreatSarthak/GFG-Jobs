"use client";

import React from "react";
import Options from "./Options";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    setMode((preMode) => (preMode === "dark" ? "light" : "dark"));
  };
  return (
    <div className="flex flex-row w-full justify-between px-4 bg-gradient-to-b from-zinc-800 to-zinc-900 fixed max-lg:py-3">
      {/* burger icon */}
      <div className="lg:hidden flex items-center" onClick={toggleSideBar}>
        {isOpen ? <MdOutlineClose size={20} /> : <RxHamburgerMenu size={20} />}
      </div>
      {/* Sidebar */}
      <div className={`top-12 absolute z-10 ${!isOpen && "hidden"}`}>
        <Sidebar />
      </div>
      {/* OPTIONS */}
      <div className="flex max-lg:hidden">
        <Options />
      </div>
      {/* LOGO */}
      <div className="flex ml-[-18%] max-lg:ml-0 w-12">
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
        <div className="flex justify-center items-center max-lg:hidden">
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
        <div className="flex justify-center items-center mx-2 cursor-pointer max-lg:hidden">
          <LiaLanguageSolid size={20} />
        </div>
        <div className="flex rounded-md text-[11px] cursor-pointer my-2 px-7 py-1 bg-zinc-600 hover:bg-green-700 max-lg:hidden">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
