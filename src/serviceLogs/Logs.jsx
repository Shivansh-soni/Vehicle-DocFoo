import React, { useEffect, useState } from "react";
import Blocks from "../Blocks/Blocks";
import jwt_decode from "jwt-decode";

function Logs() {
  let [logs, setLogs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem("token");
        window.loacation.href = "/login";
      } else {
        async function populate() {
          const req = await fetch("http://localhost:1337/api/showlogs", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          });

          req.json().then((res) => {
            console.log("RES", res);
            const vregno = localStorage.getItem("VNO");
            if (res.status === "ok") {
              // console.log(regno);
              const vehicle = res.service;
              // eslint-disable-next-line
              const vdata = vehicle.filter((e) => e.regno == vregno);
              console.log("VDATA", vdata);
              setLogs(vdata);
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
              <th className="text-center">Vehicle</th>
              <th className="text-center">Date</th>
              <th className="text-center">Kilometeres</th>
              <th className="text-center">Description</th>
              <th className="text-center">Total Amount (INR) </th>
              <th className="text-center">Service Type</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {logs.map((e) => (
              <tr key={e._id}>
                <td>{e.vname}</td>
                <td>{e.date}</td>
                <td>{e.kms}</td>
                <td>{e.desc}</td>
                <td>{e.amount}</td>
                <td>{e.stype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Logs;
