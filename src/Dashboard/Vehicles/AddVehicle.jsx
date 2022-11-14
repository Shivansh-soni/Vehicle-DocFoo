import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function AddVehicle() {
  const [oname, setOname] = React.useState("");
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
          const req = await fetch("http://localhost:1337/api/db", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          });

          req.json().then((res) => {
            console.log(res);
            if (res.status === "ok") {
              // setName(res.name);
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

    const response = await fetch("http://localhost:1337/api/addvehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oname,
        vname,
        regno,
        vtype,
      }),
    });

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
        <div className="form-control">
          <input
            type="text"
            value={oname}
            placeholder="Owner's FullName"
            className="input input-bordered"
            onChange={(e) => {
              setOname(e.target.value);
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
              setVname(e.target.value);
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
              setRegno(e.target.value);
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
