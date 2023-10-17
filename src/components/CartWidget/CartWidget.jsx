import '../../styles/CartWidget/_cartWidget.scss'
import carrito from '../../assets/carrito.png'

const CartWidget = () => {

    return (
        <div>
            <img src={carrito} className='logo__cart' />
            <span className='number'>0</span>
        </div>
    )
}

export default CartWidget