import React, { useState } from "react";
import "../../styles/formLogin.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/loginActions";

const FormLogin = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkForm = () => {
    if (name.length && password.length) {
      const foundUser = checkDb();
      if (foundUser) {
        alert("Congratulations, you have successfully logged in");
        navigate("/yourCredits");
        props.dispatch(
          login({
            foundUser,
            position: true,
          })
        );
      } else {
        alert(
          "No user matching the parameters you entered was found, please check the login information !"
        );
      }
    } else {
      alert("You are required to fill in all fields !");
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
