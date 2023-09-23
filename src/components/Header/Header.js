import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
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
    path: "/calculator",
    display: "Calculator",
  },
  {
    path: "/converter",
    display: "Converter",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header__top__left">
                <span className="header__help__text">Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i>+994 ** *** ** **
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header__top__right">
                <Link to="/login" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>Login
                </Link>
                <Link
                  to="/register"
                  className="d-flex align-items-center gap-1"
                >
                  <i className="ri-user-settings-line"></i>Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__middle">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="header__middle__logo">
                <div className="d-inline-block">
                  <h1>
                    <Link
                      to="/home"
                      className="d-flex align-items-center gap-3"
                    >
                      <i className="ri-bank-line"></i>
                      <span>Buta Bank</span>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="header__middle__location">
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-earth-line"></i>
                  </span>
                  <div className="header__location__content">
                    <h4>Azerbaijan</h4>
                    <h6>Baku, Azerbaijan</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="header__middle__workday">
                <div className="d-flex align-items-center gap-2">
                  <i className="ri-time-line"></i>
                  <div className="header__workday__content">
                    <h4>Sunday to Friday</h4>
                    <h6>9am - 6pm</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2 d-flex align-items-center">
              <div className="header__middle__request d-flex align-items-center justify-content-end">
                <button className="btn request__btn">
                  <Link to="#">
                    <i className="ri-phone-line"></i>Request a call
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main__navbar">
        <div className="container">
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
