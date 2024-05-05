import axios from "axios"
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
        console.log(response.data.data);
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
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="container">
        <h4 className="text-[35px] text-gray-100 font-semibold">Brands</h4>
        <div>
          <Swiper
            slidesPerView={4} // Show 4 slides initially
            spaceBetween={10}
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
              <SwiperSlide>
                <div className="w-[300px] h-[250px]" key={item.key}>
                  <img src={`${urlimg}${item.image_src}`} alt="" />
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
            {brands.map((item) => (
              <SwiperSlide>
                <div className="w-[300px] h-[250px]" key={item.key}>
                  <img src={`${urlimg}${item.image_src}`} alt="" />
                  <p>{item.title}</p>
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
