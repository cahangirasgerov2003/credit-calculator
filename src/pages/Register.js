import React from "react";
import register from "../assets/register__online.avif";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="row">
      <div className="col-6 register__left">
        <img alt="login" src={register}></img>
      </div>
      <div className="col-6">
        <form className="row register__right">
          <div className="col-12 mt-2">
            <h4 className="text-center h2">Register</h4>
          </div>

          <div className="col-6 mt-2">
            <label htmlFor="personName" className="form-label">
              Username :
            </label>
            <input
              type="text"
              className="form-control"
              id="personName"
              placeholder="****"
            ></input>
          </div>

          <div className="col-6 mt-2">
            <label htmlFor="surname" className="form-label">
              Surname :
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="****"
            ></input>
          </div>

          <div className="col-12 mt-2">
            <label htmlFor="cardNo" className="form-label">
              Card NO :
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNo"
              placeholder="****"
            ></input>
          </div>

          <div className="col-12 mt-2">
            <label htmlFor="personalNo" className="form-label">
              Personal NO :
            </label>
            <input
              type="text"
              className="form-control"
              id="personalNo"
              placeholder="****"
            ></input>
          </div>

          <div className="col-6 mt-2">
            <label htmlFor="actualAddress" className="form-label">
              Actual address :
            </label>
            <input
              type="text"
              className="form-control"
              id="actualAddress"
              placeholder="****"
            ></input>
          </div>

          <div className="col-6 mt-2">
            <label htmlFor="registrationAddress" className="form-label">
              Registration address :
            </label>
            <input
              type="text"
              className="form-control"
              id="registrationAddress"
              placeholder="****"
            ></input>
          </div>

          <div className="col-12 mt-2">
            <label htmlFor="birthDay" className="form-label">
              Birth day :
            </label>
            <input
              type="date"
              className="form-control"
              id="birthDay"
              placeholder="****"
            ></input>
          </div>

          <div className="col-12 mt-2">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number :
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="011-111-11-11"
            ></input>
          </div>

          <div className="col-6 mt-2">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="****"
            ></input>
          </div>

          <div className="col-6 mt-2">
            <label htmlFor="verifyPassword" className="form-label">
              Verify password :
            </label>
            <input
              type="password"
              className="form-control"
              id="verifyPassword"
              placeholder="****"
            ></input>
          </div>

          <div className="col-12 mt-2">
            <button type="button" className="btn btn-success w-100 mt-4">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
