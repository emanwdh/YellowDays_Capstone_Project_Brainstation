import "./Main.scss";
import Header from "../Header/Header";
import MainActivityList from "../MainActivityList/MainActivityList";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import AddActivity from "../AddActivity/AddActivity";
import ActivityDetails from "../ActivityDetails/ActivityDetails";

export default function Main() {
  const location = useLocation();
  const { pathname } = location;
  const { id, username, activity } = useParams();
  const [activityId, setActivityId] = useState();

  const [priority, setPriority] = useState({});

  function relativeDate(date) {
    const diff = Math.round((new Date() - new Date(date)) / 1000);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = month * 12;

    if (diff < 30) {
      return "just now";
    } else if (diff < minute) {
      return diff + " seconds ago";
    } else if (diff < 2 * minute) {
      return "a minute ago";
    } else if (diff < hour) {
      return Math.floor(diff / minute) + " minutes ago";
    } else if (Math.floor(diff / hour) == 1) {
      return "1 hour ago";
    } else if (diff < day) {
      return Math.floor(diff / hour) + " hours ago";
    } else if (diff < day * 2) {
      return "yesterday";
    } else if (diff < week) {
      return week + " days ago";
    } else if (diff < month) {
      return Math.floor(diff / week) + " weeks ago";
    } else if (diff < year) {
      return Math.floor(diff / month) + " months ago";
    } else if (Math.floor(diff / year) == 1) {
      return Math.floor(diff / year) + " year ago";
    } else {
      return Math.floor(diff / year) + " years ago";
    }
  }


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

    if (pathname.includes(`/user/${username}/${id}/activity/`)) {
      setPriority({
        title: "Activity Details",
        subheader: "This is where to find details about a specific activity",
        explainer:
          "You can choose to edit or delete using the buttons provided",
      });
      setActivityId(activity);
    }

    if(pathname === `/user/${username}/${id}/activity/${activity}/edit` ) {
      setPriority({
        title: "Edit Activity",
        subheader: "This is where to edit an existing activity",
        explainer:
          "Select the areas you would like to edit and click submit to change them",
      });
    }
  }, [pathname]);

  return (
    <>
      <Header username={username} id={id} />
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
        pathname === `/user/${username}/${id}/later`) && (
        <MainActivityList
          priority={priority.title}
          username={username}
          setActivityId={setActivityId}
          relativeDate={relativeDate}
        />
      )}
      {pathname === `/user/${username}/${id}/add` && <AddActivity />}
      {pathname === `/user/${username}/${id}/activity/${activity}/edit` && <AddActivity/>}
      {pathname === `/user/${username}/${id}/activity/${activityId}` && (
        <ActivityDetails setActivityId={setActivityId}  relativeDate={relativeDate}/>
      )}

      {pathname === `/user/${username}/${id}/home` &&   <MainActivityList
          priority={priority.title}
          username={username}
          setActivityId={setActivityId}
          relativeDate={relativeDate}
        />}
    </>
  );
}
