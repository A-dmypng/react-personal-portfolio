import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img className="logo" src="./img/logo-final.png" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="text-md"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/aimandimz04"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img className="facebook-icon" src="./img/facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/aymandimaypung"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer-icon" src="./img/behance.png" alt="behance" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ayman-dimaypung-9404352a1/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img className="footer-icon" src="./img/linkedin.png" alt="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Copyright 2023</p>
      </div>
    </footer>
  );
}

export default Footer;