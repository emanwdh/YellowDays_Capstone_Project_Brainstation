import "./Header.scss";
import Logo from "../../Assets/images/logo/logo.png";

export default function Header() {
  return (
    <div className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item">Now</li>
        <li className="main-nav__list-item">Next</li>
        <li className="main-nav__list-item">Later</li>
        <li className="main-nav__list-item">Home</li>
        <li className="main-nav__list-item">Inbox</li>
      </ul>
      <img className = "main-nav__logo"src={Logo} />
    </div>
  );
}
