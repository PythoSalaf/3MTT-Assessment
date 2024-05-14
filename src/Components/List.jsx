import React from "react";
import { Link } from "react-router-dom";
import { RepoList } from "./Dummy";

const List = () => {
  return (
    <div className="w-[98%] mx-auto md:w-full">
      {RepoList.map((items) => (
        <div className="border-t border-primary py-5 " key={items.id}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to={`/repo/${items.title}`}
                className="text-blue-700 text-base md:text-lg hover:underline"
              >
                {items?.title}
              </Link>
              <p className="text-sm md:text-base">Updated at 2days ago</p>
            </div>
            <div className="rounded-2xl px-3 py-1">
              <p className="border border-primary px-2 capitalize text-sm rounded-xl">
                {items.type}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6 gap-1">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <h4 className="">{items.language}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
