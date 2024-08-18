import "./UserForm.scss";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/partials/_variables.scss";
import axios from "axios";

export default function UserForm() {
  const location = useLocation();
  const { pathname } = location;
  const [cta, setCTA] = useState("");
  const navigate = useNavigate();

  const baseURL = "http://localhost:5050/users/";

  useMemo(() => {
    if (pathname === "/signup") {
      setCTA("Sign up");
    } else if (pathname === "/" || "/login") {
      setCTA("Login");
    }
  }, [pathname]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (cta === "Sign up") {
      try {
        const result = await axios.post(`${baseURL}signup`, {
          username: e.target.username.value,
          password: e.target.password.value,
        });
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (cta === "Login" || pathname === "/") {
      try {
        const result = await axios.post(`${baseURL}login`, {
          username: e.target.username.value,
          password: e.target.password.value,
        });
        const { username, token, id } = result.data;
        console.log("login successful");
        navigate(`user/${username}/${id}/home`);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="user-form__wrapper">
      <div className="user-form">
        <h3 className="user-form__title">{cta}</h3>
        <form className="user-form__form form" onSubmit={handleSubmit}>
          <div className="form__input-field user-form__input-field">
            <label className="input-field__label">username</label>
            <input
              className="input-field__input"
              placeholder="Enter your username"
              name="username"
            ></input>
          </div>
          <div className="form__input-field user-form__input-field">
            <label className="input-field__label">password</label>
            <input
              className="input-field__input"
              placeholder="Enter your password"
              name="password"
            ></input>
          </div>
          <button type="submit" className="user-form__button form__button">
            {cta}
          </button>
        </form>

        {(pathname === "/login" || pathname === "/") && (
          <div className="user-form__signup-option signup-option">
            <p className="signup-option__hint signup-option__text">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="signup-option__action signup-option__text"
            >
              <p>Sign up here</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
