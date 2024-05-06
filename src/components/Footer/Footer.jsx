import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import footerLogo from "../../assets/icons/autozoom.svg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Item from "antd/es/list/Item";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => {
        Toast.error(err.message);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="container flex flex-col md:flex-row md:items-center">
      <div className="md:mr-10">
        <span>
          <img src={footerLogo} className="w-[170px] h-[170px]" alt="" />
        </span>
        <span>
          <h4 className="text-[25px] text-warning-100 font-semibold">
            LUXURY CAR
          </h4>
          <h4 className="text-[25px] text-warning-100 font-semibold">
            RENTAL IN
          </h4>
          <h4 className="text-[25px] text-warning-100 font-semibold">DUBAI</h4>
          <p className="text-[15px] text-gray-400 font-medium md:w-[250px] my-5">
            Rent sports and luxury cars directly without intermediaries. Rent a
            car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
          </p>
        </span>
      </div>
      {/* footer information */}
      <div className="mt-5 md:mt-0">
        <div className="flex flex-col md:flex-row justify-evenly md:items-start gap-10">
          <div>
            <h4 className="text-[20px] text-warning-100 font-semibold">Cars</h4>
            {categories.map((item) => (
              <ul key={item.id}>
                <a href="">
                  <li className="text-[15px] text-gray-400 font-normal cursor-pointer">
                    {item.name_en}
                  </li>
                </a>
              </ul>
            ))}
          </div>
          <div>
            <h4 className="text-[20px] text-warning-100 font-semibold">Blog</h4>
            <h4 className="text-[20px] text-warning-100 font-semibold">
              Service
            </h4>
            <span>
              <h4 className="text-[20px] text-warning-100 font-semibold">
                Contact
              </h4>
              <p className="text-[15px] text-gray-400 font-normal">
                Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
              </p>
              <p className="text-[15px] text-gray-400 font-normal">
                <a href="+971 55 8462124">+971 55 8462124</a>
              </p>
              <p className="text-[15px] text-gray-400 font-normal">
                Working hours: 24/7
              </p>
            </span>
          </div>
          <div>
            <h4 className="text-[20px] text-warning-100 font-semibold">
              About Us
            </h4>
            <span>
              <h4 className="text-[20px] text-warning-100 font-semibold">
                Follow US
                <span className="flex justify-center items-center gap-3">
                  <FaSquareInstagram
                    color="gray"
                    size={35}
                    className="cursor-pointer"
                  />

                  <FaFacebook
                    color="gray"
                    size={35}
                    className="cursor-pointer"
                  />

                  <FaYoutube
                    color="gray"
                    size={35}
                    className="cursor-pointer"
                  />
                </span>
              </h4>
            </span>
          </div>
        </div>
        <span className="w-[100px] h-[20px] bg-gray-400"></span>
      </div>
    </div>
  );
};

export default Footer;
