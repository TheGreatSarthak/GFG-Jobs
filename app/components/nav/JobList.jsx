import JobCard from "./JobCard";
import { jobs } from "@/utils/data";

const JobList = () => {
  return (
    <div>
      <div className="flex justify-end px-20">
        <button className="text-green-700 text-sm">
          Modify recommendations
        </button>
      </div>
      <div className="grid grid-cols-3 px-[70px] gap-4 py-3">
        {jobs.map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
