import React, { useState } from "react";
import "../styles/converter.css";

const Converter = () => {
  const [amountValue, setAmountValue] = useState("");
  // const [resultValue, setResultValue] = useState(0);
  const [amountType, setAmountType] = useState("TRY");
  const [resultType, setResultType] = useState("AZN");

  const valueType = {
    AZN: 1,
    TRY: 0.0627,
    USD: 1.7,
    RUB: 0.0177,
  };

  // console.log(typeof +amountValue);
  // console.log(amountType);
  // console.log(valueType[amountType]);
  return (
    <div className="row">
      <div className="col-6 leftConverter">
        <h2>About Currency Converter</h2>
        <p className="aboutConverter">
          A universal currency converter is a software application or website
          that provides for the easy conversion of currency values based on
          present-day exchange rates. Such currency converters can easily be
          found for free on the Internet, and can quickly convert the value of
          one currency to another, such as dollars to euros, or euros to pounds,
          and back again. Currency conversion is of practical use to tourists
          who travel abroad, to businesses who do business overseas or are
          involved in imports and exports, and to FX traders.
        </p>
      </div>
      <div className="col-6 rightConverter">
        <div className="internConverter">
          <div className="titleConverter">
            <h4>Currency Converter</h4>
          </div>
          <div className="mt-4 infoUpdate">
            <p className="mb-0">Central Bank of Azerbaijan</p>
            <p>Updated: 23.09.2023 12:01</p>
          </div>

          <div>
            <div className="d-flex align-items-center flagContainer">
              <img
                src={process.env.PUBLIC_URL + "./images/icon/azn4.png"}
                alt="AZN"
                style={{ width: 16 + "px", height: 16 + "px" }}
              ></img>
              <p className="ms-3">AZN 1</p>
            </div>
            <div className="d-flex align-items-center flagContainer">
              <img
                src={process.env.PUBLIC_URL + "./images/icon/try.png"}
                alt="TRY"
              ></img>
              <p className="ms-3">TRY 0.0627</p>
            </div>

            <div className="d-flex align-items-center flagContainer">
              <img
                src={process.env.PUBLIC_URL + "./images/icon/usd.png"}
                alt="USB"
              ></img>
              <p className="ms-3">USD 1.7</p>
            </div>
            <div className="d-flex align-items-center flagContainer">
              <img
                src={process.env.PUBLIC_URL + "./images/icon/rub.png"}
                alt="RUB"
              ></img>
              <p className="ms-3">RUB 0.0177</p>
            </div>

            <div className="amountSelect">
              <label>Amount:</label>
              <div>
                <input
                  type="number"
                  className="me-4"
                  value={amountValue}
                  onChange={(e) => {
                    setAmountValue(e.target.value);
                  }}
                ></input>
                <select
                  value={amountType}
                  onChange={(e) => {
                    setAmountType(e.target.value);
                  }}
                >
                  <option>AZN</option>
                  <option>TRY</option>
                  <option>USD</option>
                  <option>RUB</option>
                </select>
              </div>
            </div>

            <div className="resultSelect">
              <label>Result:</label>
              <div>
                <input
                  className="me-4"
                  value={
                    amountValue && !isNaN(amountValue)
                      ? (
                          +amountValue /
                          valueType[amountType] /
                          valueType[resultType]
                        ).toFixed(2)
                      : ""
                  }
                  readOnly
                  // readOnly={
                  //   (+amountValue / valueType.amountType) * valueType.resultType
                  // }
                  // onChange={(e) => {
                  //   setResultValue(e.target.value);
                  // }}
                ></input>
                <select
                  value={resultType}
                  onChange={(e) => {
                    setResultType(e.target.value);
                  }}
                >
                  <option>AZN</option>
                  <option>TRY</option>
                  <option>USD</option>
                  <option>RUB</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
