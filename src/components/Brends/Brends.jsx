import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
        Toast.error(err.message);
      });
  };
  useEffect(() => {
    getBrands();
  }, []);

  //  ok

  return (
    <div className=" my-20 py-20 bg-blue-950 shadow-lg shadow-cyan-500/50">
      <div className="container">
        <h4 className="text-[35px] text-gray-100 font-semibold">Brands</h4>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            loop={true}
            aria-colcount={2}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {brands.map((item) => (
              <SwiperSlide className="py-40 px-40" key={item.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brends;
