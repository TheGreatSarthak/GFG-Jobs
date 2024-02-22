import { PiSuitcaseBold } from "react-icons/pi";
import { BiWalletAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const JobCard = ({ job }) => {
  return (
    <div className="bg-zinc-800 rounded-md p-4 col-span-1 text-gray-200">
      {/* before divider */}
      <div className="flex flex-row border-b border-gray-400 pb-10">
        <div className="mr-4">
          <img src={job.icon} alt="icon" className="w-20 h-12 rounded-md" />
        </div>
        <div>
          <div className="mb-2 font-medium">{job.role}</div>
          <div className="mb-4 text-sm text-gray-400 font-medium">
            {job.company}
          </div>
          <div className="flex flex-row">
            <div className="flex text-[10px] mx-2 text-gray-400 font-medium">
              <PiSuitcaseBold size={18} />
              <div className="ml-1 text-gray-200">{job.experience}</div>
            </div>
            <div className="flex relative z-0 hover:cursor-pointer text-[10px] mx-2 text-gray-400 font-medium">
              <BiWalletAlt size={18} />
              <div className="ml-1 text-gray-200">{job.salary}</div>
            </div>
            <div className="flex text-[10px] mx-2 text-gray-400 font-medium">
              <IoLocationOutline size={18} />
              <div className="ml-1 text-gray-200">{job.location}</div>
            </div>
          </div>
        </div>
      </div>
      {/* after divider */}
      <div className="flex flex-row mt-5 justify-between items-center">
        <div className="text-xs text-gray-200">{job.date}</div>
        <div className="text-sm">
          <button className="rounded-md text-green-700 border-green-700 border px-5 py-2 hover:text-white hover:bg-green-700">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
