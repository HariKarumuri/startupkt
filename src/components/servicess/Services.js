import React from "react";
import "./services.css";
import code from "../../Assests/code.png";
import digitalmarket from "../../Assests/digitalmarket.png";
import mobile2 from "../../Assests/mobile2.png";
import mobile3 from "../../Assests/mobile3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="Services_main ">
      <div className="container text-center ">
        <h1 className="pt-3">
          our 
          services
        </h1>
        <div className="row g-3 my-2">
          <div className="col-lg-6 col-12 col-md-6 ">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body ">
                <h5 className="card-title">UI/UX DESIGN</h5>
                <p className="card-text">Present your IDEA to the world.</p>
                <Link to="/Services/UiUxDesigns" className="btn btn-primary">
                  Know More
                  <i className="ArrowIcon">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                </Link>
              </div>
              <img src={mobile2} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body">
                <h5 className="card-title">WEB AND MOBILE APPS</h5>
                <p className="card-text">
                  LAUNCH and showcase your Product / Service.
                </p>
                <Link to="/Services/AppDev" className="btn btn-primary">
                  Know More
                  <i className="ArrowIcon">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                </Link>
              </div>
              <img src={mobile3} className="card-img-top" alt="..." />
            </div>
          </div>
        
          <div className="col-lg-6 col-12 col-md-6">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">
                  Target the right audience and create BRAND AWARENESS.
                </p>
                <Link to="/Services/DigitalMarketing" className="btn btn-primary">
                  Know More
                  <i className="ArrowIcon">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                </Link>
              </div>
              <img src={digitalmarket} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-lg-6 col-12 col-md-6">
            <div className="card d-flex justify-content-center align-items-center">
              <div className="card-body">
                <h5 className="card-title">Mentoring & Scaling</h5>
                <p className="card-text">
                  Connect with Investors and Business People for SUCCESS
                </p>
                <Link to="/Services/MentoringScaling" className="btn btn-primary">
                  Know More
                  <i className="ArrowIcon">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </i>
                </Link>
              </div>
              <img src={code} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
