import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, category, image, description, price} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
      navigate(-1)
  }

  return (
    <div className="">
            <h4 className="name">{name}</h4>
            <img src={image}/>
            <p>Categoría: {category}</p>
            <p>{description}</p>
            <p>Precio: ${price}</p>

            <button className="btn" onClick={handleVolver}>Volver</button>
        
    </div>
  );
}

export default ItemDetail;
