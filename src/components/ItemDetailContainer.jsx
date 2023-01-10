import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { datositemDetailId } from "../helpers/datosListContainer";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        datositemDetailId( Number(itemId) )
            .then((data) => {
                setItem(data)
            })
    }, [itemId])

    return (
        <div className="wrapper-flex">
            {
                item && <ItemDetail {...item}/>
            }

        </div>
    )
}

export default ItemDetailContainer;