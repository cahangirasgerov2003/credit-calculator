import React from "react";
import "../styles/yourCredits.css";
import { connect } from "react-redux";
import yourCredit from "../assets/yourCredit.png";

const YourCredits = (props) => {
  const userLoan = props.users.find((user) => {
    return user.id === props.logined.foundUser.id;
  });
  return (
    <div className="row" style={{ maxWidth: 1000 + "px", margin: "0 auto" }}>
      <div className="col-12 text-center h3 text-success">Credit details</div>
      <div className="d-flex justify-content-between col-12">
        <div className="col-4">
          <img
            className="w-100"
            src={yourCredit}
            alt="credit"
            // style={{ height: 100 + "%" }}
          ></img>
        </div>
        <div className="col-7 your__credits__right d-flex align-items-center justify-content-center">
          <div className="userCredit w-100">
            <div className="d-flex  creditDetailsContainer">
              <h5 className="credit__details">Activity Sector :</h5>
              <h4>{`${userLoan.loan.activitySector}`}</h4>
            </div>
            <div className="d-flex  creditDetailsContainer">
              <h5 className="credit__details">Monthly Income :</h5>
              <h4>{userLoan.loan.monthlyIncome}</h4>
            </div>
            <div className="d-flex  creditDetailsContainer">
              <h5 className="credit__details">Work Experience :</h5>
              <h4>{userLoan.loan.workExperience}</h4>
            </div>
            <div className="d-flex  creditDetailsContainer">
              <h5 className="credit__details">Region :</h5>
              <h4>{userLoan.loan.region}</h4>
            </div>
            <div className="d-flex  creditDetailsContainer">
              <h5 className="credit__details">Business Address :</h5>
              <h4>{userLoan.loan.businessAddress}</h4>
            </div>
            <div className="d-flex  creditDetailsContainer">
              <h5 className="credit__details">Loan amount :</h5>
              <h4>{userLoan.loan.loanAmount}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    logined: state.logined,
  };
};

export default connect(mapStateToProps)(YourCredits);
