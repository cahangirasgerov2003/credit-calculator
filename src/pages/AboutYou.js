import React from "react";
import "../styles/aboutYou.css";
import { useSelector } from "react-redux";
import businessman from "../assets/businessman.png";

const AboutYou = () => {
  const state = useSelector((state) => state.logined);
  console.log(state);
  return (
    <div
      className="row d-flex justify-content-between"
      style={{ maxWidth: 1000 + "px", margin: "0 auto" }}
    >
      <div className="col-4">
        <img className="w-100" src={businessman} alt="businessman"></img>
      </div>
      <div className="col-7 about__you__right d-flex align-items-center justify-content-center">
        <div className="userDetails">
          <h5 className="card-title">
            Full name :{" "}
            {`${state.foundUser.userName} ${state.foundUser.surName}`}
          </h5>
          <h5 className="card-title">Birthday : {state.foundUser.birthDay}</h5>
          <h5 className="card-title">
            Registration address : {state.foundUser.registrAddress}
          </h5>
          <h5 className="card-title">
            Acctual address : {state.foundUser.acctualAddress}
          </h5>
          <h5 className="card-title">Phone number : {state.foundUser.phone}</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
