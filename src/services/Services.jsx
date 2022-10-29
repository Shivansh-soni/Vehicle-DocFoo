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
                <h4>Secure data storage</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h3>Bloatwares Free</h3>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4> Hassle-free experience .</h4>
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
                <h4>Availible locally</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Spare parts availability</h4>
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
                <h4>Pocket Friendly</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
