import React from "react";
import "./stylesCss/App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RecoveryPass from "./components/RecoveryPass";
import ChangePass from "./components/ChangePass";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <RecoveryPass />
      <ChangePass />
    </div>
  );
}

export default App;
