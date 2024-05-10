import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CiCalendar } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { IoMdSpeedometer } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

export default function CarsInfo() {
  const { id } = useParams();
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const [cars, setcars] = useState([]);
  const getCars = () => {
    axios
      .get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`)
      .then((response) => {
        const carData = response.data.data;
        console.log(carData.car_images);
        if (carData && typeof carData === "object") {
          // Convert object to array with a single item
          setcars([carData]);
        } else {
          setcars([]); // Set empty array if response is not as expected
        }
      })
      .catch((err) => {
        console.log(err);
        setOneCar([]);
      });
  };
  useEffect(() => {
    getCars();
    console.log(cars);
  }, [id]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container">
      {cars &&
        cars.map((item, index) => (
          <h2 className="text-5xl text-white pb-8">
            {" "}
            {item.brand.title} {item.model.name}
          </h2>
        ))}

      <Row>
        <Col md={3}>
          <Swiper
            onClick={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            direction={"vertical"}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {cars &&
              cars.map((item, index) => (
                <>
                  {item.car_images.map((item, index) => (
                    <SwiperSlide key={index} className="cars-swiper">
                      <img
                        src={`${urlimg}${item.image.src}`}
                        alt={`Car ${index}`}
                      />
                    </SwiperSlide>
                  ))}
                </>
              ))}
          </Swiper>
        </Col>
        <Col md={9}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {cars &&
              cars.map((item, index) => (
                <>
                  {item.car_images.map((item, index) => (
                    <SwiperSlide key={index} className="cars-swiper-two">
                      <img
                        src={`${urlimg}${item.image.src}`}
                        alt={`Car ${index}`}
                      />
                    </SwiperSlide>
                  ))}
                </>
              ))}
          </Swiper>
        </Col>
        <Col md={12}>
          {cars &&
            cars.map((item, index) => (
              <>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold  ">
                        <span>AED {item.price_in_aed}</span>{" "}
                        <span className="text-gray-500">
                          / $ {item.price_in_usd}
                        </span>
                      </h3>
                      <p className="text-gray-500 text-[13px]">per day</p>
                      <h3 className="text-white text-xl  ">
                        <del>
                          <span>AED</span>{" "}
                          <span className="text-gray-500">/ $ </span>
                        </del>
                      </h3>
                    </div>
                    <div>
                      <p className=" text-[15px]   text-gray-500">Deposit</p>
                      <p className="pb-6"></p>
                      <p className="text-gray-500 text-[13px]">
                        Premium protection
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold  ">AED 0</h4>
                      <p className="text-gray-500 text-[13px] pb-3">
                        AED 0 for credit cards payment
                      </p>
                      <h3 className="text-white text-xl font-bold  ">
                        <span>AED {item.price_in_aed}</span>
                      </h3>
                      <p className="text-gray-500 text-[13px]">
                        AED {item.price_in_aed} price for 1 day
                      </p>
                    </div>
                  </div>
                  <hr className="text-gray-500" />
                </div>

                <div className="pt-8">
                  <div className="flex justify-between">
                    <div>
                      <span className="text-3xl text-gray-500">
                        <CiCalendar />{" "}
                      </span>
                      <p> {item.year}</p>
                    </div>
                    <div>
                      <span className="text-3xl text-gray-500">
                        <CiAlarmOn />
                      </span>
                      <p> {item.seconds}</p>
                    </div>
                    <div>
                      <span className="text-3xl text-gray-500">
                        <IoMdSpeedometer />
                      </span>
                      <p> {item.max_speed}</p>
                    </div>
                    <div>
                      <span className="text-3xl text-gray-500">
                        <IoPersonSharp />
                      </span>
                      <p> {item.max_people}</p>
                    </div>
                  </div>

                  <hr className="text-gray-500" />
                </div>
              </>
            ))}
        </Col>
      </Row>
    </div>
  );
}
