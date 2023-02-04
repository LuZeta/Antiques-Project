import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import "../stylesCss/App.css";
import { doc, getDoc } from "firebase/firestore";



const Cart = () => {

    const { cart, emptyCart, totalCart, removeItem } = useContext(CartContext);

    return (
        <div className="cartContainer">
           
        <h1>Tus Antiques</h1>
        <div className="cartCards">
        {
            cart.map(item => (
                <div key={item.id}>
                <h4 className="name-detail">{item.name}</h4>
                <p className="description">Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.price}</p>
                <p>Precio total: ${item.price * item.cantidad}</p>
                <div className="pequeñoBotonBote">
                <button className="primary-button login-b" onClick={()=> removeItem(item.id)}><FaTrash/></button>
                </div>
                </div>
            ))
        }
        <h4 className="name-detail">Total de la compra: ${totalCart ()}</h4>

        </div>
        <div className="form-container">
        <Link className="primary-button login-b" to="/checkout">Terminar Compra</Link>
        <button className="secondary-button login-b"  onClick={ emptyCart } >Vaciar Carrito</button> 
        </div>
        </div>
    )
}

export default Cart;