import "./Header.scss";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.gif";

function Header() {

    return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <ul className="header__list">
        <Link to="/">
          <li className="header__text">About</li>
        </Link>
        <Link to="projects">
          <li className="header__text">Projects</li>
        </Link>
        <Link to="skills">
          <li className="header__text">Skills</li>
        </Link>
        <Link to="contact">
          <li className="header__text">Contact</li>
        </Link>
      </ul>
    </header>


    );

}

export default Header;