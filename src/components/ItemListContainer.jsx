import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import "../stylesCss/CardStyles.css";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
   
    useEffect(() => {
        pedirDatos()
            .then((res) => {
              setProductos(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="ItemListContainer">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;
