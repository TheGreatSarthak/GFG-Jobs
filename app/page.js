"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import JobList from "./components/nav/JobList";
import { useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState("All Jobs");

  const toggleClick = (value) => {
    setClicked(value);
  };

  return (
    <div className="pt-11">
      {/* banner */}
      <div className="flex flex-row text-sm justify-center items-center bg-[#019679] font-semibold p-2">
        <div className="mx-2">
          Recruiters, join our Hiring Challenge to connect with exceptional
          global talent. Don't miss out, participate now!
        </div>
        <button className="text-[11px] border rounded-md p-1 hover:bg-zinc-500">
          Hire with us
        </button>
      </div>
      {/* banner with svg */}
      <div
        className="mt-[-2px]"
        style={{
          backgroundImage: `url(
            "https://media.geeksforgeeks.org/img-practice/prod/jobs/1/Web/Header/JobsBackgroundDark_1693906979.svg"
          )`,
        }}
      >
        <div className="text-4xl flex flex-row justify-center font-semibold pt-6 p-2 tracking-widest">
          Get hired with <div className="text-green-700 mx-2">GFG</div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="text-sm py-2">powered by</div>
          <a
            href="https://in.indeed.com/?from=jobseeker_marketing_partner"
            className="ml-2 mt-[-8px]"
          >
            <img
              src="https://media.geeksforgeeks.org/img-practice/prod/jobs/1/Web/Header/Vector%20(1)_1699598913.svg"
              className="w-[100px]"
            />
          </a>
        </div>
        <div className="flex flex-row justify-center pt-7 pb-9">
          <div className="mx-[18px]">
            <div className="font-semibold text-xl text-center pb-1">150+</div>
            <div className="text-xs font-semibold text-gray-300">
              No of Organisations
            </div>
          </div>
          <div className="mx-[18px]">
            <div className="font-semibold text-xl text-center pb-1">200+</div>
            <div className="text-xs font-semibold text-gray-300">
              No of Openings
            </div>
          </div>
          <div className="mx-[18px]">
            <div className="font-semibold text-xl text-center pb-1">6 LPA</div>
            <div className="text-xs font-semibold text-gray-300">
              Avg Package
            </div>
          </div>
        </div>
      </div>
      {/* banner button */}
      <div className="flex flex-row justify-center items-center px-16">
        <a
          href="https://www.geeksforgeeks.org/jobs?tab_type=gfg_job_fair"
          className="flex text-[13px] justify-center bg-blue-50 text-blue-800 font-semibold py-4 rounded-md w-full"
        >
          GfG Job Fair is LIVE! Apply to the Biggest Tech Names That Are Hiring.
          <div className="mx-2">
            <FaExternalLinkAlt />
          </div>
        </a>
      </div>
      {/* category selectors and filter */}
      <div className="px-16 mt-14 mb-8">
        <div className="flex flex-row border-b-[1.5px] border-gray-400 w-full justify-between">
          <div className="text-gray-400 font-normal">
            <button
              className={`p-2 ${
                clicked === "All Jobs"
                  ? "border-b-[3px] border-gray-400 text-gray-200 font-semibold"
                  : null
              }`}
              onClick={() => toggleClick("All Jobs")}
            >
              All Jobs
            </button>
            <button
              className={`p-2 relative ${
                clicked === "Job Fair"
                  ? "border-b-[3px] border-gray-400 text-gray-200 font-semibold"
                  : null
              }`}
              onClick={() => toggleClick("Job Fair")}
            >
              GFG Job Fair
              <div className="absolute w-2 h-2 rounded-full bg-[#9dacf8] top-1 right-0"></div>
            </button>

            <button
              className={`p-2 ${
                clicked === "Applied"
                  ? "border-b-[3px] border-gray-400 text-gray-200 font-semibold"
                  : null
              }`}
              onClick={() => toggleClick("Applied")}
            >
              Applied
            </button>
            <button
              className={`p-2 ${
                clicked === "Archived"
                  ? "border-b-[3px] border-gray-400 text-gray-200 font-semibold"
                  : null
              }`}
              onClick={() => toggleClick("Archived")}
            >
              Archived
            </button>
          </div>
          <div className="flex">
            <button className="flex px-4 py-1 border rounded-md text-green-700 border-green-700 mb-2 text-sm items-center hover:text-white hover:bg-green-700">
              <CiFilter size={25} style={{ color: "green-700" }} />
              Filter
            </button>
          </div>
        </div>
      </div>
      {/* jobs */}
      <JobList />
      <div className="w-24 h-24 fixed bottom-5 right-5 cursor-pointer">
        <img src="https://media.geeksforgeeks.org/img-practice/fab-icon-new.gif" />
      </div>
    </div>
  );
};

export default Home;
