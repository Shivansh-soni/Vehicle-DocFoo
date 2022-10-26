import React from "react";

function Steps() {
  return (
    <div
      data-aos="flip-down"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      style={{
        margin: "9.375rem 0px",
      }}
    >
      <div className="steps-container " data-aos="flip-down">
        <p className="text-center my-9">How It Works</p>
        <div className="flex justify-center items-center">
          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Maintain Service Logs</li>
            <li className="step  hover:step-accent ">Search vendors</li>
            <li className="step hover:step-info">Contact Vendors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Steps;
