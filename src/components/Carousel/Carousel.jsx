import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kia from "../../assets/kia.png";
import { RightCircleOutlined } from "@ant-design/icons";

export default function Carousel({ title }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };  
  return (
    <div className="Carousel   p-[30px]">
      <div className="container ">
        <div className="flex justify-between p-[20px]">
          <h2 className="text-white text-3xl font-light">{title}</h2>
         <div className="flex text-white cursor-pointer">
         <p className="text-white text-xl font-light mr-2 ">SEE ALL</p>
          <div className="text-xl "><RightCircleOutlined/></div>
         </div>
        </div>
        <Slider {...settings}>
          <div className="h-[470px] w-[90%] bg-rebeccapurple rounded-3xl p-[20px] pb-[30px]  flex justify-center items-center hover:bg-gradient-to-br from-gray-600 to-gray-900 cursor-pointer">
            <img
              className="w-[50%] h-[25%] object-cover ml-[20%] mb-[100px] mt-[70px] "
              src={kia}
              alt=""
            />
            <h5 className="text-white text-xl font-light pb-4">Kia K55</h5>
            <hr className="border-white pb-5" />
            <h3 className="text-white text-xl font-light pb-4">
              AED 300 / $ 80{" "}
            </h3>
            <p className="text-white text-[15px] font-light pb-4">per day</p>
          </div>
          <div className="h-[450px] bg-rebeccapurple rounded-3xl p-[20px] pb-[30px]  flex justify-center items-center hover:bg-gradient-to-br from-gray-600 to-gray-900">
            <img
              className="w-[50%] h-[25%] object-cover ml-[20%]  mb-[100px] mt-[70px] "
              src={kia}
              alt=""
            />
            <h5 className="text-white text-2xl font-light pb-4">Kia K5</h5>
            <hr className="border-white pb-5" />
            <h3 className="text-white text-xl font-light pb-4">
              AED 300 / $ 80{" "}
            </h3>
            <p className="text-white text-[15px] font-light pb-4">per day</p>
          </div>

          <div className="h-[450px] bg-rebeccapurple rounded-3xl p-[20px] pb-[30px]  flex justify-center items-center hover:bg-gradient-to-br from-gray-600 to-gray-900">
            <img
              className="w-[50%] h-[25%] object-cover ml-[20%]  mb-[100px] mt-[70px] "
              src={kia}
              alt=""
            />
            <h5 className="text-white text-2xl font-light pb-4">Kia K5</h5>
            <hr className="border-white pb-5" />
            <h3 className="text-white text-xl font-light pb-4">
              AED 300 / $ 80{" "}
            </h3>
            <p className="text-white text-xl font-light pb-4">per day</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
