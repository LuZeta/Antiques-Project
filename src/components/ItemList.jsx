import Item from "./Item"
import "../stylesCss/CardStyles.css";

const ItemList = ( {productos} ) => {

    return (
        
            <div className="">
                { productos.map((prod) => <Item   key={prod.id} {...prod}/>)}
            </div>
     
    )
}

export default ItemList