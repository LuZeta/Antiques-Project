import "../stylesCss/CardStyles.css";


const ItemCount = ({ cantidad, setCantidad, max, onAdd }) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="itemCount-container">

            <div className="counter">
            <button 
                onClick={handleRestar}>
                  -
            </button>

            <span>{cantidad}</span>

            <button 
                onClick={handleSumar}>
                +
            </button>
            </div>

            <div className="counter-button">
            <button className="btn-add-cart" onClick={onAdd}>Agregar al carrito</button>   
            </div>  

        </div>
    )
}

export default ItemCount;