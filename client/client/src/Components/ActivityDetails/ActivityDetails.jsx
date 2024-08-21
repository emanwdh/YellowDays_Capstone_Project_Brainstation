import "./ActivityDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

export default function ActivityDetails({ setActivityId, relativeDate }) {
  const location = useLocation();
  const { pathname } = location;
  const [singleActivity, setSingleActivity] = useState([]);
  const navigate = useNavigate();
  const {id, username, activity} = useParams();
  

  useEffect(() => {
    async function getActivity() {
      try {
        const response = await axios.get(
          `http://localhost:5050/activities/activity?user_id=${id}&activity_id=${activity}`
        );
        setSingleActivity(response.data[0]);
      } catch (e) {
        console.error(e);
      }
    }

    getActivity();
  }, []);

  function deleteHandler() {
    async function deleteActivity() {
      try {
        await axios.delete(
          `http://localhost:5050/activities/activity?user_id=${id}&activity_id=${activity}`
        );
      } catch (e) {
        console.log(e);
      }
    }
    deleteActivity();
    navigate(-1);
  }

  return (
    <>
      <div className="activity-details">
        <div className="activity-details__group">
          <div className="activity-details__price">
            <h2 className="activity-details__free">
              {singleActivity.free === 1 ? "FREE" : "PAID"}
            </h2>
          </div>
          <div className="activity-details__info">
            <h3 className="activity-details__interest">
              {singleActivity.interest}
            </h3>
            <p className="activity-details__created">
              {" "}
              Added {relativeDate(singleActivity.created_at)}
            </p>
          </div>
        </div>
        <div className="activity-details__group">
          <h2 className="activity-details__name">{singleActivity.name}</h2>
        </div>
        <Link className="activity-details__url" to={singleActivity.url}>
          {singleActivity.url}
        </Link>
        <div className="activity-details__buttons">
          <button className="activity-details__button button__edit button" onClick ={()=> {navigate(`/user/${username}/${id}/activity/${activity}/edit`)}}>
            Edit
          </button>
          <button
            className="activity-details__button button__delete button"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
