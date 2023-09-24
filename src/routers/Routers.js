import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Calculator from "../pages/Calculator";
import Converter from "../pages/Converter";
import GetLoan from "../pages/GetLoan";
import YourCredits from "../pages/YourCredits";
import AboutYou from "../pages/AboutYou";
import { connect } from "react-redux";
import Guarantor from "../pages/Guarantor";
// import { connect } from "react-redux";

const Routers = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/converter" element={<Converter />} />{" "}
      {props.login.position ? (
        <Route path="/getLoan" element={<GetLoan />}>
          <Route path="/getLoan/guarantor" element={<Guarantor />} />
        </Route>
      ) : (
        ""
      )}
      {/* {props.login.position ? (
        <Route path="/getLoan/guarantor" element={<Guarantor />} />
      ) : (
        ""
      )} */}
      {props.login.position ? (
        <Route path="/yourCredits" element={<YourCredits />} />
      ) : (
        ""
      )}
      {props.login.position ? (
        <Route path="/aboutYou" element={<AboutYou />} />
      ) : (
        ""
      )}
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.logined);
  return {
    login: state.logined,
  };
};

export default connect(mapStateToProps)(Routers);
