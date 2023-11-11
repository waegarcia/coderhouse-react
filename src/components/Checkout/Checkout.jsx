import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, getDoc, addDoc, writeBatch, doc } from "firebase/firestore"
import { db } from "../../api/firebase/config"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const schema = Yup.object().shape({
    nombre: Yup.string().required("Por favor complete este campo con su nombre")
        .min(3, "El nombre es demasiado corto")
        .max(40, "El nombre es demasiado largo"),

    direccion: Yup.string().required("Por favor complete este campo con su direccion")
        .min(6, "La direccion es demasido corta")
        .max(40, "La direccion es demasiado larga"),

    email: Yup.string().required("Por favor complete este campo con una direccion de email")
        .email("La direccion de email es invalida")
})

const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {

        const orden = {
            client: values,
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad })),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const promesas = cart.map((item) => {
            const ref = doc(productosRef, item.id)
            return getDoc(ref)
        })

        const productos = await Promise.all(promesas)

        const outOfStock = []

        productos.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            console.log(outOfStock)
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="color-texto">Muchas gracias por tu compra!!!</h2>
                <hr />
                <p>Tu número de orden es: {orderId}</p>
                <Link to="/" className="btn btn-primary color-boton">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2 className="list__container">Checkout</h2>
            <hr />

            <Formik
                initialValues={{ nombre: '', direccion: '', email: '' }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {
                    () => (
                        <Form className="form form__container">
                            <h4>Por favor complete con sus datos:</h4><br />
                            <h5>Nombre:</h5>
                            <Field name="nombre" type="text" className="form-control my-2" />
                            <ErrorMessage name="nombre" component={"p"} className="color-texto-error" /> <br />

                            <h5>Direccion:</h5>
                            <Field name="direccion" type="text" className="form-control my-2" />
                            <ErrorMessage name="direccion" component={"p"} className="color-texto-error" /> <br />

                            <h5>Email:</h5>
                            <Field name="email" type="email" className="form-control my-2" />
                            <ErrorMessage name="email" component={"p"} className="color-texto-error" /> <br />

                            <button className="btn btn-primary color-boton" type="submit">Enviar</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}

export default Checkout
