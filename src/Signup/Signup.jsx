import React from "react";
import "./signup.css";
function Signup() {
  // const [fullname, setFullname] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   const isvalid = formValidation();
  // };

  // const formValidation = () => {};

  return (
    <div className="bg font-pop">
      <div
        className="flex justify-center items-center "
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50% , -50%)",
        }}
      >
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <p className="text-xl text-center font-pop">Signup Form</p>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
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
                className="btn btn-primary font-pop"
                onClick={HandleSubmit}
              >
                Submit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
