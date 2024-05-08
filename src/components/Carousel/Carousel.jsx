import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { RightCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import "./style.css"
import { Link, useNavigate } from "react-router-dom";

export default function Carousel({ title }) {

  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://autoapi.dezinfeksiyatashkent.uz/api/cars"
        );
        setCars(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setCars([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const groupCarsByCategory = (cars) => {
    const groupedCars = {};

    cars.forEach((car) => {
      const categoryId = car.category.id;

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


      if (!groupedCars[categoryId]) {
        groupedCars[categoryId] = {
          categoryName: car.category.name_en,
          cars: [],
        };
      }

      groupedCars[categoryId].cars.push(car);
    });

    return groupedCars;
  };

  const groupedCars = groupCarsByCategory(cars);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  return (
    <div className="Carousel">
      <div className="container">
        {Object.keys(groupedCars).map((categoryId) => (
          <div key={categoryId}>
            <div className="flex justify-between p-[20px]">
             
              <h2 className="text-white text-3xl font-light">
                {groupedCars[categoryId].categoryName.toUpperCase()} RENTAL DUBAI
              </h2>
              <div className="flex text-white cursor-pointer">
                <p className="text-white text-xl font-light mr-2">SEE ALL</p>
                <div className="text-xl">
                  <RightCircleOutlined />
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              >
              {groupedCars[categoryId].cars.map((car, index) => (
                     <SwiperSlide  className=" rounded-3xl  hover:bg-gradient-to-br from-gray-600 to-gray-900 cursor-pointer "
                 onClick={() => navigate(`/carsinfo/${car.id}`)}
                >
                  <div >
                    <img
                     className="carpousel-img"
                      src={`${urlimg}${car.car_images[0]?.image.src}`}
                      alt={car.category.name_en}
                    />
                    <h5 className="text-white text-xl font-light pb-4">
                      {car.brand.title} {car.model.name}
                    </h5>
                    <hr className="border-white pb-5" />
                    <h3 className="text-white text-xl font-light pb-4">
                      <span>AED {car.price_in_aed}</span> <span className="text-gray-500">/ $ {car.price_in_usd}</span>
                    </h3>
                    <p className="text-white text-[15px] font-light">per day</p>
                  </div>
                </SwiperSlide>
  
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}
