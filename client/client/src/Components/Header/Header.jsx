import "./Header.scss";
import Logo from "../../Assets/images/logo/logo.png";
import { useNavigate } from "react-router-dom";
import {Inbox} from  "lucide-react";

export default function Header({username, id}) {

  const navigate = useNavigate();
  return (
    <div className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item" onClick = {()=> {
          navigate(`/user/${username}/${id}/now`)
        }}>Now</li>
        <li className="main-nav__list-item" onClick = {()=> {
          navigate(`/user/${username}/${id}/next`)
        }}>Next</li>
        <li className="main-nav__list-item" onClick = {()=> {
          navigate(`/user/${username}/${id}/later`)
        }}>Later</li>
        <li className="main-nav__list-item" onClick = {()=> {
          navigate(`/user/${username}/${id}/home`)
        }}>Home</li>
        <li className="main-nav__list-item list-item__home" onClick = {()=> {
          navigate(`/user/${username}/${id}/add`)
        }}><Inbox /><p>Inbox</p></li>
      </ul>
      <img className = "main-nav__logo" src={Logo} onClick = {()=> {
          navigate(`/user/${username}/${id}/home`)}} />
    </div>
  );
}
