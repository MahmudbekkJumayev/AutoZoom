import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main>
        <Header />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
