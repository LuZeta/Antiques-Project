import React from "react";
import "./stylesCss/App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RecoveryPass from "./components/RecoveryPass";
import ChangePass from "./components/ChangePass";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <Login />
      <RecoveryPass />
      <ChangePass />
    </>
  );
}

export default App;
