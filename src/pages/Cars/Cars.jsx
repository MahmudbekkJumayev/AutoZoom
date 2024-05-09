import React, { useEffect, useState } from "react";
import "./Cars.css";
import axios from "axios";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cars = () => {
  const [carType, setCarType] = useState([]);
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);

  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  useEffect(() => {
    GetCarType();
    GetBrands();
    GetModels();
    GetCars();
  }, []);

  // Get tpye of cars
  const GetCarType = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/categories")
      .then((response) => {
        setCarType(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get brand of card
  const GetBrands = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  // Get Models

  const GetModels = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/models")
      .then((response) => {
        setModels(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  // Get cars

  const GetCars = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/cars")
      .then((response) => {
        setCars(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="car_container bg-[#1E1F27]">
      <form className="cars_sidebar_container">
        <div className="car_sidebar">
          <h2>Filter By</h2>

          <div className="car_offers">
            <h4>Offers</h4>

            <ul className="car_offers-list">
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
              <li className="car_offers-item">
                <input type="checkbox" />
                <label htmlFor="">3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE</label>
              </li>
            </ul>
          </div>

          <div className="cars_type">
            <h4>Car type</h4>

            <ul className="car_type_list">
              {carType &&
                carType.map((item, index) => (
                  <li className="car_type_item" key={index}>
                    <input type="checkbox" />
                    <label htmlFor="">{item?.name_en}</label>
                  </li>
                ))}
            </ul>
          </div>

          <div className="cars_brans">
            <h4>Brand</h4>

            <ul className="car_brand_list">
              {brands &&
                brands.map((item, index) => (
                  <li className="car_brand_item" key={index}>
                    <input type="checkbox" />
                    <label htmlFor="">{item.title}</label>
                  </li>
                ))}
            </ul>
          </div>

          <div className="car_model">
            <h4>Model</h4>

            <select className="car_model_select" name="" id="">
              {models &&
                models.map((model, index) => (
                  <option key={index} value="audi">
                    {model?.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="cars_sidebar-buttons">
            <button>Reset</button>
            <button>Apply filter</button>
          </div>
        </div>
      </form>

      <div className="flex flex-col flex-grow py-[70px]">
        <p className="pl-[25px] text-[15px] text-[#6a6a6a] cursor-pointer">
          Luxury Cars for Rent in Dubai / Hire the latest supercar
        </p>

        <div className="cars_main_container">
          {cars &&
            cars.map((item, index) => (
              <div key={index} className="car_main">
                <div className="car_main_port">
                  <div className="car_card rounded-3xl  flex flex-col justify-center items-start cursor-pointer">
                    <div className="car_img_box">
                      <img
                        className="car_img"
                        src={urlimg + item?.car_images[0]?.image.src}
                        alt=""
                      />
                    </div>
                    <div className="car_title_box">
                      <h5 className="car_title ">{item?.model?.name}</h5>
                    </div>
                    <div className="car_text">
                      <h3>
                        AED {item?.price_in_aed}{" "}
                        <span>/ $ {item?.price_in_usd}</span>
                      </h3>
                    </div>
                    <div>
                      <p className="text-[#6a6a6a] text-18px] font-light mt-3">
                        per day
                      </p>
                    </div>

                    <div className="social_media">
                      <Link
                        className="whatsup"
                        to={"https://wa.me/971558462124"}
                        target="_blank"
                      >
                        <button>
                          <FaWhatsapp style={{ fontSize: 20 }} />
                          <p>WhatsApp</p>
                        </button>
                      </Link>
                      <Link
                        className="telegram"
                        to={"/https://t.me/+971558462124"}
                        target="_blank"
                      >
                        <button>
                          <FaTelegram style={{ fontSize: 20 }} />
                          <p>Telegram</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
