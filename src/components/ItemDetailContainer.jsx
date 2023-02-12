import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "Productos", itemId);

    getDoc(docRef).then((doc) => {
      setItem({ ...doc.data(), id: doc.id });
    });
  }, [itemId]);

  return <div className="wrapper-flex">{item && <ItemDetail {...item} />}</div>;
};

export default ItemDetailContainer;
