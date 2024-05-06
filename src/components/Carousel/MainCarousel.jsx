import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";
import axios from "axios";

export default function MainCarousel() {
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";
  const [cars, setcars] = useState([])
  const getCars = () => {
      axios
          .get(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/8bcdc62e-c51c-4ff8-8aa8-bf654d09cd25`)
          .then((response) => {
              const carData = response.data.data;

              if (carData && typeof carData === 'object') {
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
  }
  useEffect(() => {
      getCars();
      console.log(cars);
  }, []);
  return (
    <div className="container">
      <Carousel title="BUDGET CARS RENTAL DUBAI" cars={cars}/>
      <Carousel1 title="SPORTS CARS RENTAL DUBAI" cars={cars}/>
      {/* <Carousel2 title="LUXURY CARS RENTAL DUBAI" />
      <Carousel3 title="CONVERTIBLE CARS RENTAL DUBAI" />
      <Carousel4 title="SUV RENTAL DUBAI" />
      <Carousel5 title="AMERICAN BRANDS RENTAL DUBAI" /> */}
    </div>
  );
}
