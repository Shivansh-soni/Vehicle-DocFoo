import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Services() {
  return (
    <section
      id="experience"
      data-aos="fade-right"
      data-aos-duration="1000"
      className="mb-8"
    >
      <div className="container experience_container flex flex-row justify-center gap-8 flex-wrap">
        <div className="experience_backend bg-primary text-black  hover:text-white ">
          <h3 className="text-center">Maintain Service Logs</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>24*7 Accesibility</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Assured Security of Data</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>No extra bloatwares </h3>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Hassle Free Experience</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend bg-primary text-black  hover:text-white">
          <h3>Local Vendor's Approach</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Availibile locally</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Spare parts avaialibility</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Highly Trained Staff</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Budget Friendly</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
