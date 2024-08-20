import "./MainActivityList.scss";
import { CircleChevronRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function MainActivityList({ priority, username, setActivityId, relativeDate }) {
  const [activityList, setActivityList] = useState([]);
  const { id } = useParams();
  const { pathname } = location;
  const navigate = useNavigate();

  
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
      <div className= "main-activities">
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
