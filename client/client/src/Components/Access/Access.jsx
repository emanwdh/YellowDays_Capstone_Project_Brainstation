import UserForm from "../UserForm/UserForm";
import "./Access.scss";
import YellowSmiley from "../../Assets/images/yellow-smiley.png";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Access( {isLoggedIn, setIsLoggedIn}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", handleResize);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
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
      <div className="login__info">
        {windowWidth >= 1280 && (
          <div className="info">
            <h3 className="info__title">What’s this all about?</h3>
            <p className="info__text">
              YellowDays is a web app to help you catalogue, track and analyze
              your outing habits.
            </p>
            <p className="info__text">
              It’s meant to fuel your excitement, make the picking process
              easier when planning an outing, and let you keep track and be more
              intentional about what you get up to in your free time.
            </p>
          </div>
        )}

        <UserForm isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
      </div>
    </>
  );
}
