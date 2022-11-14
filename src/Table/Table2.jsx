import React from "react";
import Blocks from "../Blocks/Blocks";

function Table2() {
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
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Ramesh</td>
              <th>Indore</th>
              <td>Vijay Nagar</td>
              <td>+91123456789</td>
              <td>21 , Near Sayaji</td>
            </tr>
            <tr>
              <td></td>
              <td>Vrdhman automobiles</td>
              <th>Indore</th>
              <td>Palasia</td>
              <td>+91123456789</td>
              <td>21 , Near Sayaji</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table2;
