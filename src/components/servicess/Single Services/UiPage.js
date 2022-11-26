import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SinglePage.css";
import img2 from "../../../Assests/mobile.png"

const UiPage = () => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <>
      <div className="container UI">
        <nav className="m-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Services">Services</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              UI/UX DESIGN
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h3>Lets Give What User Needs!!!</h3>
            <ul>
              <li>
                UI/UX Plays a major role in impressing the user in the first
                touch.
              </li>
              <li>
                User Interface and User Experience matters a lot before getting
                into any project development. It gives you a visual experience
                by it looks and Navigation.
              </li>
              <li>
                Designing helps you/client to see whether your Idea has been
                come to reality.
              </li>
              <li>
                For a start-up or a small enterprise, the significance of UI and
                UX Design becomes truly more vital as the first impression lasts
                long and using UI and UX designing can make or break the brand
                recognition.
              </li>
            </ul>

            <h3>UI/ UX DESIGN</h3>
            <ul>
              <li>
                The stylish designs instill confidence in your brand and inspire
                the users to engage with your products. We garnish all our
                applications through interactive and engaging UI/ UX interfaces.
                Our brilliant developers understand what people like and create
                uniquely beautiful and functional work.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center" >
            <img className="img-fluid" src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UiPage;
