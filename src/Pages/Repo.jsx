import { NavLink, Outlet } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import { IoListSharp } from "react-icons/io5";
const Repo = () => {
  const activeLink = "relative group text-primary";
  const normalLink = "relative group text-black";
  return (
    <div className="w-full mt-[4rem]">
      <div className="w-[96%] md:w-[90%] mx-auto">
        <h2 className="text-center py-[1rem] capitalize font-semibold text-2xl md:3xl lg:4xl ">
          Your Repositories
        </h2>
        <div className=" flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between mt-6">
          <div className="flex items-center gap-x-8 shadow-primaryCustom px-3 py-2 rounded-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <HiViewGrid className="w-6 h-6 md:w-8 md:h-8" />
              <span className="absolute top-[-45px]  bg-primary text-white py-1 px-6 rounded-xl  left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Grid
              </span>
            </NavLink>
            <NavLink
              to="/list-view"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <IoListSharp className="w-6 h-6 md:w-8 md:h-8" />
              <span className="absolute top-[-45px]  bg-primary text-white py-1 px-6 rounded-xl left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                List
              </span>
            </NavLink>
          </div>
          <p className="text-lg md:text-xl">Showing 1-9 of 23 repositories</p>
          <div className="hidden md:flex items-center gap-x-4">
            <p>Filter</p>
          </div>
        </div>
        <div className="w-full my-[2rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Repo;
