import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="color-texto">Tu carrito está vacío</h2>
                <hr />
                <p >Te invitamos a ver nuestras ofertas</p>
                <Link to="/" className="btn btn-primary color-boton">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="list__container">Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <img src={item.img} style={{ width: "30%" }} />
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subotal: {item.cantidad * item.precio}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt /></button>
                        <hr />
                    </div>
                ))
            }

            <div>
                <h3>TOTAL: ${totalCompra()}</h3>
                <hr />
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-success">Terminar compra</Link>
            </div>
        </div>
    )
}

export default Cart
