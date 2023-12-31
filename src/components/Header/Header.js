import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../../styles/header.css";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { logoutUserToDb } from "../../actions/usersActions";
// import { logout } from "../../actions/loginActions";
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
  {
    path: "/getLoan",
    display: "Get a loan",
  },
  {
    path: "/yourCredits",
    display: "Your credits",
  },
  {
    path: "/aboutYou",
    display: "About you",
  },
];

const Header = (props) => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const toastControl = () => {
    toast.warn("Something went wrong !", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  };

  // const navigate = useNavigate();

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
                {/* {props.login.position ? (
                  <Link
                    to="#"
                    className="d-flex align-items-center gap-2"
                    onClick={() => {
                      navigate("/home");
                      props.dispatch(logoutUserToDb(props.login.foundUser.id));
                      props.dispatch(logout());
                    }}
                  >
                    Logout<i className="ri-logout-box-line"></i>
                  </Link>
                ) : (
                  ""
                )} */}
                <Link to="/login" className="d-flex align-items-center gap-2">
                  Login<i className="ri-login-box-line"></i>
                </Link>
                <Link
                  to="/register"
                  className="d-flex align-items-center gap-2"
                >
                  Register<i className="ri-user-settings-line"></i>
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
                  <Link
                    to="#"
                    onClick={() => {
                      toastControl();
                    }}
                  >
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
                {navLinks.map((item, index) =>
                  index <= 4 ? (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ) : props.login.position ? (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export const mapStateToProps = (state) => {
  return {
    login: state.logined,
  };
};

export default connect(mapStateToProps)(Header);
