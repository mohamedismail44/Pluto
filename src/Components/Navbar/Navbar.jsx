import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.bgNav}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${style.logo}`} to="">
            Pluto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="Tvshows"
                >
                  Tv Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="People"
                >
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="About"
                >
                  About
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav me-2 mb-2 mb-lg-0 text-center">
              <div className="social-media d-flex align-items-center">
                <li className="fab fa-facebook mx-2"></li>
                <li className="fab fa-spotify mx-2"></li>
                <li className="fab fa-instagram mx-2"></li>
                <li className="fab fa-youtube mx-2"></li>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import style from "./Navbar.module.scss";

// export default function Navbar({ userData, logout }) {
//   return (
//     <>
//       <nav className={`navbar navbar-expand-lg ${style.bgNav}`}>
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="">
//             Navbar
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {userData ? (
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="Movies"
//                   >
//                     Movies
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="Tvshows"
//                   >
//                     Tv Shows
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="People"
//                   >
//                     People
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="About"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="Networks"
//                   >
//                     Networks
//                   </Link>
//                 </li>
//               </ul>
//             ) : (
//               ""
//             )}

//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//             </form>
//             <ul className="navbar-nav me-2 mb-2 mb-lg-0 text-center">
//               <div className="social-media d-flex align-items-center">
//                 <li className="fab fa-facebook mx-2"></li>
//                 <li className="fab fa-spotify mx-2"></li>
//                 <li className="fab fa-instagram mx-2"></li>
//                 <li className="fab fa-youtube mx-2"></li>
//               </div>

//               {userData ? (
//                 <li className="nav-item">
//                   <div className="d-flex align-items-center">
//                     <Link className="nav-link" to="profile">
//                       hello : {userData.first_name}
//                     </Link>
//                     <Link onClick={logout} className="nav-link" to="Logout">
//                       Logout
//                     </Link>
//                   </div>
//                 </li>
//               ) : (
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="Login">
//                       Login
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="Register">
//                       Register
//                     </Link>
//                   </li>{" "}
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
