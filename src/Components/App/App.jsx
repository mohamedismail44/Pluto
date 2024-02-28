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

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import {
//   Navigate,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
// import MasterLayout from "../MasterLayout/MasterLayout";
// import NotFound from "../NotFound/NotFound";
// import Home from "../Home/Home";
// import About from "../About/About";
// import Login from "../Login/Login";
// import Movies from "../Movies/Movies";
// import People from "../People/People";
// import Register from "../Register/Register";
// import Tvshows from "../Tvshows/Tvshows";
// import Profile from "../Profile/Profile";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// export default function App() {
//   const [userData, setUserData] = useState(null);
//   let saveUserData = () => {
//     let encodedToken = localStorage.getItem("token");
//     let decodedToken = jwtDecode(encodedToken);
//     setUserData(decodedToken);
//   };

//   let logout = () => {
//     localStorage.removeItem("token");
//     setUserData(null);
//     return <Navigate to="login" />;
//   };

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       saveUserData();
//     }
//   }, []);

//   let Routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <MasterLayout userData={userData} logout={logout} />,
//       errorElement: <NotFound />,
//       children: [
//         {
//           index: true,
//           element: (
//             <ProtectedRoute userData={userData}>
//               <Home />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "profile",
//           element: (
//             <ProtectedRoute userData={userData}>
//               <Profile userData={userData} />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "Movies",
//           element: (
//             <ProtectedRoute userData={userData}>
//               <Movies />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "Tvshows",
//           element: (
//             <ProtectedRoute userData={userData}>
//               <Tvshows />
//             </ProtectedRoute>
//           ),
//         },
//         { path: "about", element: <About /> },
//         { path: "People", element: <People /> },
//         { path: "Register", element: <Register /> },
//         { path: "Login", element: <Login saveUserData={saveUserData} /> },
//       ],
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={Routes} />
//     </>
//   );
// }
