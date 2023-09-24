import React from "react";
import register from "../assets/register__online.avif";
import "../styles/register.css";
import Form from "../components/Form/Form";
import { connect } from "react-redux";
import { addUserToDb } from "../actions/usersActions";

const Register = (props) => {
  return (
    <div className="row">
      <div className="col-6 register__left">
        <img alt="login" src={register}></img>
      </div>
      <Form
        addForm={(newUser) => {
          props.dispatch(addUserToDb(newUser));
        }}
      />
    </div>
  );
};

export default connect()(Register);
