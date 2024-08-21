import "./MainActivityList.scss";
import { CircleChevronRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState, useMemo, act } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function MainActivityList({
  priority,
  username,
  setActivityId,
  relativeDate,
}) {
  const [activityList, setActivityList] = useState();
  const [isToggled, setIsToggled] = useState(false);
  const { id } = useParams();
  const { pathname } = location;
  const navigate = useNavigate();

  const handleChange = () => {
    setIsToggled(!isToggled);
  };


  useMemo(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/activities?user_id=${id}&priority=${priority}`
      );
      const dataArray = response.data;
      console.log(response.data);
      setActivityList(dataArray);
    } catch (e) {
      console.error(e);
    }
  }, [priority]);

  console.log(activityList);

  if (activityList  === undefined || priority === undefined) {
    return <>Loading...</>;
  }

 

  return (
    <>
      <div className="main-activities">
        <div className="main-activities__filtering">
          <p className="filter__title">Filter by </p>
          <button
            className={`filter__option button ${isToggled ? "on" : `off`}`}
            type="button"
            onClick={handleChange}
          >
            Free
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
                <CircleChevronRight
                  className="activity__details-button"
                  size={30}
                  fill="white"
                  onClick={() => {
                    navigate(
                      `/user/${username}/${id}/activity/${activity.activity_id}`
                    );
                    setActivityId(activity.activity_id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
