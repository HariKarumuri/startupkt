import React from "react";
import logo from "../../Assests/startupkt-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  const [HamShow, setHamShow] = useState(false);

  return (
    <>
      <section className="navbar-bg  NavBarSection">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link to="/">
              <i>
                <img
                  src={logo}
                  alt="company-logo"
                  height="65px"
                  className="navbar-brand"
                />
              </i>
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setHamShow(!HamShow);
              }}
            >
              <i className="hamburger"><FontAwesomeIcon icon={faBars} /></i>
              
            </button>
            <div
              className={`collapse navbar-collapse ${HamShow ? "show" : ""}   `}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className="nav-link pe-4"
                    aria-current="page"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    href="/#About"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/Services"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/Services/UiUxDesigns">
                        UI/UX Designs
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/Services/AppDev">
                        Web & Mobile apps
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/Services/DigitalMarketing"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/Services/MentoringScaling"
                      >
                        Mentoring & Scaling
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/Blog"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Contact"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    ContactUs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
