import axios from "axios";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

const Brends = () => {
  const [brands, setBrands] = useState([]);
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getBrands = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className=" py-20">
      <div className="container">
        <h4 className="text-[35px] text-gray-100 font-semibold">Brands</h4>
        <div className="my-20 px-24">
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            loop={true}
            grid={{
              rows: 2,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="py-40 px-40">
              {brands.map((item) => (
                <div
                  className="w-[300px] h-[250px] flex-grow justify-center items-center"
                  key={item.key}
                >
                  <img
                    className="bg-gray-950 w-[250px] h-[250px] rounded-md object-contain m-auto"
                    src={`${urlimg}${item.image_src}`}
                    alt=""
                  />
                  <p className="text-[29px] text-gray-300 mt-5 text-center ">
                    {item.title}
                  </p>
                </div>
              ))}
            </SwiperSlide>

            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brends;
