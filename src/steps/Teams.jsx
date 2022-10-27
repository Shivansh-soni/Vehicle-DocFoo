import React from "react";
import Shiv from "../assets/Shivansh3.png";
import titu from "../assets/titu.png";
import rasika from "../assets/rasika.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFirefoxBrowser } from "react-icons/fa";

function Teams() {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div
        className="team-container my-13 w-full"
        style={{ marginTop: "5rem" }}
      >
        <p className="text-xl text-center">Meet Our Team</p>
        <div className="team flex flex-row justify-center gap-11 flex-wrap">
          {/* ====================================Shivansh================================ */}
          <div className="shivansh">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={Shiv}
                  alt="Shivansh's Dp"
                  className="rounded-xl w-13"
                  style={{
                    width: "80%",
                  }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shivansh Soni</h2>
                <p className="my-3">Founder and CEO of Vehicle DocFoo</p>
                <div className="card-actions flex gap-13">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/shivansh-soni-a97321231/";
                    }}
                  >
                    {<BsLinkedin />}
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = "https://github.com/shivansh-soni";
                    }}
                  >
                    <BsGithub />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://www.instagram.com/k_se_kalakaar/";
                    }}
                  >
                    <BsInstagram />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = "https://www.shivanshsoni.com/";
                    }}
                  >
                    <FaFirefoxBrowser />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================TRIYANSH================================ */}
          <div className="Triyansh ">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={titu}
                  alt="Triyansh's Dp"
                  className="rounded-xl w-13"
                  style={{
                    width: "80%",
                  }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Triyansh Jain</h2>
                <p className="my-3"> Co-founder and Front-End Developer</p>
                <div className="card-actions flex gap-13">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/triyanshjain2425/";
                    }}
                  >
                    {<BsLinkedin />}
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = "https://github.com/Triyanshjain";
                    }}
                  >
                    <BsGithub />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://www.instagram.com/triyanshhh/";
                    }}
                  >
                    <BsInstagram />
                  </button>
                  {/* <button className="btn btn-primary">
                    <FaFirefoxBrowser />
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* ====================================RAASIKA================================ */}

          <div className="Rasika">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={rasika}
                  alt="Rasika's Dp"
                  className="rounded-xl"
                  style={{
                    width: "80%",
                  }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Rasika Irpachi</h2>
                <p className="my-3">UI/UX Designer </p>
                <div className="card-actions flex gap-13">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/rasika-irpachi-914217213";
                    }}
                  >
                    {<BsLinkedin />}
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = "https://github.com/Triyanshjain";
                    }}
                  >
                    <BsGithub />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://www.instagram.com/rasika_irpachi/";
                    }}
                  >
                    <BsInstagram />
                  </button>
                  {/* <button className="btn btn-primary">
                    <FaFirefoxBrowser />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
