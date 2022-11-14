import React, { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import Blocks from "../Blocks/Blocks";
import Header from "../Header/Header";
import jwt_decode from "jwt-decode";

function Dbmain() {
  //const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem("token");
        window.loacation.href = "/login";
      } else {
        async function populate() {
          const req = await fetch("http://localhost:1337/api/db", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          });

          req.json().then((res) => {
            console.log(res);
            if (res.status === "ok") {
              console.log("good");
            } else {
              console.log(res.error);
            }
          });
        }
        populate();
      }
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <Blocks />
      <Header />
      {/* -------------------------------VEHICLE SELECTION-------------------- */}
      <div
        className="flex flex-col w-full justify-center lg:flex-row "
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% ,-50%)",
        }}
      >
        <div
          className="card w-96 bg-base-100 shadow-xl hover:bg-primary hover:text-black hover:cursor-pointer hover:scale-125 transition ease-in-out"
          onClick={() => {
            window.location.href = "/addVehicle";
          }}
        >
          <div className="card-body">
            <h2
              className="font-pop"
              //   className="card-title "
              style={{
                // fontWeight: "bold",
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              Add Vehicle
            </h2>
            <p className="text-center font-pop text-lg">
              Start your journey by adding your First/New vehicle
            </p>
          </div>
        </div>
        <div className="divider lg:divider-horizontal" />
        <div
          className="card w-96 bg-base-100 shadow-xl hover:bg-primary hover:text-black hover:scale-125 transition ease-in-out"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          <div className="card-body">
            <h2
              className="font-pop"
              //   className="card-title "
              style={{
                // fontWeight: "bold",
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              View Vehicles
            </h2>
            <p className="text-center font-pop text-lg">
              Vist Your Previous added Vehicles(If Any)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dbmain;
