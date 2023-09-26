import React, { useState } from "react";
import "../../styles/formLogin.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/loginActions";
import { toast } from "react-toastify";

const FormLogin = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toastError = () => {
    toast.error("You are required to fill in all fields !", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  };

  const toastWarning = () => {
    toast.error("User not found !", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  };

  const toastSuccess = () => {
    toast.success("Congratulations, you have successfully logged in", {
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  };

  const checkForm = () => {
    if (name.length && password.length) {
      const foundUser = checkDb();
      if (foundUser) {
        toastSuccess();
        navigate("/yourCredits");
        props.dispatch(
          login({
            foundUser,
            position: true,
          })
        );
      } else {
        toastWarning();
      }
    } else {
      toastError();
    }
    setPassword("");
    setName("");
  };

  const checkDb = () => {
    const searchedUser = props.users.find((user) => {
      return user.password === password && user.userName === name;
    });

    return searchedUser;
  };

  return (
    <form className="row">
      <div className="col-12 mt-2">
        <h4 className="text-center h2">Log in to your account</h4>
      </div>
      <div className="col-12 mt-2">
        <label htmlFor="name" className="form-label">
          Username : {name}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
      </div>

      <div className="col-12 mt-2">
        <label htmlFor="password" className="form-label">
          Password : {password}
        </label>
        <input
          value={password}
          type="password"
          className="form-control"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>

      <div className="col-12 mt-2">
        <button
          type="button"
          onClick={checkForm}
          className="btn btn-success w-100 mt-4"
        >
          LOGIN
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    logined: state.logined,
  };
};

export default connect(mapStateToProps)(FormLogin);
