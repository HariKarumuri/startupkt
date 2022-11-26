import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import img1 from "../../../Assests/mentor.png"

import "./SinglePage.css";
const MandSPage = () => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <div className="MandS">
      <div className="container ">
        <nav aria-label="breadcrumb" className="m-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Services">Services</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Mentoring and Scaling
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h2>MENTORSHIP AND SCALING</h2>
            <ul>
              <li>
                Entrepreneurs having big visions and dreams are looking for ways
                to make them happen but do not know how to do it. For
                successfully running a Start-up Business, an entrepreneur needs
                a positive mindset and a huge responsibility. However, the major
                problem of every entrepreneur is that they're inexperienced when
                they start a business. And it's said that 9 out of 10 Indian
                start-ups fail within the first 5 years, substantially because
                of inexperienced founders and team.
              </li>
              <li>
                Start-up mentors are extremely critical but how do you go find
                them. Don't look for a mentor but mentors who are experts in
                different fields. Cause a single mentor cannot resolve all of
                your business problems. You will need one mentor for handling
                finance, one for business growth guidance, one for start-ups and
                so on.
              </li>
            </ul>
            <h5>CRUCIAL TRAITS OF A PERFECT MENTOR</h5>
            <ul>
              <li>Problem Solver</li>
              <li>Knowledgeable</li>
              <li>Strong Networking</li>
              <li>Entrepreneurship</li>
            </ul>
            <p>
              StartupKT Business Solutions has been associated with numerous
              Investors, Mentors, Startup founders and Business Personalities.
              We get you trained from the best class trainers and billionaire
              investors. Not only that we help you in connecting with business
              class people from different parts of the country and the world.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={img1} alt=""  width="400px"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MandSPage;
