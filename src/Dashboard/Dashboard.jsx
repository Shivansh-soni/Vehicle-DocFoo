import React from "react";
import Lottie from "lottie-react";
import Redcar from "../assets/red-car.json";
import Bike from "../assets/Bike.json";

function Dashboard() {
  return (
    <div>
      {/* ---------------------DASHBOARD------------------------------------------ */}

      <div className="card_container flex flex-wrap flex-row gap-20 py-12 align justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Lottie
              animationData={Bike}
              loop={true}
              style={{ height: "15rem" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shivansh's MT15</h2>
            <p>Click here to see this vehicle's Details</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Service Logs</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Lottie
              animationData={Redcar}
              loop={true}
              style={{ height: "15rem" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shivansh's Nexon</h2>
            <p>Click here to see this vehicle's Details</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Service Logs</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Lottie
              animationData={Bike}
              loop={true}
              style={{ height: "15rem" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shivansh's Maestro</h2>
            <p>Click here to see this vehicle's Details</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Service Logs</button>
            </div>
          </div>
        </div>
      </div>
      <div className="add flex justify-center items-center"></div>
    </div>
  );
}

export default Dashboard;
