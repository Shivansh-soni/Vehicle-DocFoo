import React from "react";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import Steps from "../steps/Steps";
import Teams from "../steps/Teams";
import Hero1 from "../Hero/Hero1";
import About from "../Hero/About";
import Blocks from "../Blocks/Blocks";

function Home() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 680 ||
      document.documentElement.scrollTop > 680
    ) {
      document.getElementById("navbar").style.background = "#171212";
    } else {
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").style.padding = "20px 0 15px 0  ";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }

  return (
    <div className="Home-container  font-pop">
      <Blocks />
      {/* ----------------------NAVBAR---------------------- */}
      <div
        className="navbar fixed z-50 bg-base-100 bg-transparent w-screen"
        id="navbar"
      >
        <div className="flex-1">
          <a
            href="/#"
            className="btn btn-ghost normal-case text-xl docfoo_logo "
          >
            Vehicle DocFoo
          </a>
        </div>
        <div className="flex-none menu_container">
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
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      {/* ---------------------------HERO ---------------- */}
      <Hero1 />
      {/* ---------------------------About---------------- */}
      <About />
      {/* ---------------------------Services---------------- */}
      <p className="text-xl text-center my-12">Services We offer</p>
      <Services />
      {/* ---------------------------Steps ---------------- */}
      <Steps />
      {/* ---------------------------Teamss ---------------- */}
      <Teams />
      {/* ---------------------------Footer---------------- */}
      <footer
        className="footer footer-center p-4 bg-base-300 text-ghost-content "
        // style={{ marginTop: "500px" }}
      >
        <div>
          <p>Copyright © 2022 - All right reserved by Vehicle Docfoo Ltd</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
