import React, { useState } from "react";
import "../../styles/form.css";

const Form = (props) => {
  const [userName, setUserName] = useState(null);
  const [surName, setSurName] = useState(null);
  const [cardNO, setCardNO] = useState(null);
  const [personalNO, setPersonalNO] = useState(null);
  const [acctualAddress, setAcctualAddress] = useState(null);
  const [registrAddress, setRegistrAddress] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [verifyPassword, setverifyPassword] = useState(null);
  const [error, setError] = useState("");

  const handleRegiter = (e) => {
    e.preventDefault();
    if (
      userName &&
      surName &&
      cardNO &&
      personalNO &&
      acctualAddress &&
      registrAddress &&
      birthDay &&
      phone &&
      password &&
      verifyPassword &&
      password === verifyPassword
    ) {
      setError("");
      props.addForm({
        userName,
        surName,
        cardNO,
        personalNO,
        acctualAddress,
        registrAddress,
        birthDay,
        phone,
        password,
        verifyPassword,
      });
      alert("Registration has been completed successfully !");
    } else {
      setError("Please fill in all fields of the form !");
    }
  };
  return (
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
            onChange={(e) => {
              setUserName(e.target.value);
            }}
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
            onChange={(e) => {
              setSurName(e.target.value);
            }}
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
            onChange={(e) => {
              setCardNO(e.target.value);
            }}
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
            onChange={(e) => {
              setPersonalNO(e.target.value);
            }}
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
            onChange={(e) => {
              setAcctualAddress(e.target.value);
            }}
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
            onChange={(e) => {
              setRegistrAddress(e.target.value);
            }}
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
            onChange={(e) => {
              setBirthDay(e.target.value);
            }}
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
            placeholder="0502332244"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>

        <div className="col-6 my-2">
          <label htmlFor="verifyPassword" className="form-label">
            Verify password :
          </label>
          <input
            type="password"
            className="form-control"
            id="verifyPassword"
            placeholder="****"
            onChange={(e) => {
              setverifyPassword(e.target.value);
            }}
          ></input>
        </div>
        {error ? <small className="text-danger mb-0 h6">{error}</small> : ""}

        <div className="col-12 mt-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleRegiter}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
