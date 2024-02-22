import { options } from "@/utils/data";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";

const Sidebar = () => {
  return (
    <div className="h-screen fixed -ml-4 w-[300px] bg-zinc-900 flex flex-col overflow-y-auto">
      <div className="flex justify-center border-b border-gray-400">
        <div className="flex cursor-pointer my-2 px-7 py-2 bg-zinc-600 hover:bg-green-700 justify-center m-2 w-52 self-center">
          <button>Sign In</button>
        </div>
      </div>
      {options.map((option) => (
        <div>
          <div className="px-7 py-4 border-b border-gray-400">
            {option.name}
          </div>
          {option.data.map((subOption) => (
            <div className="px-7 py-4 border-b border-gray-400">
              {subOption.name}
            </div>
          ))}
        </div>
      ))}
      <div className="flex flex-row m-2 items-center self-center">
        <div className="rounded-sm p-2 border border-gray-300">
          <MdOutlineLightMode />
        </div>
        <div className="rounded-sm p-2 border border-gray-300">
          <LiaLanguageSolid />
          Change Language
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
