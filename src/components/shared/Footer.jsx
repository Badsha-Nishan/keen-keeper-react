import React from "react";
import FooterLogo from "../../assets/logo-xl.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-center text-white space-y-5 mt-5">
      <div className="flex justify-center items-center pt-24">
        <img src={FooterLogo} alt="Footer Logo" />
      </div>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="text-2xl">Social Links</p>
      <div className="flex gap-4 text-black justify-center items-center">
        <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white duration-200">
          <FaInstagramSquare />
        </div>
        <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white duration-200">
          <FaFacebookSquare />
        </div>
        <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white duration-200">
          <FaXTwitter />
        </div>
      </div>
      <div className="flex w-11/12 mx-auto flex-col">
        <div className="divider after:bg-gray-300 before:bg-gray-300"></div>
      </div>
      <div className="flex justify-between w-11/12 mx-auto pb-6">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
          <a className="hover:underline">Privacy Policy</a>
          <a className="hover:underline">Terms of Service</a>
          <a className="hover:underline">Cookies</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
