import carrito from '../../assets/carrito.png'


const CartWidget = () => {

    return (
        <div>
            <img src={carrito} className='logo' />
            <span className='number'>0</span>
        </div>
    )
}

export default CartWidget