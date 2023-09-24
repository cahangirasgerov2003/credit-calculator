import React, { useState } from "react";
import "../../styles/formLoan.css";

const FormLoan = () => {
  const [activitySector, setActivitySector] = useState(null);
  const [monthlyIncome, setMonthlyIncome] = useState(null);
  const [workExperience, setWorkExperience] = useState(null);
  const [region, setRegion] = useState(null);
  const [businessAddress, setBusinessAddress] = useState(null);
  const [loanAmount, setLoanAmount] = useState(null);
  const [error, setError] = useState("");

  const handleLoan = (e) => {
    e.preventDefault();
    if (
      activitySector &&
      monthlyIncome &&
      workExperience &&
      region &&
      businessAddress &&
      loanAmount
    ) {
      setError("");
      alert("You have successfully received a loan !");
    } else {
      setError("Please fill in all fields of the form !");
    }
  };

  return (
    <div className="col-6">
      <form className="row loan__right">
        <div className="col-12 mt-2">
          <h4 className="text-center h2">Credit order</h4>
        </div>

        <div className="col-12 mt-2">
          <label htmlFor="activitySector" className="form-label">
            Activity Sector :
          </label>
          <input
            type="text"
            className="form-control"
            id="activitySector"
            placeholder="Frontend Engeener"
            onChange={(e) => {
              setActivitySector(e.target.value);
            }}
          ></input>
        </div>

        <div className="col-12 mt-2">
          <label htmlFor="monthlyIncome" className="form-label">
            Monthly Income :
          </label>
          <input
            type="number"
            className="form-control"
            id="monthlyIncome"
            placeholder="2000"
            onChange={(e) => {
              setMonthlyIncome(e.target.value);
            }}
          ></input>
        </div>

        <div className="col-12 mt-2">
          <label htmlFor="workExperience" className="form-label">
            Work Experience :
          </label>
          <input
            type="text"
            className="form-control"
            id="workExperience"
            placeholder="3 years and 6 months"
            onChange={(e) => {
              setWorkExperience(e.target.value);
            }}
          ></input>
        </div>

        <div className="col-12 mt-2">
          <label htmlFor="region" className="form-label">
            Region :
          </label>
          <input
            type="text"
            className="form-control"
            id="region"
            placeholder="Baku"
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          ></input>
        </div>

        <div className="col-12 my-2">
          <label htmlFor="businessAddress" className="form-label">
            Business Address :
          </label>
          <input
            type="text"
            className="form-control"
            id="businessAddress"
            placeholder="Prosol"
            onChange={(e) => {
              setBusinessAddress(e.target.value);
            }}
          ></input>
        </div>

        <div className="col-12 my-2">
          <label htmlFor="loanAmount" className="form-label">
            Loan amount :
          </label>
          <input
            type="number"
            className="form-control"
            id="loanAmount"
            placeholder="10000"
            onChange={(e) => {
              setLoanAmount(e.target.value);
            }}
          ></input>
        </div>

        {error ? <small className="text-danger mb-0 h6">{error}</small> : ""}

        <div className="col-12 mt-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleLoan}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLoan;
