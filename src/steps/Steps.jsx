import React from "react";

function Steps() {
  return (
    <>
      <p className="text-center my-9">How It Works</p>
      <div className="flex justify-center items-center">
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Maintain Service Logs</li>
          <li className="step  hover:step-accent ">Search vendors</li>
          <li className="step hover:step-info">Contact Vendors</li>
        </ul>
      </div>
    </>
  );
}

export default Steps;
