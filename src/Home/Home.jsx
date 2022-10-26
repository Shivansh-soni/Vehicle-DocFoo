import React from "react";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import Steps from "../steps/Steps";
import Teams from "../steps/Teams";

function Home() {
  return (
    <div className="Home-container font-pop">
      {/* ----------------------NAVBAR---------------------- */}
      <div className="navbar fixed z-50 bg-base-100 bg-transparent w-screen">
        <div className="flex-1">
          <a href="/#" className="btn btn-ghost normal-case text-xl">
            Vehicle DocFoo
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="/#">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="/#">
                Get Started
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 w-full">
                <li>
                  <Link to="/login">Login </Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---------------------------HERO ---------------- */}
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/1920×1080/?cars")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Vehicle DocFoo</h1>
            <p className="mb-5 text-xl">
              A MERN-based Web-App for all your vehicle needs. Swipe down to
              know more
            </p>
            <button className="btn btn-primary">
              <Link to="/signup">Get Started</Link>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================HERO SECTION================================== */}

      <div
        className="hero min-h-screen bg-base-200 "
        style={{ width: "70%", margin: "0 auto" }}
      >
        <div className="hero-content flex-col lg:flex-row px-13 gap-11">
          <img
            src="https://source.unsplash.com/random/1920×1080/?cars"
            alt="kuch bhi"
            className="max-w-sm rounded-lg shadow-2xl h-13"
          />
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6  w-13 text-xl">
              Vehicle DocFoo is a MERN Based Application which provides optimal
              solution for all the services a vehicle can have i.e. washing &
              Teflon Coating, changing spare parts and regular servicing.
              Including the maintenance of service records which is highly
              secure and can be accessed anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------Services--------------------------------- */}
      <p className="text-xl text-center my-12">Services We offer</p>
      <Services />
      <Steps />
      <Teams />
    </div>
  );
}

export default Home;
