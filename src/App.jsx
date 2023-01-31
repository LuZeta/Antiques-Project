import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {

    return (
    <CartProvider>
         
      <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/ItemDetailContainer/:itemId" element={ <ItemDetailContainer />} />
        <Route path="/ItemListContainer/:categoryId" element={ <ItemListContainer />} />
        <Route path="*" element={ <Navigate to={"/"}/> }/>
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>

       </BrowserRouter>

    </CartProvider>

);
}

export default App;
