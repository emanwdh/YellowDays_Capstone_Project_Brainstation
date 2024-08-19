import "./MainActivityList.scss";
import { CircleChevronRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function MainActivityList({ priority, username, setActivityId }) {
  const [activityList, setActivityList] = useState([]);
  const { id } = useParams();
  const { pathname } = location;
  const navigate = useNavigate();

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

  async function getActivities() {
    try {
      const response = await axios.get(
        `http://localhost:5050/activities?user_id=${id}&priority=${priority}`
      );
      const dataArray = response.data;
      setActivityList(dataArray);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getActivities();
  });

  if (activityList == undefined) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="main-activities">
        <div className="main-activities__filtering">
          <p className="filter__title">Filter by </p>
          <button className="filter__option button" type="button">
            Free
          </button>
          <button className="filter__option button" type="button">
            Recently Added
          </button>
        </div>
        <div className="main-activities__group">
          {activityList.map((activity) => (
            <div
              key={activity.activity_id}
              className="main-activities__activity activity"
            >
              <div className="activity__main-group">
                <h2 className="activity__place-title">{activity.name}</h2>
                <h3 className="activity__place-type">{activity.resource}</h3>
                <div className="activity__free-tag">
                  {activity.free === 1 ? "FREE" : "PAID"}
                </div>
              </div>
              <div className="activity__additional-group">
                <p className="activity__timestamp">
                  {relativeDate(activity.created_at)}
                </p>
                <h3 className="activity__interest-category">
                  {activity.interest}
                </h3>
                <CircleChevronRight size={30} fill="white" onClick={() => {navigate(`/user/${username}/${id}/activity/${activity.activity_id}`); setActivityId(activity.activity_id)}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
