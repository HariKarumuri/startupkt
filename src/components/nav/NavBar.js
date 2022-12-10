import React from "react";
import logo from "../../Assests/startupkt-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
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
              className="navbar-toggler primary-green"
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
              <span className="navbar-toggler-icon  "></span>
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
                <li className="nav-item">
                  <NavLink
                    to="/Services"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Services
                  </NavLink>
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

/* return (
  <>
  <section className="navbar-bg">
    <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
  <i><img src={logo} alt="company-logo" height="60px" className="navbar-brand" /></i>
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
      </li>
     
    </ul>
    
  </div>
</div>
</nav>
</section>
  </>
)
} */
