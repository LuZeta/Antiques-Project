
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
       <Route path="/" element={ <ItemListContainer /> } />
       <Route path="/Login" element={ <Login /> } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
