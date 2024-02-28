import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  let navigate = useNavigate();
  // باستخدمها عشان استعي صفحة من صفحات المشروع جوه الصفحة اللي انا فيها
  let submitClick = async (e) => {
    e.preventDefault();

    let validationResponse = validatFormData();
    console.log(validationResponse);

    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        " https://route-egypt-api.herokuapp.com/signup",
        user
      );
      if (data.message === "success") {
        goToLogin();
      } else {
        setErrorMsg(data.message);
      }
    }
  };

  let validatFormData = () => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().required().min(2).max(10),
      last_name: Joi.string().alphanum().required().min(2).max(10),
      age: Joi.number().required().min(20).max(80),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(new RegExp(/^[a-z][0-9]{3}$/)),
    });
    return schema.validate(user, { abortEarly: false });
  };

  let goToLogin = () => {
    navigate("/Login");
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
      <div className="w-75 m-auto py-5">
        <h2>Registeration Form</h2>

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
            <label htmlFor="first_name">First Name</label>
            <input
              onChange={getInputvalue}
              type="text"
              className="form-control my-3"
              name="first_name"
            />
          </div>
          <div className="input-data">
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={getInputvalue}
              type="text"
              className="form-control my-3"
              name="last_name"
            />
          </div>
          <div className="input-data">
            <label htmlFor="age">Age</label>
            <input
              onChange={getInputvalue}
              type="number"
              className="form-control my-3"
              name="age"
            />
          </div>
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
          <button className="btn btn-info my-2 float-end">Register</button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  );
}
