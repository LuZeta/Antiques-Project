import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

const init= JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState(init);
    console.log(cart);

    const AddCart = (item) => {
      setCart([...cart, item]);
    }
    
    const itemInCart = (id) => {
      return cart.some (item => item.id === id);
    }

    const emptyCart = () =>{
      setCart([]);
    }

    const removeItem = (id) => {
      setCart ( cart.filter(item=> item.id === id));
    }
    
    const totalCart = () => {
      return cart.reduce ((acc, item) => acc + item.price * item.cantidad, 0);
    }

    const totalCantidadCart = () => {
        return cart.reduce ((acc, item) => acc + item.cantidad, 0);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart]);
  
    return (
        <CartContext.Provider value={{
            cart,
            AddCart,
            itemInCart,
            emptyCart,
            removeItem,
            totalCart,
            totalCantidadCart
        }}>
        {children}
        </CartContext.Provider>
        )
}