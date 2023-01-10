
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
       <Route path="/" element={ <ItemListContainer /> } />
       <Route path="/Login" element={ <Login /> } />
       <Route path="/ItemDetailContainer/:itemId" element={ <ItemDetailContainer />} />
       <Route path="*" element={ <Navigate to={"/"}/> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
