import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import Brends from "../../components/Brends/Brends";
import Faq from "../../components/Faq/Faq";
import Global from "../../components/Global/Global";
import SuperCar from "../../components/SuperCar/SuperCar";

const Home = () => {
  return (
    <div>
      <Header />
      <Brends />
      <Carousel />
      <Faq/>
      <Global />
      <SuperCar />
    </div>
  );
};

export default Home;
