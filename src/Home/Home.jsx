import React from "react";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import Steps from "../steps/Steps";
import Teams from "../steps/Teams";

function Home() {
  return (
    <div className="Home-container font-pop">
      {/* ----------------------NAVBAR---------------------- */}
      <div className="navbar bg-base-100 bg-transparent">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Vehicle DocFoo</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>
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
                  <a>
                    <Link to="/login">Login </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/signup">Sign Up </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---------------------------HERO ---------------- */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/1920×1080/?cars")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Vehicle DocFoo</h1>
            <p className="mb-5 text-xl">
              Vehicle DocFoo is a MERN-based Web-App Designed and Developed to
              fulfill all your vehicle needs under a single roof.
            </p>
            <button className="btn btn-primary">
              <Link to="/signup">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
      {/* ------------------------------------Services--------------------------------- */}
      <p className="text-xl text-center my-10">Services We offer</p>
      <Services />
      <Steps />
      <Teams />
    </div>
  );
}

export default Home;
