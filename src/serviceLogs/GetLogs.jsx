import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import Blocks from "../Blocks/Blocks";

function GetLogs() {
  const [regno, setRegno] = useState("");
  const [vname, setVname] = useState("");
  const [oname, setOname] = useState("");
  const [date, setDate] = useState("");
  const [kms, setKms] = useState("");
  const [desc, setDesc] = useState("");
  const [prob, setProb] = useState("");
  const [amount, setAmount] = useState("");
  const [stype, setStype] = useState("General");

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
            const vregno = localStorage.getItem("VNO");
            if (res.status === "ok") {
              console.log(res.vehicle);
              const vehicle = res.vehicle;
              // eslint-disable-next-line
              const vdata = vehicle.filter((e) => e.regno == vregno);
              console.log("VDATA", vdata);
              vdata.map((e) => {
                setRegno(e.regno);
                setVname(e.vname);
                setOname(e.voname);
                return 0;
              });
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

  // ------ONSUBMIT--------------
  async function HandleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/addlogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vname,
        oname,
        regno,
        date,
        prob,
        kms,
        desc,
        amount,
        stype,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      navigate("/login");
    } else if (data.status === "success") {
      alert("Logs added successfully");
      window.location.href = "/dashboard";
    }
    console.log(data);
  }

  return (
    <>
      <Blocks />

      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold text-center mt-5 -mb-5">
          Add Service Records
        </p>
        <div
          className="card-body "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
          }}
        >
          <form onSubmit={HandleSubmit}>
            {/* <div className="form-control mt-4">
            <input
              type="text"
              value={regno}
              placeholder="Registration No."
              className="input input-bordered uppercase"
              maxLength="10"
              minLength="10"
              required
              onChange={(e) => {
                setRegno(e.target.value.toLowerCase());
              }}
            />
          </div> */}
            <div className="form-control mt-4">
              <input
                type="text"
                value={oname}
                placeholder="Vehicle Owner's Fullname"
                required
                className="input input-bordered"
                onChange={(e) => {
                  setOname(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                value={regno}
                placeholder="Registration No."
                required
                className="input input-bordered lowercase"
                onChange={(e) => {
                  setRegno(e.target.value.trim().replace(/\s+/g, ""));
                }}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                value={vname}
                required
                placeholder="Vehicle's Name"
                className="input input-bordered"
                onChange={(e) => {
                  setVname(e.target.value.trim().replace(/\s+/g, ""));
                }}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                value={date}
                required
                placeholder="Service Date ( dd / mm / yyyy)"
                className="input input-bordered"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="number"
                value={kms}
                placeholder="Kilometeres Covered"
                className="input input-bordered"
                required
                onChange={(e) => {
                  setKms(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-4">
              <textarea
                className="textarea textarea-bordered"
                value={desc}
                placeholder="Description"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-4">
              <textarea
                className="textarea textarea-bordered"
                value={prob}
                placeholder="Problems in your vehicle (IF ANY)"
                onChange={(e) => {
                  setProb(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="number"
                value={amount}
                required
                placeholder="Total Billing Ammount (INR)"
                className="input input-bordered"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="form-control mt-4">
              <select
                className="select select-bordered w-full self-center max-w-xs"
                value={stype}
                required
                onChange={(e) => {
                  setStype(e.target.value);
                }}
              >
                <option disabled>Service Type</option>
                <option>General</option>
                <option>Special</option>
              </select>
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
    </>
  );
}

export default GetLogs;
