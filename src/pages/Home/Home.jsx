import React from "react";
import Header from "../../components/Header/Header";
import Brends from "../../components/Brends/Brends";
import Faq from "../../components/Faq/Faq";
import Global from "../../components/Global/Global";
import SuperCar from "../../components/SuperCar/SuperCar";
import Luxury from "../../components/Luxury/Luxury";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <Brends />

      {/* <Carousel/> */}

      <Carousel />

      <Faq />

      <Global />
      <Faq />
      <SuperCar />
      <Luxury />
    </div>
  );
};

export default Home;
