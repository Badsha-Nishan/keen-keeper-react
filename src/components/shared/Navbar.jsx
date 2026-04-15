import React from "react";
import Logo from "../../assets/logo.png";
import { GoHome } from "react-icons/go";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky w-full top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"} className="btn">
                {" "}
                <GoHome /> Home
              </NavLink>
              <NavLink to="/timeline" className="btn">
                {" "}
                <RiTimeLine /> Timeline
              </NavLink>
              <NavLink to="/stats" className="btn">
                {" "}
                <ImStatsDots /> Stats
              </NavLink>
            </ul>
          </div>
          <a className="text-xl">
            <img src={Logo} alt="keen keeper logo" />
          </a>
        </div>
        <div className="hidden sm:flex navbar-end gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
            }
          >
            {" "}
            <GoHome /> Home
          </NavLink>
          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
            }
          >
            {" "}
            <RiTimeLine /> Timeline
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
            }
          >
            {" "}
            <ImStatsDots /> Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
