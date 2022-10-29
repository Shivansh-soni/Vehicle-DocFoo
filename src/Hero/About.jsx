import React from "react";
import aboutCar from "../assets/about-car.jpg";

function About() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <div
        id="about"
        className="hero reletive -z-50 min-h-screen bg-base-100 "
        style={{ width: "70%", margin: "0 auto" }}
      >
        <div className="hero-content  flex-col sm:flex-col sm:items-center   lg:flex-row px-13 gap-11">
          <img
            src={aboutCar}
            alt="kuch bhi"
            className="max-w-sm rounded-xl shadow-2xl h-13"
          />
          <div>
            <h1 className="text-5xl font-bold lg:text-left sm:text-center media-center">
              About Us
            </h1>
            <p className="py-6 w-13 text-xl  lg:text-left sm:text-center media-center ">
              Vehicle DocFoo is a MERN-based application that provides an
              optimal solution for all the services a vehicle can have i.e.
              washing & Teflon Coating, changing spare parts, and regular
              servicing. The maintenance of service records is highly secure and
              can be accessed anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
