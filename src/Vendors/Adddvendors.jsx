import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState } from "react";

function Adddvendors() {
  const [vname, setVname] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [contact, setContact] = useState("");
  const [addr, setAddr] = useState("");

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
          const req = await fetch("https://vdf-backend.onrender.com/api/db", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          });

          req.json().then((res) => {
            console.log(res);
            if (res.status === "ok") {
              console.log(res);
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

  // ---------------HANDLE SUMBIT----------------------
  async function HandleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://witty-hare-snaps.cyclic.app/api/addvendor",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vname,
          city,
          area,
          contact,
          addr,
        }),
      }
    );

    const data = await response.json();
    if (data.status === "ok") {
      navigate("/");
    } else if (data.status === "success") {
      alert("Vendor added successfully");
      window.location.href = "/dashboard";
    }
    console.log(data);
  }

  return (
    <div className="flex flex-col justify-center py-16 items-center ">
      <p className="text-2xl font-bold text-center ">Add Local Vendors</p>
      <div className="card-body  ">
        <form onSubmit={HandleSubmit} className=" w-96 ">
          <div className="form-control mt-4">
            <input
              type="text"
              value={vname}
              placeholder="Shop Name"
              className="input input-bordered "
              required
              onChange={(e) => {
                setVname(e.target.value);
              }}
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              value={city}
              placeholder="City"
              required
              className="input input-bordered"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              value={area}
              required
              placeholder="Area"
              className="input input-bordered"
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              value={contact}
              maxLength="10"
              // minLength="10"
              required
              placeholder="Contact"
              className="input input-bordered"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="textr"
              value={addr}
              placeholder="Addresss"
              className="input input-bordered"
              required
              onChange={(e) => {
                setAddr(e.target.value);
              }}
            />
          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-primary w-6/12 self-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adddvendors;
