import React, { useRef } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { useState } from "react";

/* import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons"; */

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71btnee",
        "template_2j3r7xa",
        form.current,
        "Zy3gb2sSHbX8Mzo9Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅✅✅your form has been submitted 👍👍👍");
          setSuccess(true);
          setEmail("");
          setMessage("");
          setName("");
          setSub("");
        },
        (error) => {
          console.log(error.text);
          alert("❌❌❌your form has been failed submit again");
          setSuccess(false);
          setEmail("");
          setMessage("");
          setSub("");
          setName("");
        }
      );
  };

  return (
    <div className="Contact_page mb-3">
      <div className="container text-center">
        <h1>Contact us</h1>
        <div className="row d-flex align-items-center justify-content-center">
          {/* <div className="col">
            <div className="row mb-3">
              <div className="col">
                <div className="card Alty">
                  <div className="card-body">
                    <i className="C-icons">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </i>
                    <h6 className="card-subtitle mb-2 fw-light">Address</h6>
                    <p className="card-text card-address">
                      StartupKT Bussiness Solutions #8, 33rd main, BTM Layout
                      2nd Stage, Bangalore 560076
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <i className="C-icons">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <h6 className="card-subtitle mb-2 fw-light">email</h6>
                    <p className="card-text text-lowercase">startupkt1@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="card ">
                  <div className="card-body">
                    <i className="C-icons">
                      <FontAwesomeIcon icon={faPhone} />
                    </i>
                    <h6 className="card-subtitle mb-2 fw-light">phone</h6>
                    <p className="card-text">+91 9148987797</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card Alty">
                  <div className="card-body">
                    <i className="C-icons">
                      <FontAwesomeIcon icon={faHourglassEnd} />
                    </i>
                    <h6 className="card-subtitle mb-2 fw-light">open hours</h6>
                    <p className="card-text">
                      Monday Friday <br /> 9:00AM 06:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-lg-6 col-md-8">
            {/*  form starts here */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="row ">
                <div className="col">
                  <input
                    name="name"
                    type="text"
                    className="form-control mb-2"
                    placeholder="name"
                    aria-label="First name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="col">
                  <input
                    name="email"
                    type="email"
                    className="form-control text-lowercase"
                    id="exampleFormControlInput1"
                    placeholder="email: name@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="First name"
                    value={sub}
                    onChange={(e) => {
                      setSub(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="messege"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <button className="submit_btn" type="submit">
                send message
              </button>
              <div
                className={`SucessBox primary-green ${
                  success ? "" : "displayNONE"
                }`}
              >
                <p>you have sucessfully submitted the form,Thank you🙏🙏</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
