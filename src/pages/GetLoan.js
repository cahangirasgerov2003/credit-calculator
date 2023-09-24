import React from "react";
import FormLoan from "../components/Form/FormLoan";
import loanPicture from "../assets/loan.avif";
import "../styles/getLoan.css";

const GetLoan = () => {
  return (
    <div className="row d-flex justify-content-between">
      <FormLoan />
      <div className="col-5 loan__left">
        <img alt="loan" src={loanPicture}></img>
      </div>
    </div>
  );
};

export default GetLoan;
