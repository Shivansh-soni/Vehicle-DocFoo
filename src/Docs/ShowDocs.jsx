import React, { useEffect, useState } from "react";
import Blocks from "../Blocks/Blocks";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function ShowDocs() {
  let [logs, setLogs] = useState([]);

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
            "https://vdf-backend.onrender.com/api/showdocs",
            {
              headers: {
                "x-access-token": localStorage.getItem("token"),
              },
            }
          );

          req.json().then((res) => {
            console.log("RES", res);
            const vregno = localStorage.getItem("VNO");
            if (res.status === "ok") {
              console.log(res.vehicle);
              const vehicle = res.vehicle;
              // eslint-disable-next-line
              const vdata = vehicle.filter((e) => e.regno == vregno);
              setLogs(vdata);
              console.log("VDATA", vdata);
              vdata.map((e) => {
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
  return (
    <div>
      <Blocks />
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="text-center">Registration no.</th>
              <th className="text-center">R.T.O.</th>
              <th className="text-center">P.U.C.</th>
              <th className="text-center">Insurance</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {logs.map((e) => (
              <tr key={e._id}>
                <td>{e.regno}</td>
                <td>
                  <a href={e.rto} target="blank">
                    Click Here
                  </a>
                </td>
                <td>
                  <a href={e.puc} target="blank">
                    Click Here
                  </a>
                </td>
                <td>
                  <a href={e.insurance} target="blank">
                    Click Here
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-secondary my-5 btn-center"
          onClick={() => {
            navigate("/addDocs");
          }}
        >
          Add Docs
        </button>
      </div>
    </div>
  );
}

export default ShowDocs;
