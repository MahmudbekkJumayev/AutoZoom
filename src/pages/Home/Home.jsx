import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import Brends from "../../components/Brends/Brends";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <div>
      <Header />
      <Brends />
      <Carousel />
      <Faq/>
    </div>
  );
};

export default Home;
