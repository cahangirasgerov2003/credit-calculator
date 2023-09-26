import React from "react";
import "../styles/yourCredits.css";
import { connect } from "react-redux";
import yourCredit from "../assets/yourCredit.png";

const YourCredits = (props) => {
  const userLoan = props.users.find((user) => {
    return user?.id === props.logined.foundUser.id;
  });

  return (
    <div className="row" style={{ maxWidth: 1000 + "px", margin: "0 auto" }}>
      <div
        className="text-center h3 w-100 d-flex justify-content-center"
        style={{ color: "#0b1038" }}
      >
        Credit details :
        <i
          className="ri-bank-card-line ms-3"
          style={{ marginTop: 1 + "px" }}
        ></i>
      </div>
      <div className="d-flex justify-content-between col-12">
        <div className="col-4">
          <img className="w-100" src={yourCredit} alt="credit"></img>
        </div>

        {userLoan?.loan ? (
          <div className="col-7 your__credits__right">
            <div className="userCredit w-100">
              <div className="d-flex  creditDetailsContainer">
                <div className="col-6">
                  <h5 className="credit__details">Activity Sector :</h5>
                </div>
                <div className="col-6">
                  <h4>{userLoan.loan.activitySector}</h4>
                </div>
              </div>
              <div className="d-flex  creditDetailsContainer">
                <div className="col-6">
                  <h5 className="credit__details">Monthly Income :</h5>
                </div>
                <div className="col-6">
                  <h4>{userLoan.loan.monthlyIncome}</h4>
                </div>
              </div>
              <div className="d-flex  creditDetailsContainer">
                <div className="col-6">
                  <h5 className="credit__details">Work Experience :</h5>
                </div>
                <div className="col-6">
                  <h4>{userLoan.loan.workExperience}</h4>
                </div>
              </div>
              <div className="d-flex  creditDetailsContainer">
                <div className="col-6">
                  <h5 className="credit__details">Region :</h5>
                </div>
                <div className="col-6">
                  <h4>{userLoan.loan.region}</h4>
                </div>
              </div>
              <div className="d-flex  creditDetailsContainer">
                <div className="col-6">
                  <h5 className="credit__details">Business Address :</h5>
                </div>
                <div className="col-6">
                  <h4>{userLoan.loan.businessAddress}</h4>
                </div>
              </div>
              <div className="d-flex  creditDetailsContainer">
                <div className="col-6">
                  <h5 className="credit__details">Loan amount :</h5>
                </div>
                <div className="col-6">
                  <h4>{userLoan.loan.loanAmount}</h4>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <h4>You have no existing credit</h4>
          </div>
        )}
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
