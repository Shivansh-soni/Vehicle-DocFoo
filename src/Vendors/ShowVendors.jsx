import React, { useEffect, useState } from "react";
import Blocks from "../Blocks/Blocks";
import jwt_decode from "jwt-decode";

function ShowVendors() {
  let [v, setV] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem("token");
        window.loacation.href = "/login";
      } else {
        async function populate() {
          const req = await fetch("http://localhost:1337/api/showVendors", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          });

          req.json().then((res) => {
            console.log("RES", res);
            if (res.status === "ok") {
              setV(res.service);
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
              <th></th>
              <th>Name</th>
              <th>city</th>
              <th>Area</th>
              <th>Mobile</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {v.map((e) => (
              <tr key={e._id}>
                <td></td>
                <td>{e.vname}</td>
                <th>{e.city}</th>
                <td>{e.area}</td>
                <td>{e.contact}</td>
                <td>{e.addr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowVendors;
