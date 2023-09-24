import React from "react";
import "../styles/login.css";
import FormLogin from "../components/Form/FormLogin";
import login from "../assets/login.jpg";

const Login = () => {
  return (
    <div className="row">
      <div className="col-6 login__left">
        <img alt="login" src={login}></img>
      </div>
      <div className="col-6">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
