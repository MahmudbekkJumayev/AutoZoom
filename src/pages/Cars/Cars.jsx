import React from "react";
import './Cars.css';
import kia from "../../assets/kia.png";


const Cars = () => {



  return (
    <div className="car_container">
      <div className="cars_sidebar_container">
        <div className="car_sidebar">
          <h2>Filter By</h2>

          <div className="car_offers">
            <h4>Offers</h4>

            <div></div>
          </div>

          <div className="cars_type">
            <h4>Car type</h4>

            <div></div>
          </div>

          <div className="cars_brans">
            <h4>Brand</h4>
          </div>

          <div className="car_model">
            <h4>Model</h4>

            <select className="car_model_select" name="" id="">
              <option value="audi">Audi RP500</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <p className=" text-[15px] text-[#6a6a6a]">Luxury Cars for Rent in Dubai / Hire the latest supercar</p>

        <div className="cars_main_container">
          <div className="car_main">
            <div className="car_main_port">
              <div className="car_card h-[590px] w-[380px]  rounded-3xl  flex flex-col justify-center items-start cursor-pointer">
                <div className="car_img_box">
                  <img className="car_img  " src={kia} alt="" />
                </div>
                <div className="car_title_box">
                  <h5 className="car_title ">Kia K55</h5>
                </div>
                <div className="car_text">
                  <h3>
                    AED 300 <span>/ $ 80</span>
                  </h3>
                </div>
                <div>
                  <p className="text-[#6a6a6a] text-18px] font-light mt-3">
                    per day
                  </p>
                </div>

                <div className="social_media">
                  <div className="whatsup">
                    <p>WhatsApp</p>
                  </div>
                  <div className="telegram">
                    <p>Telegram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="car_main">
            <div className="car_main_port">
              <div className="car_card h-[590px] w-[380px]  rounded-3xl  flex flex-col justify-center items-start cursor-pointer">
                <div className="car_img_box">
                  <img className="car_img  " src={kia} alt="" />
                </div>
                <div className="car_title_box">
                  <h5 className="car_title ">Kia K55</h5>
                </div>
                <div className="car_text">
                  <h3>
                    AED 300 <span>/ $ 80</span>
                  </h3>
                </div>
                <p className="text-[#6a6a6a] text-18px] font-light mt-3">
                  per day
                </p>
              </div>
            </div>
          </div>

          <div className="car_main">
            <div className="car_main_port">
              <div className="car_card h-[590px] w-[380px]  rounded-3xl  flex flex-col justify-center items-start cursor-pointer">
                <div className="car_img_box">
                  <img className="car_img  " src={kia} alt="" />
                </div>
                <div className="car_title_box">
                  <h5 className="car_title ">Kia K55</h5>
                </div>
                <div className="car_text">
                  <h3>
                    AED 300 <span>/ $ 80</span>
                  </h3>
                </div>
                <p className="text-[#6a6a6a] text-18px] font-light mt-3">
                  per day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
