import React from "react";
import SLogo from "../../Assests/s-logo.png";
import logo from "../../Assests/startupkt-logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container mt-4">
        <div className="row">
          {/*  this is for startupkt and its about */}
          <div className="col-lg-5 d-flex ">
            <img src={SLogo} alt="logo" height="75px" className="mt-3  sLogo" />

            <div className="d-flex flex-column f_company_logo">
              <i>
                <img
                  src={logo}
                  alt="company-logo"
                  height="80px"
                  className="navbar-brand"
                />
              </i>
              <p className="Footer_Text">
                At StartupKT, we design, develop and execute. As a responsible
                IT partner, we make sure to understand your precise needs before
                beginning the Coding process.
              </p>
            </div>
          </div>
          {/*  useful links and srvices in ome column */}

          {/* this is for usefullinks */}
          <div className="col d-flex flex-column UseFulLinks">
            <h5>Useful links</h5>
            <Link to="/">Home</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Services">Services</Link>
            <Link to="/">Terms of service</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          {/* this is for services */}
          <div className="col d-flex flex-column UseFulLinks">
            <h5>Our Services</h5>
            <Link to="/Services/UiUxDesigns">Web design</Link>
            <Link to="/Services/AppDev">Web development</Link>
            <Link to="/Services/DigitalMarketing">Marketing</Link>
            <Link to="/Services/MentoringScaling">Graphic design</Link>
          </div>

          {/* this id for contact us  */}
          <div className="col-lg-3 d-flex flex-column UseFulLinks">
            <h5>Contact Us</h5>
            <div className="f-address my-2 d-flex">
              <i className="f-icons">
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <p className="text-center">
                {" "}
                StartupKT Bussiness Solutions 213, 3rd Cross Road, Neeladri
                Nagar, Electronics City Phase 1, Bengaluru, Karnataka 560100
              </p>
            </div>
            <div className="f-number ">
              <i className="f-icons">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              Phone:+91 9148987797
            </div>
            <div className="f-email text-lowercase">
              <i className="f-icons">
                <FontAwesomeIcon icon={faAt} />
              </i>
              Email: start@startupkt.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
