import React, { useState } from "react";
import { IoMenuSharp, IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import navLogo from "../../assets/icons/autozoom.svg";
import engFlag from "../../assets/images/engFlagg.jpg";
import rusFlag from "../../assets/images/russianFlag.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center gap-5 top-0 ">
          <span className="flex justify-center items-center  gap-3">
            <img
              src={rusFlag}
              className="w-9 h-6 cursor-pointer rounded-md"
              alt="Russian"
            />
            <img
              src={engFlag}
              className="w-9 h-6 cursor-pointer rounded-md"
              alt="English"
            />
          </span>
          <div className="w-[350px] hidden md:block">
            <span className="block">
              <label className="relative">
                <IoSearchSharp
                  color="white"
                  className="top-[-14px] w-10 h-10 left-0  absolute z-10"
                />
                <input
                  className="bg-gradient-to-r top-[-20px] text-white font-bold text-[17px]  sm:px-10 py-10 sm:py-2 text-base sm:text-[15px] absolute from-slate-500 rounded-md h-[40px] sm:w-[300px] to-gray-800"
                  type="text"
                  placeholder="Search"
                />
              </label>
            </span>
          </div>
        </div>
        <div className="block">
          <a href="/">
            <img
              src={navLogo}
              className="lg:w-52 lg:h-52 md:w-48 md:h-48  sm:w-44 sm:h-44 ss:w-44 ss:h-44 xs:w-44 xs:h-44   object-fill  "
              alt="Autozoom"
            />
          </a>
        </div>
        <div className="flex items-center">
          {/* Burger menu */}
          <div className="relative">
            <div className="block md:hidden" onClick={toggleMenu}>
              {isOpen ? (
                <IoCloseSharp color="white" className="w-[40px] h-[40px]" />
              ) : (
                <IoMenuSharp color="white" className="w-[40px] h-[40px]" />
              )}
            </div>
            {/* Burger menu uchun */}
          </div>
          {/* Asosiy menu uchun */}
          <div className="hidden md:flex flex-col md:flex-row gap-4">
            <ul className="flex gap-4">
              <li>
                <Link
                  className="md:text-[22px]  text-gray-100  hover:text-blue-300"
                  to="/"
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[22px] text-gray-100  hover:text-blue-300"
                  to="/"
                >
                  Brand
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[22px] text-gray-100  hover:text-blue-300"
                  to="/"
                >
                  Services
                </Link>
              </li>
            </ul>
            <ul className="flex gap-4">
              <li>
                <Link
                  className="md:text-[22px] text-gray-100 hover:text-blue-300"
                  to="/aboutUs"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[22px] text-gray-100  hover:text-blue-300"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[22px]  text-gray-100  hover:text-blue-300"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-black w-[350px] p-[20px] h-[100vh] fixed top-0 z-50 right-0`}
      >
        <button className=" block md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <IoCloseSharp color="white" className="w-[40px] h-[40px]" />
          ) : (
            <IoMenuSharp color="white" className="w-[40px] h-[40px]" />
          )}
        </button>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              className="text-[27px] md:text-[30px] text-white  hover:text-blue-300"
              to="/"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-blue-300"
              to="/"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-blue-300"
              to="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-blue-300"
              to="/aboutUs"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-blue-300"
              to="/contact"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-[27px] md:text-xl text-white  hover:text-blue-300"
              to="/blog"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
