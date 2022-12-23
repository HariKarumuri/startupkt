import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./SinglePage.css";
import img1 from "../../../Assests/digitalmarket.png";
import { Helmet } from "react-helmet";

const DigiMarkPage = () => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Best Digital Marketing | SEO | SEM | SMM services in bangalore | StartupKT</title>
        <meta name="description" content="Digital Marketing services for Business | Website Ranking, Social Media Marketing, Paid Advertise Marketing, E - commerce, Brand Building at best competitive prices" />
        <meta name="keywords" content="digital marketing freelancer " />
        <meta name="keywords" content="best digital marketing service in bangalore " />
      </Helmet>
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
        <h1>
          “StartupKT Business Solutions” the best among the Digital Marketing
          Companies in Bangalore.
        </h1>
        <div className="row mt-4">
          <div className="col-lg-6 col-md-6 ">
            <h5>Transform your digital presence from scratch with us.</h5>
            <p>
              We are focused on getting maximum conversion optimized websites
              and Digital Marketing solutions for your Company. we understand
              every business is unique and it requires special attention to take
              your brand to the next level with all the best strategies, digital
              solutions, digital advertising, etc.{" "}
            </p>
            <p>
              Our Strategies have helped numerous of our customers in getting
              their business on top positions and adding revenue to their
              businesses.
            </p>
            <p>
              Be it a start-up, SMB or enterprise, a business needs a solid
              presence in the ever-changing digital world. We help your brand
              evolve in digital platforms from scratch.
            </p>
          </div>
          <div className="col-lh-6 col-md-6">
            <img className="img-fluid" src={img1} alt="Sale illustrator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiMarkPage;
