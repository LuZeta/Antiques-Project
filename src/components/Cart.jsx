import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import "../stylesCss/CardStyles.css";



const Cart = () => {

    const { cart, emptyCart, totalCart, removeItem } = useContext(CartContext);

    return (
        <div>
        <h2>Tus Antiques</h2>
        <div>
        {
            cart.map(item => (
                <div key={item.id}>
                <h2 className="name-detail">{item.name}</h2>
                <p className="description">Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.price}</p>
                <p>Precio total: ${item.price * item.cantidad}</p>
                <button className="btn-add-cart" onClick={()=> removeItem(item.id)}><FaTrash/></button>
                </div>
            ))
        }
                <h2 className="name-detail">Total de la compra: ${totalCart ()}</h2>

        </div>
        <button className="btn-add-cart">Finalizar Compra</button>   
        <button className="btn-return"  onClick={ emptyCart } >Vaciar Carrito</button> 
        </div>
    )
}

export default Cart;