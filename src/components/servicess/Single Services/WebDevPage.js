import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SinglePage.css";
import img3 from "../../../Assests/mobile.png";
import img2 from "../../../Assests/mobile2.png";

const WebDevPage = () => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <div>
      <div className="container Web">
        <nav className="m-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Services">Services</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              web & mobile app development
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h4>Web & Mobile App Design</h4>
            <ul>
              <li>
                We comprehend the clients commercial goals when considering
                Mobile Apps and its features. And we are prepared to address the
                the following.
              </li>
              <li>Designing the Minimum Viable Product (MVP)</li>
              <li>Designing the Minimum Viable Product (MVP)</li>
              <li>How is market fit achieved?</li>
            </ul>
            <h4>
              To develop a multi-screen, active experience, we do the following
            </h4>
            <ul>
              <h5>Usability Testing</h5>
              <li>Assess cross-platform usability.</li>
              <li>
                User Experience of multiple interactive systems on various
                different platforms.
              </li>
              <li>User behavioral patterns when switching between devices.</li>
              <h5>MOBILE APP DEVELOPMENT COMPANY</h5>
              <li>
                At StartupKT, we design, develop and execute. As a responsible
                IT mate, we make sure to understand your precise requirements
                before beginning the Coding process.
              </li>
              <h5>MOBILE APP DEVELOPMENT SERVICES</h5>
              <li>
                StartupKT Business Solutions is a leading mobile app development
                company in India devoted to offering high- quality mobile apps
                that compound your business. Bengaluru is the centre of
                technology and invention, and home to several tech start-ups.
                It's one of the stylish metropolises to outsource mobile app
                development services.
              </li>
              <li>
                We're completely committed to transforming your innovative ideas
                into high- performing and stoner-friendly iOS, Android, and
                cross-platform mobile apps.
              </li>
              <li>
                <h6>
                  StartupKT as a Mobile App Development Company in India Proven
                  track record
                </h6>
              </li>
              <li>
                <h6>Quality Testing</h6>
              </li>
              <li>
                <h6>Focus on Innovation</h6>
              </li>
              <li>
                <h6>Why choose StartupKT for Mobile App Development?</h6>
                <p>
                  As a well- known Mobile app development company in India, we
                  give largely client-centric results. Our app developers make
                  sure agility and predictability, performing in diminished
                  costs, higher ROI, lower threat, and a double-quick response
                  to consumer demands openings.
                  <br />
                  Whether you're looking for an online-offline mobile app,
                  hybrid or native app, or a mobile browser- enabled web app,
                  we've got you covered.
                </p>
              </li>
              <li>
                <h6>A largely skilled and complete team</h6>
              </li>
              <li>
                <h6>Years of experience in mobile app development</h6>
              </li>
              <li>
                <h6>
                  Unique creativity and authenticated development strategies
                </h6>
              </li>
              <li>
                <h6>A client-centric approach to development</h6>
              </li>
              <li>
                <h6>
                  Brilliant team for developing an engaging user interface
                </h6>
              </li>
              <li>
                <h6>
                  Focus on security, scalability, and robust infrastructures
                </h6>
              </li>
              <li>
                <h6>Quick development process</h6>
              </li>
              <li>
                <h6>Quick development process</h6>
              </li>
              <li>
                <h6>Hassle-free communication with the guests</h6>
              </li>
              <li>
                <h6>Cost-effective services</h6>
                <p>
                  Our ambition at StartupKT is to bring clearness and
                  satisfaction to the app development space. We offer you
                  advanced UI/ UX elements that guarantee a smooth user
                  experience, concoct a secure specialized framework, review
                  functionalities for any glitches, and guarantee complete
                  post-launch support.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-around align-items-center flex-column">
            <img className="img-fluid" src={img3} alt="" />
            <img className="img-fluid display_none" src={img2} alt="" />
          </div>
        </div>

        <h2>Mobile App Development Services We Offer</h2>
        <div className="row g-3 my-4">
          <div className="col-12 col-lg-3 col-md-6 text-center">
            <div className="card p-4 ">
              <h4>Android App Development</h4>
              <p>
                Our complete team includes the stylish Java and Python
                developers who construct robust applications using clean code.
                All our Android apps look outstanding on every Android screen
                resolution and demonstrate rich UX that's compatible with the
                further seasoned OS adaptions.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center">
            <div className="card p-4 ">
              <h4>
                iOS App <br /> Development
              </h4>
              <p>
                We bring the rearmost iOS app using native methodologies that
                are customized to your specific business requirements.
                Exercising Swift technologies, C and Objective C, we draw out
                the stylish and most creative operations that offer an charming
                client experience.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center">
            <div className="card p-4 ">
              <h4>Flutter App Development</h4>
              <p>
                We're best known for developing secure, scalable, and
                cross-platform compatible Flutter apps as per your conditions.
                We've a expert team of Flutter developers who are nuanced in the
                art of formulating beautiful and functionally rich apps.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center">
            <div className="card p-4 ">
              <h4>React Native App Development</h4>
              <p>
                StartupKT Business Solutions is one of the leading React Native
                app development companies. We work with a team of largely tech-
                expertise developers that leverage the advanced JavaScript
                framework to create scalable and futuristic applications that
                meet the industry norms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevPage;
