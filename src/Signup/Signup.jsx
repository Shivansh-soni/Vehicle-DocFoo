import React from "react";
import "./signup.css";
import Blocks from "../Blocks/Blocks";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/login");
    }

    if (data.status === "success") {
      alert("Data saved successfully Redirecting to Login Page");
      window.location.href = "/login";
    }
    console.log(data);
  }

  // const formValidation = () => {};

  return (
    <div className="bg font-pop">
      <Blocks />
      <div
        className="flex justify-center items-center  w-96  "
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
        }}
      >
        <div className="card bg-base-100 shadow-xl w-full ">
          <div className="card-body">
            <p className="text-xl text-center font-pop">Signup Form</p>
            <form onSubmit={HandleSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Family Head's Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value.trim().replace(/\s+/g, ""));
                  }}
                />

                <label className="label">
                  <span className="label-text">Email Id</span>
                </label>
                <input
                  type="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="card-actions justify-end mt-8">
                <button
                  type="submit"
                  className="btn btn-primary font-pop"
                  // onClick={HandleSubmit}
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
