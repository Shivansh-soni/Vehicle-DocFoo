import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Redcar from "../assets/red-car.json";
import Bike from "../assets/Bike.json";
import Blocks from "../Blocks/Blocks";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Dashboard() {
  const [username, setName] = useState("");

  // async function populateUser() {
  //   const req = await fetch("http://localhost:1337/api/db", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   });

  //   req.json().then((res) => {
  //     console.log(res);
  //     if (res.status === "ok") {
  //       setName(res.name);
  //     } else {
  //       console.log(res.error);
  //     }
  //   });
  //   console.log(username);
  // }

  const navigate = useNavigate();
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
              setName(res.name);
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
      {/* ------------------------------HEADER------------------------------- */}

      <div className="navbar bg-base-100 z-999">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/#">Add Vehicle</a>
              </li>
              <li>
                <a href="/#">Settings</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <p className="btn btn-ghost normal-case text-xl">
            Hello , {username}
          </p>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

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
            <h2 className="card-title">{username}'s MT15</h2>
            <p>Click below to see this vehicle's Details</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary my-5">
                {" "}
                <Link to="/logs">Service Logs</Link>
              </button>
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
            <h2 className="card-title">{username}'s Nexon</h2>
            <p>Click below to see this vehicle's Details</p>
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
            <h2 className="card-title">{username}'s Maestro</h2>
            <p>Click below to see this vehicle's Details</p>
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
