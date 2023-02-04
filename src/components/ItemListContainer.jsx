import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "../stylesCss/CardStyles.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { CircularProgress } from "@mui/material";

const ItemListContainer = () => {
  
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)
   
   useEffect(() => {
   
    const productosRef = collection(db, "Productos")
    const q = categoryId
                ? query(productosRef, where("category", "==", categoryId) )
                : productosRef
       getDocs(q)
           .then((resp) => {
            setProductos( resp.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            }))
        })
      }, [categoryId])
    
      return (
        <div className="wrapper-flex">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;