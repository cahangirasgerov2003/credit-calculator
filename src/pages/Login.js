import React, { useState } from "react";
import "../styles/login.css";
// import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";

const Login = () => {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const checkForm = () => {
  //   if (name.length >= 3 && password.length > 8) {
  //     alert("Congratulations, you have successfully logged in");
  //     navigate("/home");
  //   } else {
  //     alert("You are required to fill in all fields !");
  //   }
  //   setPassword("");
  //   setName("");
  // };

  return (
    <div className="row">
      <div className="col-6 login__left">
        <img alt="login" src={login}></img>
      </div>
      <div className="col-6">
        <form className="row">
          <div className="col-12 mt-2">
            <h4 className="text-center h2">Login</h4>
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="name" className="form-label">
              Username : {name}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            ></input>
          </div>

          <div className="col-12 mt-2">
            <label htmlFor="password" className="form-label">
              Password : {password}
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>

          <div className="col-12 mt-2">
            <button
              type="button"
              // onClick={checkForm}
              className="btn btn-success w-100 mt-4"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
