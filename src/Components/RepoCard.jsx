import { Link } from "react-router-dom";

const RepoCard = ({ title, type, language }) => {
  return (
    <div className="w-[90%] mx-auto md:w-full p-5 shadow-custom rounded-xl  bg-white">
      <div className="flex items-center justify-between">
        <Link className="text-blue-700 hover:underline">{title}</Link>
        <div className="rounded-2xl px-3 py-1">
          <p className="border border-primary px-2 capitalize text-sm rounded-xl">
            {type}
          </p>
        </div>
      </div>
      <div className="mt-4 gap-2 flex items-center">
        <div className="rounded-full w-3 h-3 bg-blue-600"></div>
        <h4 className="">{language}</h4>
      </div>
    </div>
  );
};

export default RepoCard;
