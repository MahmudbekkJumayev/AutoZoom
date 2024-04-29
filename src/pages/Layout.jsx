import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainCarousel from "../components/Carousel/MainCarousel";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <Header />
        <MainCarousel />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
