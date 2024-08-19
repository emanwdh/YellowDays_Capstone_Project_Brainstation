import "./Main.scss";
import Header from "../Header/Header";
import MainActivityList from "../MainActivityList/MainActivityList";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import AddActivity from "../AddActivity/AddActivity";

export default function Main() {
  const location = useLocation();
  const { pathname } = location;
  const { id, username } = useParams();

  const [priority, setPriority] = useState({});

  useEffect(() => {
    if (pathname === `/user/${username}/${id}/now`) {
      setPriority({
        title: "Now",
        subheader: "Sooner rather than later",
        explainer:
          "These are your current top tier picks for a good time" +
          ". You want to do them, and you want to do them now.",
      });
    }

    if (pathname === `/user/${username}/${id}/next`) {
      setPriority({
        title: "Next",
        subheader: "Next up on the list",
        explainer:
          "These are your current next best activities to do, not the top picks, but they’re coming up!",
      });
    }

    if (pathname === `/user/${username}/${id}/later`) {
      setPriority({
        title: "Later",
        subheader: "Up and Coming on the list",
        explainer:
          "These might not be now, or next, but you still want to circle back to them later",
      });
    }

    if (pathname === `/user/${username}/${id}/home`) {
      setPriority({
        title: "Home",
        subheader: "Here you’ll find all the resources ",
        explainer: "to make thrilling new plans with friends -curated by you",
      });
    }

    if (pathname === `/user/${username}/${id}/add`) {
      setPriority({
        title: "Inbox",
        subheader: "Here you can add new activities",
        explainer: "You can always edit them later",
      });
    }
  }, [pathname]);

  return (
    <>
      <Header username ={username} id = {id}/>
      <div className="main">
        {pathname === `/user/${username}/${id}/home` && (
          <h3 className="main__welcome">Welcome, {username}!</h3>
        )}
        {pathname === `/user/${username}/${id}/add` && (
          <h3 className="main__sub">Your</h3>
        )}
        <h1 className="main__title">{priority.title}</h1>
        <h3 className="main__subheader">{priority.subheader}</h3>
        <p className="main__explainer">{priority.explainer}</p>
      </div>
      {(pathname === `/user/${username}/${id}/now` ||
        pathname === `/user/${username}/${id}/next` ||
        pathname === `/user/${username}/${id}/later`) && <MainActivityList  priority = {priority.title}/>}
      {pathname === `/user/${username}/${id}/add` && <AddActivity />}
    </>
  );
}
