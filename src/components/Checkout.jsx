import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import "../stylesCss/App.css";
import { db } from "../firebase/firebase";
import { collection, writeBatch, documentId, getDocs, query, where, addDoc  } from "firebase/firestore";


const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // validacion
        if (values.nombre.length < 2) {
            alert("Nombre inválido")
            return
        }
        if (values.direccion.length < 2) {
            alert("Dirección inválida")
            return
        }
        if (values.email.length < 5) {
            alert("Email inválido")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'Productos')

        const outOfStock = []

        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ) )

        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
                const item = cart.find(item => item.id === doc.id)

                if (doc.data().stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.cantidad
                    })
                } else {
                    outOfStock.push(item)
                }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptycart()
                        })
                        .catch((error) => console.log(error) )
                })
        } else {
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    return (

    <div className="login">
      <div className="form-container">

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="label">
            Nombre
          </label>
          <input
            type="text"
            name= "nombre"
            onChange={handleInputChange}
            value={values.nombre}
            placeholder=""
            className="input input-name"
          />
          
          <label htmlFor="direccion" className="label">
            Direccion
          </label>
          <input
            type="text"
            name="direccion"
            onChange={handleInputChange}
            value={values.direccion}
            placeholder=""
            className="input input-direccion"
          />
          
          <label htmlFor="localidad" className="label">
            Localidad
          </label>
          <input
            type="text"
            name="localidad"
            onChange={handleInputChange}
            value={values.localidad}
            placeholder=""
            className="input input-direccion"
          />
          
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
             type="text"
             name= "email"
             onChange={handleInputChange}
             value={values.email}
             placeholder=""
             className="input input-email"
          />

        
          <p className="submit">
            <span>Confirma tu Orden</span>
         </p>
          <button type="submit" className="secondary-button login-b">Enviar</button>

        </form>
      </div>
    </div>
  );
};

export default Checkout;
