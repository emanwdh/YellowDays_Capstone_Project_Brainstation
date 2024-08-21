import "./AddActivity.scss";
import { useNavigate, useParams, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import e from "cors";

export default function AddActivity() {


  const location = useLocation();
  const {pathname} = location;
  const navigate = useNavigate();
  const { id, activity } = useParams();
  const [formData, setFormData] = useState({
    free: "",
    priority: "",
    type: "",
    interest: "",
    resource: "",
    url: "",
    name: "",
    user_id: id,
  });
  const token = sessionStorage.getItem("JWTtoken");


  if(pathname.includes('edit')){

    useEffect(() => {
      async function getActivity() {
        try {
          const response = await axios.get(
            `http://localhost:5050/activities/activity?user_id=${id}&activity_id=${activity}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setFormData(response.data[0]);
        } catch (e) {
          console.error(e);
        }
      }
  
      getActivity();
    }, []);

  }

 


  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if(name === "free") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
  
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.free === "" || formData.type == ""){
      alert("Please fill in the price and type categories.");
    }

    if(pathname.includes('edit')){

      try {
        const response = await axios.put( `http://localhost:5050/activities/activity?user_id=${id}&activity_id=${activity}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        navigate(-1)
      } catch (e) {
          console.error(e.response.data);
      }

    } else {
      try {
        const response = await axios.post(`http://localhost:5050/activities`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        navigate(-1)
      } catch (e) {
          console.error(e);
      }
    }
  }

 
  return (
    <>
      <div className="main-background__dark">
        <div className="inbox">
          <form className="form inbox__form" onSubmit={handleSubmit}>
            <div className="title__container">
              <h2 className="form__title"> {pathname.includes('edit')? 'Edit an activity': 'Add a new activity'}</h2>
            </div>
            <div className="form__section">
              {" "}
              <div className="form-radio">
                <label>Is it Free?</label>
                <div className="radio__selections" required>
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="free"
                      value= {1}
                      defaultChecked={pathname.includes('edit') && formData.price == 1}
                    ></input>
                    <label>Yes</label>
                  </div>
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="free"
                      value= {0}
                      defaultChecked={pathname.includes('edit') && formData.price == 0}
                    ></input>
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="form-radio">
                <label>Select a Type</label>
                <div className="radio__selections" required>
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="type"
                      value="event"
                      checked={formData.type === "event"}
                    ></input>
                    <label>Event</label>
                  </div>
                  <div className="radio__option">
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="type"
                      value="place"
                      checked={formData.type === "place"}
                    ></input>
                    <label>Place</label>
                  </div>
                </div>
              </div>
              <label>Place Title</label>
              <input placeholder="Add the Event or Place Title" onChange={handleInputChange} name = "name" value = {formData.name} required></input>
            </div>
            <div className="form__section">
              <label>Priority Level</label>
              <select
                onChange={handleInputChange}
                name="priority"
                value={formData.priority}
                required
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
                value={formData.interest} required
              >
                <option>Please Select</option>
                <option>Music</option>
                <option>Photography</option>
                <option>Food</option>
                <option>Art</option>
                <option>Learning</option>
                <option>Exercise</option>
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
              <button className="button__submit button" type="submit">{pathname.includes('edit')? "Submit" : "add now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
