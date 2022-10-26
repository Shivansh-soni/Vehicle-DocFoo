import React from "react";
import { Link } from "react-router-dom";

function Hero1() {
  return (
    <div>
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
    </div>
  );
}

export default Hero1;
