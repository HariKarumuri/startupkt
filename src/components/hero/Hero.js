import React from "react";
import Vector1 from "../../Assests/hero-vector1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="Hero-Container  ">
      <div className="container ">
        {/* Only one row given to contaain 2 cols */}
        <div className="row Hero_Row">
          {/* the first col contains main text */}
          <div className="col d-flex flex-column justify-content-center align-items-center Hero_title_div">
            <div className="hero-title">
              <p>startupKT</p>
            </div>
            <div className="hero-sub-title text-center">
              <p>Tech Partner for Your startup</p>
              <p className="hero-sub-sub">Techies. Mentors. Investors</p>
            </div>
            <div className="get-started my-5">
              <Link to="/Contact">
              <button>
                Reach Us
                <i className="ArrowIcon"><FontAwesomeIcon icon={faArrowRightLong} /></i>
              </button></Link>
            </div>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center Hero_title_div">
            
              <img className="img-fluid" src={Vector1} alt="startup-image" height="400px"  />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
