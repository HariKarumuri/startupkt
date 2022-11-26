import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./SinglePage.css";
import img1 from "../../../Assests/digitalmarket.png";

const DigiMarkPage = () => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <div>
      <div className="container Digi">
        <nav aria-label="breadcrumb" className="m-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Services">Services</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Digital Marketing
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-6 col-md-6 ">
            <h2>
              “StartupKT Business Solutions” the best among the Digital
              Marketing Companies in Bangalore.
            </h2>
            <h5>Transform your digital presence from scratch with us.</h5>
            <p>
              We are focused on getting maximum conversion optimized websites
              and Digital Marketing solutions for your Company. we understand
              every business is unique and it requires special attention to take
              your brand to the next level with all the best strategies, digital
              solutions, digital advertising, etc. <br />
              Our Strategies have helped numerous of our customers in getting
              their business on top positions and adding revenue to their
              businesses.
              <br />
              Be it a start-up, SMB or enterprise, a business needs a solid
              presence in the ever-changing digital world. We help your brand
              evolve in digital platforms from scratch.
            </p>
          </div>
          <div className="col-lh-6 col-md-6">
            <img className="img-fluid" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiMarkPage;
