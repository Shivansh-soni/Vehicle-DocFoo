import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Signup from "./Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/db" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App" ata-theme="cyberpunk">
    //   <Header2 />
    // </div>
  );
}

export default App;
