import "./UserForm.scss";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../styles/partials/_variables.scss'

export default function UserForm() {
  const location = useLocation();
  const { pathname } = location;
  const [cta, setCTA] = useState("");

  useMemo(() => {
    if (pathname === "/signup") {
      setCTA("Sign up");
    } else if (pathname === "/login") {
      setCTA("Login");
    }
  }, [pathname]);



  return (
    <div className="user-form">
      <h3 className="user-form__title">{cta}</h3>
      <form className="user-form__form form">
        <div className="form__input-field user-form__input-field">
          <label className="input-field__label">username</label>
          <input
            className="input-field__input"
            placeholder="Enter your username"
          ></input>
        </div>
        <div className="form__input-field user-form__input-field">
          <label className="input-field__label">password</label>
          <input
            className="input-field__input"
            placeholder="Enter your password"
          ></input>
        </div>
        <button type="submit" className="user-form__button form__button">
          {cta}
        </button>
      </form>

      {pathname === "/login" && (
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
  );
}
