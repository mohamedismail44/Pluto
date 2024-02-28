import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  let navigate = useNavigate();

  let submitClick = async (e) => {
    e.preventDefault();

    let validationResponse = validatFormData();
    console.log(validationResponse);

    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        " https://route-egypt-api.herokuapp.com/signin",
        user
      );
      if (data.message === "success") {
        goToHome();
      } else {
        setErrorMsg(data.message);
      }
    }
  };

  let validatFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(new RegExp(/^[a-z][0-9]{3}$/)),
    });
    return schema.validate(user, { abortEarly: false });
  };

  let goToHome = () => {
    navigate("/");
  };

  let getInputvalue = (e) => {
    let myUser = { ...user }; //deep copy
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
    console.log(myUser);
  };

  // ..........................HTML......................................
  return (
    <>
      <div className="w-75  m-auto py-5">
        <h2>Login Form</h2>

        {errorsList.map((error, index) => (
          <div key={index} className="alert alert-danger p-2">
            {error.message}
          </div>
        ))}

        {errorMsg ? (
          <div className="alert alert-danger p-2">{errorMsg}</div>
        ) : (
          ""
        )}
        <form onSubmit={submitClick}>
          <div className="input-data">
            <label htmlFor="email">Email</label>
            <input
              onChange={getInputvalue}
              type="email"
              className="form-control my-3"
              name="email"
            />
          </div>
          <div className="input-data">
            <label htmlFor="password">Password</label>
            <input
              onChange={getInputvalue}
              type="password"
              className="form-control my-3"
              name="password"
            />
          </div>

          <p className="float-start my-2 ">
            dont have account: <Link to="/Register">Register</Link>
          </p>
          <button className="btn btn-info my-2 float-end">Login</button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  );
}

// import axios from "axios";
// import Joi from "joi";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login({ saveUserData }) {
//   const [user, setuser] = useState({
//     email: "",
//     password: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [errorsList, setErrorsList] = useState([]);
//   let navigate = useNavigate();

//   let submitClick = async (e) => {
//     e.preventDefault();

//     let validationResponse = validatFormData();
//     console.log(validationResponse);

//     if (validationResponse.error) {
//       setErrorsList(validationResponse.error.details);
//     } else {
//       let { data } = await axios.post(
//         " https://route-egypt-api.herokuapp.com/signin",
//         user
//       );
//       if (data.message === "success") {
//         localStorage.setItem("token", data.token);
//         saveUserData();
//       } else {
//         setErrorMsg(data.message);
//       }
//     }
//   };

//   let validatFormData = () => {
//     const schema = Joi.object({
//       email: Joi.string()
//         .required()
//         .email({ tlds: { allow: ["com", "net"] } }),
//       password: Joi.string()
//         .required()
//         .pattern(new RegExp(/^[a-z][0-9]{3}$/)),
//     });
//     return schema.validate(user, { abortEarly: false });
//   };

//   let goToHome = () => {
//     navigate("/");
//   };

//   let getInputvalue = (e) => {
//     let myUser = { ...user }; //deep copy
//     myUser[e.target.name] = e.target.value;
//     setuser(myUser);
//     console.log(myUser);
//   };

//   // ..........................HTML......................................
//   return (
//     <>
//       <div className="w-75 m-auto py-5">
//         <h2>Login Form</h2>

//         {errorsList.map((error, index) => (
//           <div key={index} className="alert alert-danger p-2">
//             {error.message}
//           </div>
//         ))}

//         {errorMsg ? (
//           <div className="alert alert-danger p-2">{errorMsg}</div>
//         ) : (
//           ""
//         )}
//         <form onSubmit={submitClick}>
//           <div className="input-data">
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={getInputvalue}
//               type="email"
//               className="form-control my-3"
//               name="email"
//             />
//           </div>
//           <div className="input-data">
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={getInputvalue}
//               type="password"
//               className="form-control my-3"
//               name="password"
//             />
//           </div>

//           <p className="float-start my-2 ">
//             dont have account: <Link to="/Register">Register</Link>
//           </p>
//           <button className="btn btn-info my-2 float-end">Login</button>
//           <div className="clear-fix"></div>
//         </form>
//       </div>
//     </>
//   );
// }
