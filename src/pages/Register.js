import React from "react";
import register from "../assets/register__online.avif";
import "../styles/register.css";
import Form from "../components/Form/Form";
import { connect } from "react-redux";
import { addUserToDb } from "../actions/usersActions";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-6 register__left">
        <img alt="register" src={register}></img>
      </div>
      <Form
        addForm={(newUser) => {
          props.dispatch(addUserToDb(newUser));
          navigate("/login");
        }}
      />
    </div>
  );
};

export default connect()(Register);
