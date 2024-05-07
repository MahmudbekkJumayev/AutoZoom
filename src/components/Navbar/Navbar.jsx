import React, { useState } from "react";
import { IoMenuSharp, IoCloseSharp, IoSearchSharp } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import navLogo from "../../assets/icons/autozoom.svg";
import engFlag from "../../assets/images/engFlagg.jpg";
import rusFlag from "../../assets/images/russianFlag.png";
import { useTranslation } from "react-i18next";

const Navbar = ({ changeLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  const history = useHistory();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    history.push(`/search/${searchValue}`);
  };

  return (
    <>
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center gap-5 top-0 ">
          <span
            onClick={changeLangHandler}
            className="flex justify-center items-center  gap-3"
          >
            <button onClick={() => changeLang("uz")}>
              <img
                src={rusFlag}
                className="w-9 h-6 cursor-pointer rounded-md"
                alt="Russian"
              />
            </button>
            <button onClick={() => changeLang("en")}>
              <img
                src={engFlag}
                className="w-9 h-6 cursor-pointer rounded-md"
                alt="English"
              />
            </button>
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
                  value={searchTerm}
                  onChange={handleSearch}
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
            <div
              className="block md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
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
                  className="md:text-[20px]  text-gray-100  hover:text-blue-300"
                  to="/"
                >
                  {t("cars")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[20px] text-gray-100  hover:text-blue-300"
                  to="/"
                >
                  {t("brand")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[20px] text-gray-100  hover:text-blue-300"
                  to="/"
                >
                  {t("service")}
                </Link>
              </li>
            </ul>
            <ul className="flex gap-4">
              <li>
                <Link
                  className="md:text-[20px] text-gray-100 hover:text-blue-300"
                  to="/aboutUs"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[20px] text-gray-100  hover:text-blue-300"
                  to="/contact"
                >
                  {t("contacts")}
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-[20px]  text-gray-100  hover:text-blue-300"
                  to="/blog"
                >
                  {t("blogs")}
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
