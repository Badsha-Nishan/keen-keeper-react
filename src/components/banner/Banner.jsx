import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto text-center space-y-5 mt-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Friends to keep close in your life
      </h2>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">
        {" "}
        <IoMdAdd />
        Add a Friend
      </button>
    </div>
  );
};

export default Banner;
