import { Link, NavLink } from "react-router-dom";
import { Profile } from "../Assets";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const pages = [
    {
      id: 1,
      title: "All repo",
      url: "/",
    },
    {
      id: 2,
      title: "Single Repo",
      url: "/details",
    },
    {
      id: 3,
      title: "List Repo",
      url: "/list-view",
    },
    {
      id: 4,
      title: "Error page",
      url: "test-error",
    },
  ];
  return (
    <div className="w-full bg-primary h-[70px] fixed top-0 flex items-center z-30">
      <div className="w-[96%] md:w-[90%] mx-auto flex items-center justify-between">
        <Link className="font-semibold text-2xl md:text-3xl lg:text-5xl text-white">
          <i>AT</i>
        </Link>
        <ul className="hidden  md:flex items-center justify-center  gap-x-7 ">
          {pages.map((list) => (
            <li className="capitalize text-white pl-5" key={list.id}>
              <NavLink to={`${list.url}`} className="text-white ">
                {list.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-6 ">
          <div className=" flex gap-x-2 items-center relative max-w-190">
            <IoIosSearch className="bg-white px-3 md:px-0 rounded-lg text-black w-6 h-6 cursor-pointer md:rounded-none md:bg-inherit " />
            <input
              placeholder="Search"
              type="search"
              className="hidden md:block"
            />
          </div>
          <div className="rounded-full w-14 h-14  flex items-center justify-center">
            <img
              src={Profile}
              alt="profile"
              className="w-[90%]  rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
