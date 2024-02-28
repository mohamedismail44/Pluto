import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from "../MasterLayout/MasterLayout";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";
import About from "../About/About";
import Details from "../Details/Details";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import People from "../People/People";
import Register from "../Register/Register";
import Tvshows from "../Tvshows/Tvshows";

export default function App() {
  let Routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "details/:id/:dataType", element: <Details /> },
        { path: "Login", element: <Login /> },
        { path: "Movies", element: <Movies /> },
        { path: "People", element: <People /> },
        { path: "Register", element: <Register /> },
        { path: "Tvshows", element: <Tvshows /> },
      ],
    },
  ]);
  return <RouterProvider router={Routes} />;
}

