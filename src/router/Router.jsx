import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashborad />,
      },
      {
        path: "/brands",
        element: <Brand />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/models",
        element: <Models />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
