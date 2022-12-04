import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function AddVehicle() {
  const [aoname, setAoname] = React.useState("");
  const [voname, setVoname] = React.useState("");
  const [vname, setVname] = React.useState("");
  const [regno, setRegno] = React.useState("");
  const [vtype, setVtype] = React.useState("");

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
          const req = await fetch(
            "https://witty-hare-snaps.cyclic.app/api/db",
            {
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
            }
          );

          req.json().then((res) => {
            console.log(res);
            if (res.status === "ok") {
              setAoname(res.name);
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

  async function HandleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://calm-pear-hippopotamus-kit.cyclic.app/api/addvehicle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aoname,
          voname,
          vname,
          regno,
          vtype,
        }),
      }
    );

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/dbmain");
    }

    if (data.status === "success") {
      alert("Vehicle added successfully");
      window.location.href = "/dbmain";
    }
    console.log(data);
  }

  return (
    <div className="card-body ">
      <p className="text-3xl font-pop font-bold text-center py-16">
        Add Vehicle
      </p>
      <form onSubmit={HandleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={aoname}
            placeholder="Acount Owner FullName"
            className="input input-bordered"
            onChange={(e) => {
              setAoname(e.target.value.trim().replace(/\s+/g, ""));
            }}
          />
        </div>
        <div className="form-control mt-5">
          <input
            type="text"
            value={voname}
            placeholder="Vehicle Owner's FullName"
            className="input input-bordered"
            onChange={(e) => {
              setVoname(e.target.value.trim().replace(/\s+/g, ""));
            }}
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="text"
            value={vname}
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
            value={regno}
            placeholder="Registration Number"
            className="input input-bordered uppercase"
            maxLength="10"
            minLength="10"
            onChange={(e) => {
              setRegno(e.target.value.trim().replace(/\s+/g, ""));
            }}
          />
        </div>
        <div className="rad px-5  ">
          <div className="form-control my-3 ">
            <label className="label cursor-pointer ">
              <span className="label-text text-lg text-grey">Two Wheeler</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500 py-1"
                value={vtype}
                onChange={() => {
                  setVtype("2");
                  console.log(vtype);
                }}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-lg text-grey">Four Wheeler</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                unchecked
                value={vtype}
                onChange={() => {
                  setVtype("4");
                  console.log(vtype);
                }}
              />
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary w-6/12 self-center"
            type="submit"
            onClick={console.log(vtype)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddVehicle;
