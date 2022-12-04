import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dbmain from "./Dashboard/Dbmain";
import Dashboard from "./Dashboard/Dashboard";
import Signup from "./Signup/Signup";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Logs from "./serviceLogs/Logs";
import Table2 from "./Table/Table2";
import AddVehicle from "./Dashboard/Vehicles/AddVehicle";
import GetLogs from "./serviceLogs/GetLogs";
import Adddvendors from "./Vendors/Adddvendors";
import ShowVendors from "./Vendors/ShowVendors";
import GetDocs from "./Docs/GetDocs";
import ShowDocs from "./Docs/ShowDocs";

function App() {
  useEffect(() => {
    Aos.init({
      disable: "mobile",
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dbmain" element={<Dbmain />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/logs" element={<Logs />}></Route>
        <Route path="/vendor" element={<Table2 />}></Route>
        <Route path="/addVehicle" element={<AddVehicle />}></Route>
        <Route path="/getLogs" element={<GetLogs />}></Route>
        <Route path="/addVendor" element={<Adddvendors />}></Route>
        <Route path="/showVendor" element={<ShowVendors />}></Route>
        <Route path="/addDocs" element={<GetDocs />}></Route>
        <Route path="/showDocs" element={<ShowDocs />}></Route>
      </Routes>
    </BrowserRouter>

    // <div className="App" ata-theme="cyberpunk">
    //   <Header2 />
    // </div>
  );
}

export default App;
