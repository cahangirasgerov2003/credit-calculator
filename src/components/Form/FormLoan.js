import React, { useState } from "react";
import "../../styles/formLoan.css";
import { connect } from "react-redux";
import { addLoanToDb } from "../../actions/usersActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormLoan = (props) => {
  const [activitySector, setActivitySector] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [region, setRegion] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    setActivitySector("");
    setBusinessAddress("");
    setError("");
    setLoanAmount("");
    setMonthlyIncome("");
    setRegion("");
    setWorkExperience("");

    document.querySelector(".feedbackContainer").classList.remove("d-none");
    document.querySelector(".feedbackContainer").classList.add("d-block");
  };

  const handleLoan = (e) => {
    e.preventDefault();
    if (!props.logined.foundUser.loan) {
      if (
        activitySector &&
        monthlyIncome &&
        workExperience &&
        region &&
        businessAddress &&
        loanAmount
      ) {
        setError("");
        toast.success("You have successfully received a loan", {
          autoClose: 2000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
        props.dispatch(
          addLoanToDb(
            {
              activitySector,
              monthlyIncome,
              workExperience,
              region,
              businessAddress,
              loanAmount,
            },
            props.logined.foundUser.id
          )
        );
        navigate("/yourCredits");
      } else {
        setError("Please fill in all fields of the form !");
      }
    } else {
      toast.warning("You already have credit !", {
        autoClose: 2000,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
    }
    setActivitySector("");
    setBusinessAddress("");
    setLoanAmount("");
    setMonthlyIncome("");
    setRegion("");
    setWorkExperience("");
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
            value={activitySector}
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
            value={monthlyIncome}
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
            value={workExperience}
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
            value={region}
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
            value={businessAddress}
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
            value={loanAmount}
            onChange={(e) => {
              setLoanAmount(e.target.value);
            }}
          ></input>
        </div>

        {error ? <small className="text-danger mb-0 h6">{error}</small> : ""}

        <div className="mt-2 col-12 d-none feedbackContainer">
          <div className="d-flex flex-column">
            <label htmlFor="cancelText" className="mb-2 h5">
              Provide additional feedback
            </label>
            <textarea
              id="cancelText"
              placeholder="What was the problem? How can we eliminate it?"
              className="mb-3"
            ></textarea>
            <button
              type="button"
              className="submitFeedback"
              onClick={() => {
                if (document.querySelector("#cancelText").value) {
                  toast.success("Thanks for your feedback", {
                    autoClose: 2000,
                    pauseOnHover: false,
                    pauseOnFocusLoss: false,
                  });
                  document
                    .querySelector(".feedbackContainer")
                    .classList.add("d-none");
                  document
                    .querySelector(".feedbackContainer")
                    .classList.remove("d-block");
                  document.querySelector("#cancelText").value = "";
                } else {
                  toast.error("You are expected to enter a review !", {
                    autoClose: 2000,
                    pauseOnHover: false,
                    pauseOnFocusLoss: false,
                  });
                }
              }}
            >
              Submit Feedback
            </button>
          </div>
        </div>

        <div className="col-6 mt-2">
          <button
            type="button"
            className="btn confirmButton w-100"
            style={{ backgroundColor: "green" }}
            onClick={handleLoan}
          >
            Confirm
          </button>
        </div>

        <div className="col-6 mt-2">
          <button
            type="button"
            className="btn cencelButton w-100"
            style={{ backgroundColor: "brown" }}
            onClick={handleCancel}
          >
            Cencel
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logined: state.logined,
  };
};

export default connect(mapStateToProps)(FormLoan);
