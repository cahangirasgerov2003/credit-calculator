import React, { useState } from "react";
import "../styles/calculator.css";

const Calculator = () => {
  const [moneyRate, setMoneyRate] = useState(10000);
  const [monthRate, setMonthRate] = useState(12);
  const [rate, setRate] = useState(11.7);
  const rateForMonth = rate / 12 / 100;
  const monthlyPayment = +(
    (moneyRate * rateForMonth * Math.pow(rateForMonth + 1, monthRate)) /
    Math.abs(Math.pow(rateForMonth + 1, monthRate) - 1)
  ).toFixed(2);

  let balanceDebt = moneyRate;
  let principalAmount = moneyRate;
  let interestAmount = 0;
  return (
    <div>
      <h2 className="text-center mb-4">Loan Calculator</h2>
      <div className="row">
        <div className="col-4 rate__left rate">
          <h6>Loan amount</h6>
          <div className="d-flex justify-content-between align-items-center my-2">
            {/* <input type="number" name="percent" value={moneyRate} /> */}
            <h3>{moneyRate}</h3>
            <div>
              <p>AZN</p>
            </div>
          </div>
          <input
            type="range"
            name="rangeAZN"
            min="300"
            max="50000"
            step="100"
            defaultValue="10000"
            onChange={(e) => {
              setMoneyRate(e.target.value);
            }}
          />
        </div>
        <div className="col-4 rate__center rate">
          <h6>Term</h6>
          <div className="d-flex justify-content-between align-items-center my-2">
            {/* <input type="number" name="percent" value={monthRate} /> */}
            <h3>{monthRate}</h3>
            <div>
              <p>Month</p>
            </div>
          </div>
          <input
            type="range"
            name="rangeMonth"
            min="6"
            max="59"
            step="1"
            defaultValue="12"
            onChange={(e) => {
              setMonthRate(e.target.value);
            }}
          />
        </div>
        <div className="col-4 rate__right rate">
          <h6>Interest rate</h6>
          <div className="d-flex justify-content-between align-items-center my-2">
            {/* <input
              type="number"
              name="percent"
              value={rate}
              onChange={(e) => {
                console.log(e);
              }}
            /> */}
            <h3>{rate}</h3>
            <div>
              <p>%</p>
            </div>
          </div>
          <input
            type="range"
            name="rangeRate"
            min="11.7"
            max="20"
            step="0.1"
            defaultValue="11.7"
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 loun__desc my-3">
          <h6>Loan Amount: {moneyRate}</h6>
        </div>
        <div className="col-12 loun__desc">
          <h6>Monthly payment: {monthlyPayment}</h6>
        </div>
        <div className="col-12 table__plan__payment mt-4 d-none">
          <div>
            <table className="table text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Monthly payment</th>
                  <th scope="col">Principal amount</th>
                  <th scope="col">Interest amount</th>
                  <th scope="col">Balance debt</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: monthRate }, (item, index) => {
                  balanceDebt =
                    index === 0
                      ? moneyRate - interestAmount
                      : balanceDebt - interestAmount;

                  principalAmount =
                    index === 0
                      ? moneyRate * rateForMonth
                      : balanceDebt * rateForMonth;

                  interestAmount = monthlyPayment - principalAmount;

                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{monthlyPayment.toFixed(2)}</td>
                      <td>{interestAmount.toFixed(2)}</td>
                      <td>{principalAmount.toFixed(2)}</td>
                      <td>{balanceDebt.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="w-100 btn mt-4"
            onClick={() => {
              document
                .querySelector(".table__plan__payment")
                .classList.remove("d-none");
              document
                .querySelector(".table__plan__payment")
                .classList.add("d-block");
            }}
          >
            Payment plan
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="desc__calculator">
            Everything is going digital, including the loan calculator. Earlier,
            you had to puzzle a lot with complicated calculations and formulas,
            now thanks to the online loan calculator, those days are a thing of
            the past. If you want to get a loan, but you want to know in advance
            how much the monthly payment will be, you will be able to calculate
            quickly with the help of a loan calculator. Thanks to the loan
            calculator on the official website of the bank, the monthly payment
            of the loan you want to take is calculated in seconds. For this, go
            to the loan calculator page, in the loan calculator you enter the
            amount of the loan and the term of the loan. In the blink of an eye,
            the loan calculator reflects your monthly loan payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
