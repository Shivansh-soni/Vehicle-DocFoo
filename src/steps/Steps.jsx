import AOS from "aos";
import React, { useEffect } from "react";

function Steps() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      data-aos="flip-down"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    >
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
  );
}

export default Steps;
