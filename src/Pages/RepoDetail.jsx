import React from "react";
import { Profile } from "../Assets";
import { MdOutlineVisibility } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoIosStarOutline } from "react-icons/io";
import { FaCodeFork } from "react-icons/fa6";
import { Button } from "../Components";

const RepoDetail = () => {
  const OtherDetails = [
    {
      id: 1,
      icon: FiActivity,
      title: "activity",
    },
    { id: 2, icon: IoIosStarOutline, title: "star" },
    { id: 3, icon: MdOutlineVisibility, title: "watching" },
    { id: 4, icon: FaCodeFork, title: "Forks" },
  ];
  return (
    <div className="w-full mt-[5rem]">
      <div className="w-[96%] md:w-[90%] mx-auto">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
          Repository Details
        </h2>
        <div className="flex items-start justify-between mt-10">
          <div className="">
            <div className="flex items-center gap-2">
              <img
                src={Profile}
                alt="detail-profile"
                className="w-[100px] rounded-full"
              />

              <h3 className="font-semibold capitalize text-primary text-lg md:text-xl lg:text-2xl">
                PythoSalaf
              </h3>
            </div>
            <div className="">
              <div className="flex items-center mt-3 gap-2">
                <p>Visibility :</p>
                <p>Public</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <p>Language :</p>
                <p>Javascript</p>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-6">
              <Button btnText="Delete" btnStyle="bg-red-600 px-4" />
              <Button btnText="Update" btnStyle="" />
            </div>
          </div>

          <div className="">
            <div className="flex items-center gap-3">
              <i className="text-primary font-semibold capitalize text-xl md:text-2xl">
                Description <span>:</span>
              </i>
              <p>
                Solution for the intermediate frontend developer assessment for
                AltSchoolAfrica{" "}
              </p>
            </div>
            {OtherDetails.map((detail) => (
              <div className="mt-5 flex items-center gap-3" key={detail.id}>
                <detail.icon size={25} className="text-primary" />
                <div className="bg-white border border-primary w-fit px-3 py-1 rounded-lg cursor-pointer">
                  <p className="text-sm md:text-base capitalize">
                    <span className="pr-2">3</span>
                    {detail.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
