import React from "react";

function Table() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Kilometeres</th>
              <th>Service Type</th>
              <th>Description</th>
              <th>Addons</th>
              <th>Total Billing Amount(In Rupees)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <th>10-07-2020</th>
              <td>15,042</td>
              <td>General</td>
              <td>Oil Change , Clutch Greesing</td>
              <td>NA</td>
              <td>2500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
