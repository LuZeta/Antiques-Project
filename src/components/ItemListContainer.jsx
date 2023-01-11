import { useEffect, useState } from "react";
import { datosListContainer } from "../helpers/datosListContainer";
import ItemList from "./ItemList";
import "../stylesCss/CardStyles.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)
    useEffect(() => {
        datosListContainer()
            .then((res) => {
              if (categoryId) {
                setProductos(res.filter(prod => prod.category === categoryId))
              }else{
                setProductos(res)
              }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])

    return (
        
        <div className="wrapper-flex">
            <ItemList productos={productos}/>
        </div>
      
    )
}

export default ItemListContainer;
