import React from "react";
import footerLogo from "../../assets/icons/autozoom.svg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container flex items-center">
      <div>
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
          <p className="text-[15px] text-gray-400 font-medium w-[250px] my-5">
            Rent sports and luxury cars directly without intermediaries. Rent a
            car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
          </p>
        </span>
      </div>
      {/* footer malumot */}
      <div>
        <div className="flex justify-evenly items-start gap-10">
          <div>
            <h4 className="text-[20px] text-warning-100 font-semibold">Cars</h4>
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
