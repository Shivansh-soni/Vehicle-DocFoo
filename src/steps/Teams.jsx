import React from "react";
// import Shiv from "../assets/shiv.jpeg";
import Shiv2 from "../assets/shiv2.jpg";
import titu from "../assets/titu.png";
import rasika from "../assets/rasika.png";

function Teams() {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div className="team-container my-12 w-full">
        <p className="text-xl text-center">Meet Our Team</p>
        <div
          className="team flex flex-row justify-center flex-wrap"
          //   style={{ border: "2px solid red" }}
        >
          <div className="shivansh">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={Shiv2}
                  alt="Shivansh's Dp"
                  className="rounded-xl w-13"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shivansh Soni</h2>
                <p className="my-3">Founder and CEO of Vehicle DocFoo</p>
                <div className="card-actions flex gap-13">
                  <button className="btn btn-primary">Visit</button>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="Triyansh ">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={titu}
                  alt="Triyansh's Dp"
                  className="rounded-xl w-13"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Triyansh Jain</h2>
                <p className="my-3"> Co-founder and Front-End Developer</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="Rasika">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={rasika} alt="Rasika's Dp" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Rasika Irpachi</h2>
                <p className="my-3">UI/UX Designer </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
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
