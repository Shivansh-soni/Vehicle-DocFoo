import React, { useEffect } from "react";

import jwt_decode from "jwt-decode";
import { useState } from "react";
import Blocks from "../Blocks/Blocks";
import Axios from "axios";

function GetDocs() {
  const [regno, setRegno] = useState("");
  const [vname, setVname] = useState("");
  const [oname, setOname] = useState("");
  const [aoname, setAOname] = useState("");
  const [rto, setRto] = useState("");
  const [puc, setPuc] = useState("");
  const [insurance, setInsurance] = useState("");

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
                setAOname(e.aoname);
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

  //--------------------CLOUDINARY--------------------

  // ------ONSUBMIT--------------
  async function HandleSubmit(e) {
    e.preventDefault();

    // console.log("RTO", rto);
    // console.log("PUC", puc);
    // console.log("INSU", insurance);

    const response = await fetch(
      "https://vdf-backend.onrender.com/api/adddocs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regno,
          rto,
          puc,
          insurance,
          oname,
          aoname,
        }),
      }
    );
    const data = await response.json();
    if (data.status === "error") {
      alert("ERROR");
      window.location.reload();
    } else if (data.status === "success") {
      alert("Docs added successfully");
      window.location.href = "/dashboard";
    }
    console.log(data);
  }
  return (
    <>
      <Blocks />

      <div className="flex flex-col justify-center">
        <p className="text-2xl font-bold text-center mt-5 mb-5">
          Add Service Records
        </p>
        <div
          className="card-body mt-5 "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
          }}
        >
          <form onSubmit={HandleSubmit}>
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
                value={oname}
                required
                placeholder="Owner's Name"
                className="input input-bordered"
                onChange={(e) => {
                  setOname(e.target.value.trim().replace(/\s+/g, ""));
                }}
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="text"
                value={aoname}
                required
                placeholder="Owner's Name"
                className="input input-bordered"
                onChange={(e) => {
                  setAOname(e.target.value.trim().replace(/\s+/g, ""));
                }}
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">R.T.O.</span>
              </label>
              <input
                type="file"
                accept="application/pdf"
                required
                className="file-input w-full max-w-xs"
                onChange={(e) => {
                  const formData = new FormData();
                  formData.append("file", e.target.files[0]);
                  formData.append("upload_preset", "jjgm3s5n");
                  Axios.post(
                    "https://api.cloudinary.com/v1_1/dswidepvx/auto/upload",
                    formData
                  ).then((response) => {
                    // eslint-disable-next-line
                    if (response.status == "200") {
                      console.log("RES", response);
                      setRto(response.data.url);
                    } else {
                      alert(response);
                    }
                  });
                }}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">P.U.C.</span>
              </label>
              <input
                type="file"
                accept="application/pdf"
                required
                className="file-input file-input-bordered w-full max-w-xs input-bordered"
                onChange={(e) => {
                  const formData = new FormData();
                  formData.append("file", e.target.files[0]);
                  formData.append("upload_preset", "jjgm3s5n");
                  Axios.post(
                    "https://api.cloudinary.com/v1_1/dswidepvx/auto/upload",
                    formData
                  ).then((response) => {
                    // eslint-disable-next-line
                    if (response.status == "200") {
                      console.log("RES", response);
                      setPuc(response.data.url);
                    } else {
                      alert(response);
                    }
                  });
                }}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Insurance</span>
              </label>
              <input
                type="file"
                accept="application/pdf"
                required
                className="file-input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  const formData = new FormData();
                  formData.append("file", e.target.files[0]);
                  formData.append("upload_preset", "jjgm3s5n");
                  Axios.post(
                    "https://api.cloudinary.com/v1_1/dswidepvx/auto/upload",
                    formData
                  ).then((response) => {
                    // eslint-disable-next-line
                    if (response.status == "200") {
                      console.log("RES", response);
                      setInsurance(response.data.url);
                    } else {
                      alert(response);
                    }
                  });
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
    </>
  );
}

export default GetDocs;
