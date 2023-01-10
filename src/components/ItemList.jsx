import Item from "./Item"
import "../stylesCss/CardStyles.css";

const ItemList = ( {productos} ) => {

    return (
        
            <>
                { productos.map((prod) => <Item   key={prod.id} {...prod}/>)}
            </>
     
    )
}

export default ItemList