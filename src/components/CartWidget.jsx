import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {

    const { totalCantidadCart } = useCartContext();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
      };
      
    return (
        <Link to= "/cart" onClick={showNavbar} >
            <AiOutlineShoppingCart />
            <span>{totalCantidadCart()}</span>
        </Link>
    )
}

export default CartWidget;