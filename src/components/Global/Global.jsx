import React from "react";
import AllCars from "../Buttons/AllCars";

const Global = () => {
  return (
    <div className=" my-10 py-20">
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <div className="lg:w-1/2 xs:w-full">
          <iframe
            className="w-full h-[515px] rounded-md lg:h-[450px]"
            width="660"
            height="515"
            src="https://www.youtube.com/embed/OggS0F7vAVs?si=gmLCnRxHv78rt2EP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h4 className="text-gray-100 text-[35px] lg:text-5xl font-normal mb-4">
            SPORTS CAR RENTAL DUBAI
          </h4>
          <p className="text-gray-300 text-[19px] ">
            Auto Zoom L L C a Car is a Top Luxury Car Rental Dubai based
            company, We offer sports car rental, and supercar rental in Dubai.
            The best luxury car rental process provided by our fleet. We own a
            diverse range of luxury supercar rental and sports car rental Dubai
            style, including Rolls Royce, Lamborghini, Maserati, Ferrari,
            Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car
            with the best car rental company in Dubai.
          </p>
          <div className="mt-6">
            <AllCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
