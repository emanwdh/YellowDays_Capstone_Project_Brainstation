import './MainActivityList.scss';
import { CircleChevronRight } from "lucide-react";


export default function MainActivityList() {
  return (
    <>
      <div className="main-activities">
        <div className="main-activities__filtering">
          <p className="filter__title">Filter by </p>
          <button className="filter__option button">Free</button>
          <button className="filter__option button">Recently Added</button>
        </div>
        <div className="main-activities__group">
          <div className="main-activities__activity activity">
            <div className="activity__main-group">
              <h2 className="activity__place-title">Little Italy</h2>
              <h3 className="activity__place-type">Downtown Neighbourhood</h3>
              <div className="activity__free-tag">Free</div>
            </div>
            <div className="activity__additional-group">
              <p className="activity__timestamp">Yesterday</p>
              <h3 className="activity__interest-category">Photography</h3>
              <CircleChevronRight size={30} fill="white" />
            </div>
          </div>
          <div className="main-activities__activity activity">
            <div className="activity__main-group">
              <h2 className="activity__place-title">Tapestry</h2>
              <h3 className="activity__place-type">Live Music Bar</h3>
              <div className="activity__free-tag">PWYC</div>
            </div>
            <div className="activity__additional-group">
              <p className="activity__timestamp">Two days ago</p>
              <h3 className="activity__interest-category">Music</h3>
              <CircleChevronRight size={30} fill="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
