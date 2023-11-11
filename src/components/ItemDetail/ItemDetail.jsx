import '../../styles/ItemDetail/_itemDetail.scss'
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = { ...item, cantidad }
        agregarAlCarrito(newItem)
    }

    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} className="img" />
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <p>Subtotal: {item.precio * cantidad}</p>
            <br />
            {
                isInCart(item.id)
                    ? <Link className="btn btn-success" to="/cart">Ir al carrito</Link>
                    : <ItemCount
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        stock={item.stock}
                        agregar={handleAgregar}
                    />
            }
        </div>
    )
}

export default ItemDetail
