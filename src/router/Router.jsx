import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";

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
    ],
  },
]);

export default router;
