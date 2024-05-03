import React from "react";
import superCars from "../../assets/images/superCars.jpg";
import AllCars from "../Buttons/AllCars";

const SuperCar = () => {
  return (
    <div className="xs:my-[50px] md:my-[100px]">
      <div className="container  md:flex xs:flex-grow justify-center items-center gap-10">
        <div className="w-full">
          <img src={superCars} className="rounded-md" alt="" />
        </div>
        <div className="w-full">
          <h4 className="text-[35px] text-gray-100 font-bold">
            SUPERCAR RENTAL DUBAI
          </h4>
          <p className="text-[20px] text-gray-300 font-normal">
            Rent the newest supercar. Cruise the streets of Dubai with our best
            quality and fastest cars.
          </p>
          <AllCars />
        </div>
      </div>
    </div>
  );
};

export default SuperCar;
