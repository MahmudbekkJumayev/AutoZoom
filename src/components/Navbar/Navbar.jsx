import React from "react";
import navLogo from "../../assets/icons/autozoom.svg";
import engFlag from "../../assets/images/engFlagg.jpg";
import rusFlag from "../../assets/images/russianFlag.png";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center ">
      <div className="flex items-center gap-5">
        <span className="flex justify-center items-center gap-3">
          <img
            src={rusFlag}
            className="w-[30px] cursor-pointer h-[20px] rounded-md"
            alt="##"
          />
          <img
            src={engFlag}
            className="w-[30px] cursor-pointer h-[20px] rounded-md"
            alt="##"
          />
        </span>
        <span className="mb-12">
          <label className="relative">
            <IoSearchSharp className="top-2 w-[40px] h-[30px] left-0 absolute z-10" />
            <input
              className="bg-gradient-to-r px-14 text-[18px] absolute from-slate-300 rounded-md h-[40px] w-[300px] to-gray-800"
              type="text"
            />
          </label>
        </span>
      </div>
      <div>
        <a href="">
          <img
            src={navLogo}
            className="w-[130px] h-[140px] object-fill ml-[330px]"
            alt=""
          />
        </a>
      </div>
      <div>
        <ul className="flex justify-end items-center gap-8">
          <li className="text-[18px] font-medium text-white">
            <a href="">Cars</a>
          </li>
          <li className="text-[18px] font-medium text-white">
            <a href="">Brend</a>
          </li>
          <li className="text-[18px] font-medium text-white">
            <a href="">Services</a>
          </li>
          <li className="text-[18px] font-medium text-white">
            <a href="">About Us</a>
          </li>
          <li className="text-[18px] font-medium text-white">
            <a href="">Contact</a>
          </li>
          <li className="text-[18px] font-medium text-white">
            <a href="">Blog</a>
          </li>
        </ul>
        <a
          className="text-[20px] text-blue-400 ml-[290px] mt-10 font-medium"
          href="+971 (55) 846 21 24"
        >
          +971 (55) 846 21 24
        </a>
      </div>
    </div>
  );
};

export default Navbar;
