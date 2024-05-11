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
      title: "Error page",
      url: "*",
    },
  ];
  return (
    <div className="w-full bg-primary h-[70px] fixed top-0 flex items-center z-30">
      <div className="w-[96%] md:w-[90%] mx-auto flex items-center justify-between">
        <Link>AT </Link>
        <ul className="hidden  md:flex items-center gap-x-7">
          {pages.map((list) => (
            <li className="capitalize" key={list.id}>
              <NavLink to={`${list.url}`}>{list.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-10">
          <div className=" flex gap-x-2 items-center relative max-w-190">
            <IoIosSearch
              className=" absolute left-1 fill-current
            text-gray-500 w-6 h-6"
            />
            <input
              placeholder="Search"
              type="search"
              className="w-full h-10 pl-8 py-2  rounded border-2 border-transparent outline-none bg-white text-black transition duration-300 ease-in-out"
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
