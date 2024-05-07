import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Services from "../pages/services";
import CarsInfo from "../components/CarsInfo/CarsInfo";

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
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/blog",
        element: <Blog />,
        errorElement: <Error />,
      },      
      {
        path: "/services",
        element: <Services />,
        errorElement: <Error />,
      },
      {
        path: "/carsinfo/:id",
        element: <CarsInfo />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;
