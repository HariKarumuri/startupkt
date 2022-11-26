import React from "react";
import Vector1 from "../../Assests/hero-vector1.jpg";
import vect2 from "../../Assests/vect2.png";
import vect3 from "../../Assests/vect3.png";

const About2 = () => {
  return (
    <>
      <div className="About2Bg">
        <div className="container About2">
          <h1>StartupKT Tech Partner for Your Startup.</h1>
          <div className="row ">
            <div className="col-12 col-lg-6">
              <h5 className="About2_strong_text">
                We help Startup Wantrepreneurs and entrepreneurs who have great
                ideas but looking out for startup knowledge and Tech Support.
              </h5>

              <ul>
                <li>Do You have a Startup Idea?</li>
                <li>Are you looking for a tech partner for your Project?</li>
                <li>Do you want to connect with mentors for your Startup?</li>
                <li>
                  Do you have an impressive concept and looking for investment?
                </li>
              </ul>
              <h4 className="mt-5  mb-3">
                StartupKT – We are here to support you from the beginning.
              </h4>
              <ul>
                <li>
                  <span className="Name_Bold">UI/UX design</span> : for MVP and
                  Prototypes.
                </li>
                <li>
                  <span className="Name_Bold">Web/App development</span> :
                  Launch your product or Services.
                </li>
                <li>
                  <span className="Name_Bold">Digital Marketing</span> : Reach
                  the right client.
                </li>
                <li>
                  <span className="Name_Bold">Mentorship</span> : Get guidance
                  from Industry Expert.
                </li>
                <li>
                  <span className="Name_Bold">Investment</span> : Pitch to our
                  Investors
                </li>
              </ul>
            </div>
            <div className="col-5 my-5">
              <img src={vect2} alt="random img" height="400px" />
            </div>
          </div>
          <div className="row"></div>
          <div className="row ">
            <h1 className="About2_Large_Text">
              You are Just One Step Away from Launching Your Startup
            </h1>
            <div className="col text-center minusMargin ">
              <img src={vect3} alt="random img" height="600px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
