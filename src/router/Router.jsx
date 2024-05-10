import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Services from "../pages/services";
import CarsInfo from "../components/CarsInfo/CarsInfo";
import Cars from "../pages/Cars/Cars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/carsinfo/:id",
        element: <CarsInfo />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/:brandId",
        element: <Cars />,
      },
    ],
  },
]);

export default router;
