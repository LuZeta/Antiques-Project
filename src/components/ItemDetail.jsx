import { useNavigate } from "react-router-dom"
import "../stylesCss/CardStyles.css";


const ItemDetail = ( {id, name, category, image, description, price} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
      navigate(-1)
  }

  return (
    <div className="container-detail">
     <div className="card">
            <h4 className="name-detail">{name}</h4>
            <img className="img-detail" src={image}/>
            <p>Categoría: {category}</p>
            <p className="description">{description}</p>
            <p>Precio: ${price}</p>
            
            <button className="btn-secondary">Agregar al carrito</button>   
             <button className="btn" onClick={handleVolver}>Volver</button> 

      </div>
      </div> 
  );
}

export default ItemDetail;
