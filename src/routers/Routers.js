import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Calculator from "../pages/Calculator";
import Converter from "../pages/Converter";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default Routers;
