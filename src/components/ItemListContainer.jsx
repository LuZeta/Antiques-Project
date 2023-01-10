import { useEffect, useState } from "react";
import { datosListContainer } from "../helpers/datosListContainer";
import ItemList from "./ItemList";
import "../stylesCss/CardStyles.css";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
   
    useEffect(() => {
        datosListContainer()
            .then((res) => {
              setProductos(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        
        <div className="wrapper-flex">
            <ItemList productos={productos}/>
        </div>
      
    )
}

export default ItemListContainer;
