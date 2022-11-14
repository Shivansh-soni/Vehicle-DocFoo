import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Redcar from "../../assets/red-car.json";
import Bike from "../../assets/Bike.json";

function Vdetails() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Lottie
            animationData={Bike}
            loop={true}
            style={{ height: "15rem" }}
          />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{username}'s MT15</h2> */}
          <p>Click below to see this vehicle's Details</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary my-5">
              {" "}
              <Link to="/logs">Service Logs</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vdetails;
