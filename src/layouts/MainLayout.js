import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routers/Routers";
import "./mainLayout.css";
const MainLayout = () => {
  return (
    <div className="allContainer">
      <Header />
      <div
        style={{ marginTop: 30 + "px", marginBottom: 30 + "px" }}
        className="container"
      >
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
