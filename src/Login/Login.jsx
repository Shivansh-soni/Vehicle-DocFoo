import React, { useState } from "react";

function Hero() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = ["Shivansh", "Triyansh"];
  const pass = ["soni1234", "jain1234"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User :-", username);
    console.log("Pass :-", password);

    if (username && password) {
      for (let i = 0; i < user.length; i++) {
        if (user[i] === username && pass[i] === password) {
          console.log(user[i]);
          console.log(pass[i]);
          window.location.assign("/db");
          // break;
        }
      }
    } else {
      alert("Enter all details");
    }
  };

  return (
    <div>
      {/* ------------------------NAVBAR------------------------ */}
      <div className="navbar bg-base-100 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/#">Homepage</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <a href="/signup" className="btn btn-ghost normal-case text-xl">
            Sign Up
          </a>
        </div>
      </div>

      {/* --------------------------LOGIN------------------------ */}
      <div className="hero-container">
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col gap-5 lg:flex-row-reverse gap-x-9">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold ">Login now!</h1>
              <p className="py-6 font-pop ">
                Be a part of the best Web-app to fulfill all your vehicle needs.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body ml-3">
                <form action="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      placeholder="Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="/#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-primary"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
