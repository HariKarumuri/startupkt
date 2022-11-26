import React from "react";

import Consult from "../../Assests/consult.png";
import invest from "../../Assests/invest.png";
import market from "../../Assests/market.png";
import mentor from "../../Assests/mentor.png";
import effiecient from "../../Assests/effiecient.png";
import mobile from "../../Assests/mobile.png";
import qa from "../../Assests/qa.png";
import service from "../../Assests/service.png";
import vect4 from "../../Assests/vect4.png";


const About3 = () => {
  return (
    <div className="container About3">
      <div className="row my-5 text-center">
        <div className="col  d-flex justify-content-center align-items-center ">
          <div className="RoundBG">
            <h4>APP DEVELOPMENT</h4>
            <h4>APPROACH FOLLOWED BY</h4>
            <h4>OUR MOBILE APP</h4>
            <h4>DEVELOPMENT COMPANY</h4>
            <h4>IN BANGALORE</h4>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src={vect4} alt="startup-image" height="400px" />
        </div>
      </div>
      <div className="row mb-4 g-3">
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card Alt">
            <div className="card-body">
              <h5 className="card-title ">Consultation & Research</h5>
              <p className="card-text">
                Lets have a detailed discussion about your requirement. It helps
                us to bring your idea to a Product.
              </p>
              <p className="card-text">
                We do Market research and make sure your services are
                competitive and best in the market.
              </p>
            </div>
            <img src={Consult} className="card-img-top" alt="Consultancy img" />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Efficient Design</h5>
              <p className="card-text">
                we will provide you the UI/UX design which ensures that you are
                able to see all your ideas are implemented on the design.
              </p>
              <p className="card-text">
                It helps us too develop a robust application in a given time
                frame.
              </p>
            </div>
            <img src={effiecient} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card Alt">
            <div className="card-body">
              <h5 className="card-title">Web/App Development</h5>
              <p className="card-text">
                At StartupKT, we deliver your product by developing a high
                performing application developed by our experienced using a
                latest technology.
              </p>
              <p className="card-text">You get what you imagined and approved.</p>
            </div>
            <img src={mobile} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">QA Testing</h5>
              <p className="card-text">
                We are highly efficient in coding a zero bug projects. We ensure
                your application passes through multiple testing process before
                we deliver.
              </p>
              <p className="card-text">
                We believe in making our clients life easier.
              </p>
            </div>
            <img src={qa} className="card-img-top" alt="..." />
          </div>
        </div>
      
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card Alt">
            <div className="card-body">
              <h5 className="card-title">Deployment and Support</h5>
              <p className="card-text">
                We submit your applications in respective app stores and help
                you with app store optimisation and ensure high visibility and
                reach.
              </p>
              <p className="card-text">
                We manage and maintain your application for smooth operations
                post deployment as well.
              </p>
            </div>
            <img src={service} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Internet Marketing</h5>
              <p className="card-text">
                Internet is the new market place. We make you highlighted in all
                the platforms and take your business to the next level.
              </p>
              <p className="card-text">
                By doing social media marketing, omni channel marketing and
                search engine marketing etc., will help you to expand your
                business globally with minimal investment.
              </p>
            </div>
            <img src={market} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card Alt">
            <div className="card-body">
              <h5 className="card-title">Learn from Mentor</h5>
              <p className="card-text">
                We can do everything by ourselves. But a right expert will guide
                you to do right things at right time.
              </p>
              <p className="card-text">
                We will connect you with the right mentor for your personal and
                business growth.
              </p>
            </div>
            <img src={mentor} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Business Scaling</h5>
              <p className="card-text">
                We provide training sessions from best business trainers and
                billionaires which helps in transforming your startup to well
                established business.
              </p>
              <p className="card-text">
                Get networking with 300+ startup co-founders and business owners
                across country wide in multiple segments.
              </p>
            </div>
            <img src={invest} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
