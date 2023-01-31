import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "../stylesCss/CardStyles.css";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";


const ItemDetail = ( {id, name, category, image, description, price, stock} ) => {

  const { AddCart, itemInCart } = useCartContext();
  console.log (itemInCart(id))

  const navigate = useNavigate();
  
  const [cantidad, setCantidad] = useState(1);
  
    const handleVolver = () => {
      navigate(-1)
  }

  const handleAddCart = () => {
        const item = {
          id, name, stock, category, image, description, price, cantidad
        }

       AddCart(item);
  }

  return (
    <div className="container-detail">
     <div className="card">
            <h4 className="name-detail">{name}</h4>
            <img className="img-detail" src={image}/>
            <p>Categoría: {category}</p>
            <p className="description">{description}</p>
            <p>Precio: ${price}</p>

            {
              !itemInCart(id)
                ?<ItemCount
                max={stock} 
                cantidad={cantidad}
                setCantidad={setCantidad}
                onAdd={handleAddCart}
                />
              : <Link to="/cart" className="btn-add-cart">Ver Carrito</Link>
            }
            
            
            <button className="btn-return" onClick={handleVolver}>Volver</button> 
      </div>
      </div> 
  );
}

export default ItemDetail;
