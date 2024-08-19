import "./AddActivity.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import e from "cors";

export default function AddActivity() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    free: false,
    priority: "",
    type: "",
    interest: "",
    resource: "",
    url: "",
    name: "",
    user_id: id,
  });


  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      const response = await axios.post(`http://localhost:5050/activities`, formData);
      console.log(response)
      navigate(-1)
    } catch (e) {
        console.error(e);
    }
    console.log(formData);
  }

 
  return (
    <>
      <div className="main-background__dark">
        <div className="inbox">
          <form className="form inbox__form" onSubmit={handleSubmit}>
            <div className="title__container">
              <h2 className="form__title"> Add a new activity </h2>
            </div>
            <div className="form__section">
              {" "}
              <div className="form-radio">
                <label>Is it Free?</label>
                <div className="radio__selections">
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="free"
                      value={1}
                    ></input>
                    <label>Yes</label>
                  </div>
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="free"
                      value={0}
                    ></input>
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="form-radio">
                <label>Select a Type</label>
                <div className="radio__selections">
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="type"
                      value="event"
                    ></input>
                    <label>Event</label>
                  </div>
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="type"
                      value="place"
                    ></input>
                    <label>Place</label>
                  </div>
                </div>
              </div>
              <label>Place Title</label>
              <input placeholder="Add the Event or Place Title" onChange={handleInputChange} name = "name" value = {formData.name}></input>
            </div>
            <div className="form__section">
              <label>Priority Level</label>
              <select
                onChange={handleInputChange}
                name="priority"
                value={formData.priority}
              >
                <option>Please Select</option>
                <option>Now</option>
                <option>Next</option>
                <option>Later</option>
              </select>
              <label>Interest Area</label>
              <select
                onChange={handleInputChange}
                name="interest"
                value={formData.interest}
              >
                <option>Please Select</option>
                <option>Music</option>
                <option>Photography</option>
              </select>
              <label>Resource Name</label>
              <input
                placeholder="Add the resource title"
                onChange={handleInputChange}
                name="resource"
                value={formData.resource}
              ></input>
              <label>Link(url)</label>
              <input
                type="url"
                placeholder="Enter the url"
                onChange={handleInputChange}
                name="url"
                value={formData.url}
              ></input>
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
