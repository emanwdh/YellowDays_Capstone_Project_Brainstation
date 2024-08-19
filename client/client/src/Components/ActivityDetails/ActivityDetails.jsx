import "./ActivityDetails.scss";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ActivityDetails({setActivityId}) {


    const {id, activity} = useParams();
   
 

  useEffect(() => {
    async function getActivity() {
      try {
      const response = await axios.get(`http://localhost:5050/activities/activity?user_id=${id}&activity_id=${activity}`);
      console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    getActivity();
  }, []);

  return (
    <>
      <div className="activity-details">
        <div className="activity-details__group">
          <div className="activity-details__price">
            <h2 className="activity-details__free"></h2>
          </div>
          <div className="activity-details__info">
            <h3 className="activity-details__interest"></h3>
            <p className="activity-details__created"></p>
          </div>
        </div>
        <div className="activity-details__group">
          <h2 className="activity-details__name"></h2>
          <h3 className="activity-details__type"></h3>
        </div>
      </div>
    </>
  );
}
