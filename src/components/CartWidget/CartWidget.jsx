import '../../styles/CartWidget/_cartWidget.scss'
import carrito from '../../assets/carrito.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
                <img src={carrito} className='logo__cart' />
                <span className='number'>{totalCantidad()}</span>
            </Link>
        </div>
    )
}

export default CartWidget
