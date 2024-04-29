import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <Header />
        <Carousel/>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
