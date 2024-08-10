import UserForm from "../UserForm/UserForm";
import "./Access.scss";
import YellowSmiley from "../../Assets/images/yellow-smiley.png";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Access () {
  return (
    <>
      <section className="section">
        <div className="login signup">
          <div className="login__header signup__header header">
            <h2 className="header__title">
              Yellow
              <br /> Days
            </h2>
          </div>
          <div className="login__cta cta">
            <h2 className="cta__title">Happy to see you here</h2>
            <p className="cta__text">
              Start saving new activities to look forward to for later
            </p>
          </div>
          <img className="login__smiley" src={YellowSmiley}></img>
        </div>
      </section>
      <UserForm />
    </>
  );
}
