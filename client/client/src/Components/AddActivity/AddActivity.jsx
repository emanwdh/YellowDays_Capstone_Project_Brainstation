import "./AddActivity.scss";
import { useNavigate } from "react-router-dom";

export default function AddActivity() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-background__dark">
        <div className="inbox">
          <form className="form inbox__form">
            <div className="title__container">
              <h2 className="form__title"> Add a new activity </h2>
            </div>
            <div className="form__section">
              <label>Place/Event Title</label>
              <input placeholder="Add the Event or Place Title"></input>
            </div>
            <div className="form__section">
              <label>Priority Level</label>
              <select>
                <option>Please Select</option>
                <option>Now</option>
                <option>Next</option>
                <option>Later</option>
              </select>
              <label>Interest Area</label>
              <select>
                <option>Please Select</option>
                <option>Music</option>
                <option>Photography</option>
              </select>
              <label>Resource Name</label>
              <input placeholder="Add the resource title"></input>
              <label>Link(url)</label>
              <input type ="url" placeholder = "Enter the url"></input>
            </div>
            <div className="form__buttons">
              <button
                className="button__cancel button"
                type="button"
                onClick={(e) => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>
              <button className="button__submit button" type="submit">
                add now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
