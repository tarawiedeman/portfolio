import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </NavLink>
      <ul className="header__list">
        <NavLink to="/">
          <li className="header__text">About</li>
        </NavLink>
        {/* <NavLink to="experience">
          <li className="header__text">Experience</li>
        </NavLink> */}
        <NavLink to="projects">
          <li className="header__text">Projects</li>
        </NavLink>
        <NavLink to="skills">
          <li className="header__text">Skills</li>
        </NavLink>
        <NavLink to="contact">
          <li className="header__text">Contact</li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
