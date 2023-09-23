import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
  {
    path: "/converter",
    display: "Converter",
  },
];

const footer = () => {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="logo footer__logo">
              <div className="d-inline-block">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-bank-line"></i>
                    <span>Buta Bank</span>
                  </Link>
                </h1>
              </div>
            </div>
            <p className="footer__logo-content">
              With our professional and open-minded team we refresh the banking
              experience of individuals and entrepreneurs. Together with our
              customers we introduce new opportunities and ideas to financial
              services in Azerbaijan and contribute to their greater success by
              delivering flexible and transparent service.
            </p>
          </div>

          <div className="col-2">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-3">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Online services</h5>
              <p className="office__info">Request for a loan</p>
              <p className="office__info">Card order</p>

              <p className="office__info">Loan payment</p>

              <p className="office__info">ASAN pay</p>
            </div>
          </div>

          <div className="col-3">
            <div className="mb-4">
              <h5 className="footer__link-title">Write us</h5>
              <p className="section__description">Your message</p>
              <div className="newsletter">
                <input id="usMessage" type="text" placeholder="*****" />
                <span className="me-2">
                  <i
                    className="ri-send-plane-line"
                    onClick={() => {
                      alert("Your message was delivered successfully !");
                      document.querySelector("#usMessage").value = "";
                    }}
                  ></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
